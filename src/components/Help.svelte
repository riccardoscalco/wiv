<script>
	import { zIndex } from '../stores.js';
</script>

<section style="z-index: {$zIndex};">
	<div>
		<p>
			<span>a</span>
			: select new images
		</p>
		<p>
			<span>c</span>
			: clear selections
		</p>
		<p>
			<span>t</span>
			: toggle image size
		</p>
		<p>
			<span>h</span>
			: show commands
		</p>
	</div>
</section>

<style>
	section {
		position: fixed;
		background-color: var(--white);
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		padding: 8px 0;
	}

	span {
		background-color: var(--light-gray);
		padding: 6px 8px;
		color: var(--primary-color);
	}
</style>
