<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="bg-red-500 p-4">(header)</header>
	<!-- Grid Column -->
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
		<!-- Sidebar (Left) -->
		<aside class="bg-yellow-500 p-4">(sidebar)</aside>
		<!-- Main -->
		<main class="space-y-4 p-4">
			{@render children()}
		</main>
		<!-- Sidebar (Right) -->
		<aside class="bg-yellow-500 p-4">(sidebar)</aside>
	</div>
	<!-- Footer -->
	<footer class="bg-blue-500 p-4">(footer)</footer>
</div>
