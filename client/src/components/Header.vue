<template>
	<header>
		<img src="/logo-text.svg" alt="jobfair logo" />
	</header>
</template>

<script>
	export default {
		name: "Header",
	};
</script>

<style scoped>
	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--green);
		min-height: 4rem;
		padding: 0 1rem;
	}

	img {
		max-width: 200px;
		width: 50%;
		padding-bottom: 0.5rem;
	}
</style>
