<script lang="ts">
	import DesktopNav from '../components/Nav/DesktopNav.svelte';
	import MobileNav from '../components/Nav/MobileNav.svelte';
	import Dashboard from '../components/Dashboard/Dashboard.svelte';
	import Container from '../components/Container/Container.svelte';
</script>

<main>
	<DesktopNav />
	<MobileNav />
	<Container>
		<Dashboard />
	</Container>
</main>
