/**
 * API Utility for handling fetch requests and errors
 */

type ApiError = {
	status: number;
	message: string;
	details?: unknown;
};

export async function apiFetch<T = unknown>(
	input: RequestInfo | URL,
	init?: RequestInit,
	timeout = 10000
): Promise<T> {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeout);

	try {
		const response = await fetch(input, {
			...init,
			signal: controller.signal
		});

		clearTimeout(timeoutId);

		if (!response.ok) {
			let errorData: unknown;
			try {
				errorData = await response.json();
			} catch {
				errorData = await response.text();
			}

			throw {
				status: response.status,
				message: `HTTP error ${response.status}`,
				details: errorData
			} as ApiError;
		}

		return await response.json();
	} catch (error) {
		clearTimeout(timeoutId);

		if (error instanceof DOMException && error.name === 'AbortError') {
			throw {
				status: 408,
				message: 'Request timeout'
			} as ApiError;
		}

		if (error instanceof SyntaxError) {
			throw {
				status: 500,
				message: 'Invalid JSON response'
			} as ApiError;
		}

		if (typeof error === 'object' && error !== null && 'status' in error) {
			throw error as ApiError;
		}

		throw {
			status: 0,
			message: 'Network error',
			details: error
		} as ApiError;
	}
}

/**
 * Helper to check if error is an API error
 */
export function isApiError(error: unknown): error is ApiError {
	return typeof error === 'object' && error !== null && 'status' in error && 'message' in error;
}
