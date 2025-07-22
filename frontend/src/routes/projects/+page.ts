import type { Load } from '@sveltejs/kit';
import type { Project } from '../../types/project';

export const load: Load = async () => {
	const REDMINE_URL = 'https://redmine.splus-software.com';
	const API_KEY = 'cad5eb98b070c1ee75330031c0e34ed4cd412eb1';

	const res = await fetch(`${REDMINE_URL}/projects.json`, {
		headers: {
			'X-Redmine-API-Key': API_KEY
		}
	});

	if (!res.ok) throw new Error('Không thể lấy danh sách project');
	const data = await res.json();

	return {
		projects: (data.projects as Project[]) || []
	};
};
