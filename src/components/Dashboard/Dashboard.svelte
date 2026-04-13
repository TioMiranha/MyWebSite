<script lang="ts">
	import CardContainer from '../Container/CardContainer.svelte';
	import { pipeline, priorities, recentActivities, teamSnapshot } from '$lib/data/atlas';
</script>

<div class="space-y-6 py-6 sm:space-y-8 sm:py-8">
	<section
		id="dashboard"
		class="rounded-[2rem] border border-[var(--border)] bg-white/88 p-6 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.2)] backdrop-blur sm:p-8"
	>
		<div class="grid gap-8 xl:grid-cols-[1.5fr_auto] xl:items-center">
			<div class="max-w-2xl">
				<p class="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
					Painel corporativo
				</p>
				<h1 class="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
					Atlas Dashboard
				</h1>
				<p class="mt-4 text-base leading-7 text-[var(--subtle)]">
					Acompanhe indicadores, prioridades da semana e a movimentacao das equipes em um painel
					simples, rapido e pronto para apresentacao.
				</p>
			</div>

			<div class="grid gap-3 sm:grid-cols-2 xl:w-[22rem] xl:grid-cols-1">
				<div class="rounded-3xl border border-[var(--border)] bg-[var(--page)] p-4">
					<p class="text-xs font-semibold tracking-[0.18em] text-[var(--subtle)] uppercase">
						Status da operacao
					</p>
					<p class="mt-2 text-2xl font-semibold text-[var(--text)]">Estavel e acima da meta</p>
					<p class="mt-2 text-sm text-[var(--subtle)]">
						Atualizado ha 5 min com 12 equipes online.
					</p>
				</div>

				<div class="flex items-center gap-3">
					<button
						type="button"
						class="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[var(--nav)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
					>
						<i class="bi bi-download"></i>
						Exportar
					</button>
					<button
						type="button"
						class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-white text-[var(--nav)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent-strong)]"
						aria-label="Atualizar dados"
					>
						<i class="bi bi-arrow-clockwise"></i>
					</button>
				</div>
			</div>
		</div>
	</section>

	<CardContainer />

	<section id="operacoes" class="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
		<article
			class="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]"
		>
			<div class="flex items-center justify-between gap-4">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-[var(--subtle)] uppercase">
						Atividades recentes
					</p>
					<h2 class="mt-2 text-xl font-semibold text-[var(--text)]">Movimentacao da operacao</h2>
				</div>
				<span
					class="rounded-full bg-[var(--page)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]"
				>
					4 atualizacoes
				</span>
			</div>

			<div class="mt-6 space-y-4">
				{#each recentActivities as activity (activity.title)}
					<div class="flex gap-4 rounded-3xl border border-[var(--border)] p-4">
						<span
							class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--page)] text-[var(--accent-strong)]"
						>
							<i class={activity.icon}></i>
						</span>
						<div class="min-w-0">
							<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
								<h3 class="text-sm font-semibold text-[var(--text)]">{activity.title}</h3>
								<span class="text-xs font-medium text-[var(--subtle)]">{activity.time}</span>
							</div>
							<p class="mt-2 text-sm leading-6 text-[var(--subtle)]">{activity.detail}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<aside
			class="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]"
		>
			<p class="text-xs font-semibold tracking-[0.2em] text-[var(--subtle)] uppercase">
				Prioridades da semana
			</p>
			<h2 class="mt-2 text-xl font-semibold text-[var(--text)]">Fluxo de execucao</h2>

			<div class="mt-6 space-y-5">
				{#each priorities as priority (priority.label)}
					<div class="rounded-3xl border border-[var(--border)] p-4">
						<div class="flex items-start justify-between gap-3">
							<div>
								<h3 class="text-sm font-semibold text-[var(--text)]">{priority.label}</h3>
								<p class="mt-1 text-sm text-[var(--subtle)]">{priority.owner}</p>
							</div>
							<span class="text-sm font-semibold text-[var(--accent-strong)]">
								{priority.progress}%
							</span>
						</div>
						<div class="mt-4 h-2 rounded-full bg-[var(--page)]">
							<div
								class="h-2 rounded-full bg-[var(--accent)]"
								style={`width: ${priority.progress}%`}
							></div>
						</div>
					</div>
				{/each}
			</div>
		</aside>
	</section>

	<section id="relatorios" class="grid gap-6 lg:grid-cols-2">
		<article
			id="equipe"
			class="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]"
		>
			<div class="flex items-center justify-between gap-4">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-[var(--subtle)] uppercase">
						Equipe
					</p>
					<h2 class="mt-2 text-xl font-semibold text-[var(--text)]">Desempenho por area</h2>
				</div>
				<span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
					4 times monitorados
				</span>
			</div>

			<div class="mt-6 space-y-3">
				{#each teamSnapshot as member (member.name)}
					<div
						class="flex items-center justify-between rounded-3xl border border-[var(--border)] p-4"
					>
						<div>
							<p class="text-sm font-semibold text-[var(--text)]">{member.name}</p>
							<p class="mt-1 text-sm text-[var(--subtle)]">{member.team}</p>
						</div>
						<div class="text-right">
							<p class="text-sm font-semibold text-[var(--accent-strong)]">
								{member.efficiency}
							</p>
							<p class="mt-1 text-xs text-[var(--subtle)]">{member.status}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article
			class="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]"
		>
			<div class="flex items-center justify-between gap-4">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-[var(--subtle)] uppercase">
						Pipeline comercial
					</p>
					<h2 class="mt-2 text-xl font-semibold text-[var(--text)]">Visao de fechamento</h2>
				</div>
				<span
					class="rounded-full bg-[var(--page)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]"
				>
					Q2 em andamento
				</span>
			</div>

			<div class="mt-6 space-y-4">
				{#each pipeline as stage (stage.stage)}
					<div class="rounded-3xl border border-[var(--border)] p-4">
						<div class="flex items-center justify-between">
							<h3 class="text-sm font-semibold text-[var(--text)]">{stage.stage}</h3>
							<p class="text-sm font-semibold text-[var(--accent-strong)]">{stage.amount}</p>
						</div>
						<p class="mt-2 text-sm text-[var(--subtle)]">{stage.change}</p>
					</div>
				{/each}
			</div>
		</article>
	</section>
</div>
