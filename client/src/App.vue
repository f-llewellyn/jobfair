<template>
	<div v-if="this.isOnline == false">
		<Offline />
	</div>

	<div v-else>
		<router-view />
		<Navigation />
	</div>
</template>

<script>
	import Navigation from "./components/Navigation.vue";
	import Offline from "./views/Offline.vue";

	export default {
		name: "app",
		components: {
			Navigation,
			Offline,
		},
		data() {
			return {
				isOnline: navigator.onLine,
			};
		},
		Mounted() {
			window.addEventListener("online", () => {
				this.isOnline = true;
				console.log(this.isOnline);
			});
			window.addEventListener("offline", () => {
				this.isOnline = false;
				console.log(this.isOnline);
			});
		},
	};
</script>

<style></style>
