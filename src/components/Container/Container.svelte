<script lang="ts">
	let { children } = $props();
</script>

<div class=" mx-auto w-full sm:px-2 lg:px-4">
	<div class="m-3.5">
		{@render children()}
	</div>
</div>
