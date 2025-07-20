<script lang='ts'>

let { title = "Devan McGeer",
      subtitle = "site reliability engineer",
} = $props()

const headerTitle = title.toUpperCase()
const headerSubtitle = subtitle.toUpperCase()

</script>


<div class="py-16 text-center sm:py-24">
	<h1
		class="font-lexend-zetta text-4xl leading-tight font-light tracking-widest sm:text-6xl md:text-7xl"
	>
		{headerTitle}
	</h1>
	<p class="mt-6 text-lg tracking-[0.3em] text-gray-700 sm:text-xl sm:tracking-[0.4em] md:text-2xl">
		{headerSubtitle}
	</p>
</div>
