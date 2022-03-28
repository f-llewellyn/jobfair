<template>
	<Header />
	<div class="container">
		<h2>You Appear to be offline. Please reconnect and try again.</h2>
		<img src="/offline.svg" alt="offline" />
	</div>
</template>
<script>
	import Header from "../components/Header.vue";
	export default {
		name: "offline",
		components: {
			Header,
		},
	};
</script>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem;
		color: var(--grey);
		margin-top: 5rem;
	}

	h2 {
		max-width: 25ch;
	}

	img {
		width: 100%;
		max-width: 320px;
		margin: 2rem 0;
		padding-right: 1rem;
	}
</style>
