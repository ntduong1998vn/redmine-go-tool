<script lang="ts">
	import { FetchRedmineProjects } from '$lib/wailsjs/go/main/App';
	// If using Lucide icons, import here (optional)
	// import IconFolder from '@lucide/svelte/icons/folder';
</script>

<section class="space-y-6">
	<h2 class="preset-typo-headline">Danh sách Project</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#await FetchRedmineProjects()}
			<div class="col-span-full">
				<div
					class="card preset-filled-surface-100-900 flex h-32 animate-pulse items-center justify-center"
				>
					<span class="opacity-60">Đang tải danh sách dự án...</span>
				</div>
			</div>
		{:then projects}
			{#if projects.length === 0}
				<div class="col-span-full">
					<div class="card preset-filled-warning-500 flex h-32 items-center justify-center">
						<span class="opacity-60">Không có dự án nào.</span>
					</div>
				</div>
			{:else}
				{#each projects as project}
					<div
						class="card preset-filled-primary-100-900 hover:border-primary-500 flex cursor-pointer flex-col gap-2 border border-transparent p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl"
					>
						<h3 class="preset-typo-title mb-2 flex items-center gap-2">
							<!-- <IconFolder size={20} /> -->
							{project.name}
						</h3>
						<p class="text-sm opacity-60">ID: <span class="font-mono">{project.id}</span></p>
						<p class="text-sm">{project.description}</p>
					</div>
				{/each}
			{/if}
		{:catch error}
			<div class="col-span-full">
				<div class="card preset-filled-error-500 flex h-32 items-center justify-center">
					<span class="text-error-700">Lỗi tải dự án: {error.message}</span>
				</div>
			</div>
		{/await}
	</div>
</section>
