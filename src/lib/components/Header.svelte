<script lang="ts">
    export let tabs = [
        { name: "About me", link: "#about", disabled: false },
        { name: "Project", link: "#projects", disabled: true },
        { name: "Thoughts", link: "#thoughts", disabled: true },
    ];
</script>

<header
    class="top-0 px-6 flex items-center justify-between border-b border-solid bg-amber-500"
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Devan McGeer</b>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <button disabled={tab.disabled}>
                <a
                    href={tab.link}
                    class={"duration-200 hover:text-blue-400" + tab.disabled? "text-gray-200":""}
                    target={index === 2 ? "_blank" : ""}
                >
                    <p>{tab.name}</p>
                </a>
            </button>
        {/each}


        <button
        class="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div
            class="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Get in touch</h4>
    </button>
    </div>
</header>
