<script>
	import { zIndex } from '../stores.js';
</script>

<section style="z-index: {$zIndex};">
	<div>
		<p>
			<span>h</span>
			: show help
		</p>
		<p>
			<span>s</span>
			: select new images
		</p>
		<p>
			<span>c</span>
			: clear screen
		</p>
		<p>
			<span>t</span>
			: toggle image size
		</p>
		<p>
			<a href="https://github.com/riccardoscalco/wiv">View on Github</a>
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

	p:first-child {
		border-bottom: 1px solid var(--light-gray);
		padding-bottom: 15px;
		margin-bottom: 5px;
	}

	p:last-child {
		margin-top: 10px;
	}

	a {
		color: var(--primary-color);
	}

	span {
		background-color: var(--light-gray);
		padding: 6px 8px;
		color: var(--primary-color);
	}
</style>
