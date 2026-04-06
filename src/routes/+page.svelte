<script lang="ts">
    let menuAberto = $state(false);
    function alternarMenu() {
        menuAberto = !menuAberto;
    }
</script>

<nav class="bg-[#1f1f20]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="" class="shrink-0">
					<img src="/images/svelte-logo-by-gengns.png" alt="logo bacana" class="h-10 w-10" />
				</a>
				<div class="hidden lg:block">
					<div class="ml-10 flex items-baseline space-x-4 lg:text-xs xl:text-base">
						<a
							href=""
							class="rounded-lg px-3 py-2 font-medium text-[#dce0e6] transition duration-300 ease-in-out hover:bg-gray-700"
							>Testando</a
						>
					</div>
				</div>
			</div>
			<div class="-mr-2 flex lg:hidden">
				<button
					id="menuButton"
					class="inline-flex items-center justify-center rounded-lg p-2 text-white transition duration-300 ease-in-out hover:bg-gray-700"
					aria-label="Menu"
					aria-expanded="false"
                    onclick={alternarMenu}
				>
					<i class="bi bi-list"></i>
				</button>
			</div>
		</div>
	</div>
	<div id="menu" class:hidden={!menuAberto} class="lg:hidden">
		<div class="fixed top-0 bottom-0 w-75 overflow-y-auto bg-[#1f1f20] p-2 text-center lg:left-0">
			<div class="text-xl text-[#dce0e6]">
				<div class="nt-1 flex items-center p-2">
					<i class="bi bi-app indicator rounded-lg bg-[#567ebb] px-2"></i>
					<h1>The Website</h1>
					<i class="bi bi-x cursor-pointer lg:hidden"></i>
				</div>
				<hr class="my-2 text-[#dce0e6]" />
			</div>
			<div
				class="mt-3 flex cursor-pointer items-center rounded-lg bg-[#606d80] p-2.5 px-4 text-[#dce0e6] duration-300"
			>
				<i class="bi bi-search"></i>
				<input
					type="text"
					placeholder="Pesquisar"
					class="text-15 focus-outline-none ml-4 w-full rounded-lg bg-transparent"
				/>
			</div>
			<div
				class="rounded-llg mt-2 flex cursor-pointer items-center p-2.5 px-4 text-[#dce0e6] duration-300 hover:bg-[#2b4c7e]"
			>
				<i class="bi bi-house-door"></i>
				<span class="ml-5 text-[15px] text-[#dce0e6]">Vasco</span>
			</div>
		</div>
	</div>
</nav>
