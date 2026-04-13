<script lang="ts">
	import Container from '../Container/Container.svelte';
	import { navItems } from '$lib/data/atlas';

	function irParaSecao(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<nav class="hidden border-b border-white/10 bg-[var(--nav)]/95 backdrop-blur lg:block">
	<Container>
		<div class="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6">
			<a href="#dashboard" class="flex items-center gap-3">
				<span
					class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-bold tracking-[0.24em] text-white shadow-lg shadow-[color:var(--accent)]/20"
				>
					AT
				</span>
				<span class="space-y-0.5">
					<span class="block text-sm font-semibold tracking-[0.2em] text-[var(--text-on-dark)]">
						ATLAS
					</span>
					<span class="block text-xs text-white/55">Operations Suite</span>
				</span>
			</a>

			<ul
				class="flex items-center gap-1 justify-self-center rounded-full border border-white/10 bg-white/5 p-1.5 text-sm text-[var(--text-on-dark)]"
			>
				{#each navItems as item, index (item.section)}
					<li>
						<button
							type="button"
							onclick={() => irParaSecao(item.section)}
							class={`inline-flex rounded-full px-4 py-2 transition ${
								index === 0
									? 'bg-white/12 font-semibold text-white'
									: 'text-white/70 hover:bg-white/8 hover:text-white'
							}`}
						>
							{item.label}
						</button>
					</li>
				{/each}
			</ul>

			<div class="justify-self-end">
				<button
					type="button"
					class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-5 py-2.5 text-sm font-semibold text-[var(--text-on-dark)] transition hover:border-white/30 hover:bg-white/12"
				>
					<i class="bi bi-person-circle text-base"></i>
					Acessar
				</button>
			</div>
		</div>
	</Container>
</nav>
