<script lang="ts">
	import { metricCards } from '$lib/data/atlas';
</script>

<section id="indicadores" class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
	{#each metricCards as card (card.label)}
		<article
			class={`relative overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-0.5 ${
				card.featured
					? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-xl shadow-[color:var(--accent)]/20 md:col-span-2'
					: 'border-[var(--border)] bg-white text-[var(--text)] shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)]'
			}`}
		>
			{#if card.featured}
				<div
					class="pointer-events-none absolute -top-12 -right-8 h-36 w-36 rounded-full bg-white/10 blur-2xl"
				></div>
			{/if}

			<div class="flex items-start justify-between gap-4">
				<div>
					<p class={`text-sm ${card.featured ? 'text-white/72' : 'text-[var(--subtle)]'}`}>
						{card.label}
					</p>
					<p class="mt-3 text-3xl font-semibold tracking-tight">{card.value}</p>
				</div>
				<span
					class={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg ${
						card.featured
							? 'bg-white/14 text-white'
							: 'bg-[var(--page)] text-[var(--accent-strong)]'
					}`}
				>
					<i class={card.icon}></i>
				</span>
			</div>

			<div class="mt-10 flex items-end justify-between gap-4">
				<p class={`max-w-52 text-sm ${card.featured ? 'text-white/72' : 'text-[var(--subtle)]'}`}>
					{card.helper}
				</p>
				<span
					class={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
						card.featured
							? 'bg-white/14 text-white'
							: 'bg-[var(--page)] text-[var(--accent-strong)]'
					}`}
				>
					{card.trend}
				</span>
			</div>
		</article>
	{/each}
</section>
