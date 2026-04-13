export type NavItem = {
	label: string;
	section: string;
};

export type MetricCard = {
	label: string;
	value: string;
	trend: string;
	helper: string;
	icon: string;
	featured?: boolean;
};

export type ActivityItem = {
	title: string;
	detail: string;
	time: string;
	icon: string;
};

export type PriorityItem = {
	label: string;
	owner: string;
	progress: number;
};

export type TeamSnapshot = {
	name: string;
	team: string;
	efficiency: string;
	status: string;
};

export type PipelineStage = {
	stage: string;
	amount: string;
	change: string;
};

export const navItems: NavItem[] = [
	{ label: 'Dashboard', section: 'dashboard' },
	{ label: 'Operacoes', section: 'operacoes' },
	{ label: 'Relatorios', section: 'relatorios' },
	{ label: 'Equipe', section: 'equipe' }
];

export const metricCards: MetricCard[] = [
	{
		label: 'Receita consolidada',
		value: 'R$ 284 mil',
		trend: '+18,2%',
		helper: 'Comparado com a ultima semana',
		icon: 'bi bi-graph-up-arrow',
		featured: true
	},
	{
		label: 'Projetos ativos',
		value: '24',
		trend: '+3',
		helper: 'Novos projetos nesta semana',
		icon: 'bi bi-kanban'
	},
	{
		label: 'Chamados abertos',
		value: '12',
		trend: '-8%',
		helper: 'Fila reduzida nas ultimas 48h',
		icon: 'bi bi-headset'
	},
	{
		label: 'Eficiência media',
		value: '82%',
		trend: '+5 pts',
		helper: 'Acima da meta definida para abril',
		icon: 'bi bi-speedometer2'
	}
];

export const recentActivities: ActivityItem[] = [
	{
		title: 'Relatorio financeiro exportado',
		detail: 'Equipe executiva baixou o consolidado mensal com os dados de vendas.',
		time: 'Ha 12 min',
		icon: 'bi bi-file-earmark-arrow-down'
	},
	{
		title: 'Meta da operacao atualizada',
		detail: 'O time de atendimento ajustou o objetivo semanal para 96 tickets resolvidos.',
		time: 'Ha 34 min',
		icon: 'bi bi-bullseye'
	},
	{
		title: 'Novo cliente movido para onboarding',
		detail: 'Conta Enterprise liberada para o time de implantacao iniciar o setup.',
		time: 'Ha 1 h',
		icon: 'bi bi-briefcase'
	},
	{
		title: 'Reuniao de alinhamento marcada',
		detail: 'Gestao comercial agendou checkpoint rapido com o time de vendas.',
		time: 'Ha 2 h',
		icon: 'bi bi-calendar-event'
	}
];

export const priorities: PriorityItem[] = [
	{ label: 'Concluir revisao do dashboard executivo', owner: 'Ana Clara', progress: 72 },
	{ label: 'Responder tickets criticos do suporte', owner: 'Time CX', progress: 48 },
	{ label: 'Fechar aprovacao do relatorio semanal', owner: 'Marcos Lima', progress: 91 }
];

export const teamSnapshot: TeamSnapshot[] = [
	{ name: 'Ana Clara', team: 'Operacoes', efficiency: '91%', status: 'Em foco' },
	{ name: 'Marcos Lima', team: 'Comercial', efficiency: '84%', status: 'Em reuniao' },
	{ name: 'Julia Prado', team: 'Suporte', efficiency: '88%', status: 'Disponivel' },
	{ name: 'Pedro Maia', team: 'Financeiro', efficiency: '79%', status: 'Revisando' }
];

export const pipeline: PipelineStage[] = [
	{ stage: 'Prospeccao', amount: '18 contas', change: '+4 esta semana' },
	{ stage: 'Negociacao', amount: '9 contas', change: '+2 avancos' },
	{ stage: 'Fechamento', amount: '5 contas', change: '1 contrato previsto hoje' }
];
