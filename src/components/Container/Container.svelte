<script lang="ts">
	let { children } = $props();
</script>

<div class="m-0 max-w-lvh">
	<div class=" m-3.5">
		{@render children()}
	</div>
</div>
