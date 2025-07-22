<script lang="ts">
	let { data } = $props();
</script>

<h2>Danh sách Project</h2>
<ul>
	{#each data.projects as project}
		<li>
			<strong>{project.name}</strong> <br />
			<span>ID: {project.id}</span> <br />
			<span>{project.description}</span>
		</li>
	{/each}
</ul>
