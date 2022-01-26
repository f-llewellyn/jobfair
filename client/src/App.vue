<template>
	<Discover />
	<Navigation />
</template>

<script>
import Home from './views/Home.vue';
import Discover from './views/Discover.vue';
import Navigation from "./components/Navigation.vue"

export default {
	name: "app",
	components: {
		Home,
		Discover,
		Navigation
	}
}
</script>

<style>
</style>
