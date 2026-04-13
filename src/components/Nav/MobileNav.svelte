<script lang="ts">
	import Container from '../Container/Container.svelte';
	import { navItems } from '$lib/data/atlas';

	let menuAberto = $state(false);

	function alternarMenu() {
		menuAberto = !menuAberto;
	}

	function fecharMenu() {
		menuAberto = false;
	}

	function irParaSecao(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		fecharMenu();
	}
</script>

<div class="border-b border-[var(--border)] bg-white/90 backdrop-blur lg:hidden">
	<Container>
		<div class="flex h-18 items-center justify-between py-2">
			<a href="#dashboard" class="flex items-center gap-3">
				<span
					class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--nav)] text-sm font-bold tracking-[0.2em] text-white"
				>
					AT
				</span>
				<span>
					<span class="block text-sm font-semibold tracking-[0.18em] text-[var(--text)]">ATLAS</span
					>
					<span class="block text-xs text-[var(--subtle)]">Painel operacional</span>
				</span>
			</a>

			<button
				id="menuButton"
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white text-[var(--nav)] shadow-sm transition hover:border-[var(--accent)]/40 hover:text-[var(--accent-strong)]"
				aria-label="Abrir menu"
				aria-controls="mobile-menu"
				aria-expanded={menuAberto}
				onclick={alternarMenu}
			>
				<i class={`bi ${menuAberto ? 'bi-x-lg' : 'bi-list'} text-lg`}></i>
			</button>
		</div>
	</Container>
</div>

{#if menuAberto}
	<button
		type="button"
		class="fixed inset-0 z-40 bg-slate-950/35 lg:hidden"
		onclick={fecharMenu}
		aria-label="Fechar menu"
	></button>

	<aside
		id="mobile-menu"
		class="fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-white/10 bg-[var(--nav)] px-5 py-6 text-[var(--text-on-dark)] shadow-2xl lg:hidden"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				<span
					class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-bold tracking-[0.2em] text-white"
				>
					AT
				</span>
				<div>
					<p class="text-sm font-semibold tracking-[0.2em] text-white">ATLAS</p>
					<p class="text-xs text-white/60">Sistema corporativo</p>
				</div>
			</div>

			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white/70 transition hover:bg-white/8 hover:text-white"
				onclick={fecharMenu}
				aria-label="Fechar menu"
			>
				<i class="bi bi-x-lg"></i>
			</button>
		</div>

		<div class="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
			<label
				for="mobile-search"
				class="mb-2 block text-xs font-semibold tracking-[0.18em] text-white/45 uppercase"
			>
				Pesquisa rapida
			</label>
			<div class="flex items-center gap-3 rounded-2xl bg-[var(--nav-secondary)] px-4 py-3">
				<i class="bi bi-search text-white/55"></i>
				<input
					id="mobile-search"
					type="text"
					placeholder="Buscar modulo"
					class="w-full border-0 bg-transparent p-0 text-sm text-white placeholder:text-white/40 focus:outline-none"
				/>
			</div>
		</div>

		<nav class="mt-6 flex-1 space-y-2">
			{#each navItems as item, index (item.section)}
				<button
					type="button"
					class={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
						index === 0
							? 'bg-[var(--accent)] font-semibold text-white'
							: 'text-white/72 hover:bg-white/8 hover:text-white'
					}`}
					onclick={() => irParaSecao(item.section)}
				>
					<span>{item.label}</span>
					<i class={`bi ${index === 0 ? 'bi-arrow-right-short' : 'bi-dot'} text-base`}></i>
				</button>
			{/each}
		</nav>

		<div class="rounded-3xl border border-white/10 bg-white/6 p-4">
			<p class="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">Resumo rapido</p>
			<p class="mt-3 text-3xl font-semibold text-white">82%</p>
			<p class="mt-2 text-sm text-white/65">Eficiência geral mantida acima da meta da semana.</p>
		</div>
	</aside>
{/if}
