<script lang="ts">
    let menuAberto = $state(false);
	function alternarMenu() {
		menuAberto = !menuAberto;
	}


	function fecharMenu() {
		menuAberto = false;
	}
    
</script>

<div class="-mr-2 flex lg:hidden">
	<button
		id="menuButton"
		class="m-2 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#1b263b] p-2 text-white transition duration-300 ease-in-out hover:bg-[#2b4c7e]"
		aria-label="Menu"
		aria-expanded="false"
		onclick={alternarMenu}
	>
		<i class="bi bi-list"></i>
	</button>
</div>

{#if menuAberto}
<button class="fixed inset-0 left-0 bg-black/40" onclick={fecharMenu} aria-label="backdrop"></button>
<div id="menu" class=" lg:hidden">
	<div class="fixed top-0 bottom-0 w-75 overflow-y-auto bg-[#1b263b] p-2 text-center lg:left-0">
		<div class="text-xl text-[#dce0e6]">
			<div class="nt-1 flex items-center p-2">
				<i class="bi bi-app-indicator m-2 rounded-lg bg-[#567ebb] px-2"></i>
				<h1 class="ml-2">Atlas</h1>
				<button class="ml-30 cursor-pointer rounded-lg px-2 transition duration-300 ease-in-out hover:bg-[#2b4c7e] lg:hidden" aria-label="Fechar menu" aria-expanded="false" onclick={fecharMenu}>
					<i
							class="bi bi-x"
						></i>
					</button>
				</div>
				<hr class="my-2 text-[#dce0e6]" />
			</div>
			<div
				class="mt-3 flex cursor-pointer items-center rounded-lg bg-[#1f2b43] p-2.5 px-4 text-[#dce0e6] duration-300"
			>
				<i class="bi bi-search"></i>
				<input
				type="text"
				placeholder="Pesquisar"
				class="focus-outline-none ml-4 w-full rounded-lg bg-transparent text-[#dce0e6]"
				/>
			</div>
			<div
				class="mt-2 flex cursor-pointer items-center rounded-lg p-2.5 px-4 text-[#dce0e6] duration-300 hover:bg-[#2b4c7e]"
			>
				<i class="bi bi-house-door"></i>
				<span class="ml-5 text-[15px] text-[#dce0e6]">Vasco</span>
			</div>
		</div>
	</div>
{/if}