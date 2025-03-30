<script lang="ts">
	import * as Menubar from "./lib/components/ui/menubar";
</script>

<main>
	<div class="bg-gray-400">
		hey there
	</div>
	<Menubar.Root class="Root bg-slate-600 ">
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					New Tab
					<Menubar.Shortcut>⌘T</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>New Window</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Share</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Print</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
	<div class="mt-20 pt-20">
		<h1>Hi, I am Devan McGeer</h1>
		<h1>An SRE</h1>
	</div>
</main>

<style>
</style>
