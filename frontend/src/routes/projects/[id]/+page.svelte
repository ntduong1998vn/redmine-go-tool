<script lang="ts">
	// This is a static component. Data is hardcoded for layout purposes.
	// In a real application, this data would be fetched from the Redmine API.
	const project = {
		name: 'Redmine Go App',
		description:
			'This is a sample project description. It provides a brief overview of the project goals, scope, and objectives. The purpose of this application is to create a modern and responsive interface for interacting with Redmine.',
		status: 'In Progress',
		startDate: '2024-01-15',
		endDate: '2024-12-31',
		manager: 'John Doe',
		members: [
			{ id: 1, name: 'Jane Smith' },
			{ id: 2, name: 'Peter Jones' },
			{ id: 3, name: 'Mary Williams' },
			{ id: 4, name: 'David Brown' }
		]
	};

	const tabs = ['Overview', 'Activity', 'Issues', 'Members'];
	let activeTab = 'Overview';
</script>

<div class="container mx-auto min-h-screen bg-gray-50 p-6">
	<!-- Project Header -->
	<header class="mb-6">
		<h1 class="text-4xl font-bold text-gray-800">{project.name}</h1>
	</header>

	<!-- Main Content -->
	<main class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<!-- Left Column: Project Details -->
		<div class="rounded-lg bg-white p-6 shadow-md lg:col-span-2">
			<!-- Project Description -->
			<div class="mb-6">
				<h2 class="mb-2 text-2xl font-semibold text-gray-700">Description</h2>
				<p class="leading-relaxed text-gray-600">{project.description}</p>
			</div>

			<!-- Project Info -->
			<div>
				<h2 class="mb-4 text-2xl font-semibold text-gray-700">Project Information</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="rounded-lg bg-gray-100 p-4">
						<span class="font-semibold text-gray-600">Status:</span>
						<span class="font-medium text-green-600">{project.status}</span>
					</div>
					<div class="rounded-lg bg-gray-100 p-4">
						<span class="font-semibold text-gray-600">Start Date:</span>
						<span class="text-gray-800">{project.startDate}</span>
					</div>
					<div class="rounded-lg bg-gray-100 p-4">
						<span class="font-semibold text-gray-600">End Date:</span>
						<span class="text-gray-800">{project.endDate}</span>
					</div>
					<div class="rounded-lg bg-gray-100 p-4">
						<span class="font-semibold text-gray-600">Manager:</span>
						<span class="text-gray-800">{project.manager}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Right Column: Members -->
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-2xl font-semibold text-gray-700">Members</h2>
			<ul class="space-y-3">
				{#each project.members as member}
					<li class="flex items-center space-x-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-600"
						>
							{member.name.charAt(0)}
						</div>
						<span class="text-gray-800">{member.name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</main>

	<!-- Tabs Navigation -->
	<div class="mt-8">
		<div class="border-b border-gray-200">
			<nav class="-mb-px flex space-x-8" aria-label="Tabs">
				{#each tabs as tab}
					<button
						on:click={() => (activeTab = tab)}
						class="whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
						class:border-indigo-500={activeTab === tab}
						class:text-indigo-600={activeTab === tab}
						class:border-transparent={activeTab !== tab}
						class:text-gray-500={activeTab !== tab}
						class:hover:text-gray-700={activeTab !== tab}
						class:hover:border-gray-300={activeTab !== tab}
					>
						{tab}
					</button>
				{/each}
			</nav>
		</div>

		<!-- Tab Content -->
		<div class="mt-6">
			{#if activeTab === 'Overview'}
				<div class="rounded-lg bg-white p-4 shadow">
					<h3 class="text-lg font-medium text-gray-900">Overview Content</h3>
					<p class="mt-2 text-gray-600">
						This is where the project overview content will be displayed.
					</p>
				</div>
			{/if}
			{#if activeTab === 'Activity'}
				<div class="rounded-lg bg-white p-4 shadow">
					<h3 class="text-lg font-medium text-gray-900">Activity Feed</h3>
					<p class="mt-2 text-gray-600">
						This is where the project activity feed will be displayed.
					</p>
				</div>
			{/if}
			{#if activeTab === 'Issues'}
				<div class="rounded-lg bg-white p-4 shadow">
					<h3 class="text-lg font-medium text-gray-900">Issues List</h3>
					<p class="mt-2 text-gray-600">
						This is where the list of project issues will be displayed.
					</p>
				</div>
			{/if}
			{#if activeTab === 'Members'}
				<div class="rounded-lg bg-white p-4 shadow">
					<h3 class="text-lg font-medium text-gray-900">Members Management</h3>
					<p class="mt-2 text-gray-600">This is where member management tools will be available.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
