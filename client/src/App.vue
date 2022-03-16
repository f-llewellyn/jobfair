<template>
	<router-view />
	<Navigation />
</template>

<script>
	import Navigation from "./components/Navigation.vue";

	export default {
		name: "app",
		components: {
			Navigation,
		},
	};
</script>
