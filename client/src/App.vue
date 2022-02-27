<template>
	<router-view />
	<Navigation />
</template>

<script>
	import Home from "./views/Home.vue";
	import Discover from "./views/Discover.vue";
	import Post from "./views/Post.vue";
	import Navigation from "./components/Navigation.vue";

	export default {
		name: "app",
		components: {
			Home,
			Discover,
			Navigation,
			Post,
		},
	};
</script>
