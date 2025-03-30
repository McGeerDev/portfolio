<script lang="ts">
	import * as Menubar from "./lib/components/ui/menubar";
</script>

<main>
	<div class="absolute top">
		<Menubar.Root class="Root">
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
		
	</div>
	<div >
		<h1>Hi, I am Devan McGeer</h1>
		<h1>An SRE</h1>
	</div>

</main>
<style>
</style>
