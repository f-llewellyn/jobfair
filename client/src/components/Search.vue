<template>
	<form action="#">
		<input
			v-model="filters.title"
			type="text"
			placeholder="SEARCH"
			class="search-bar"
		/>
		<button class="btn search-btn" @click.prevent="shareFilters">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
				<path
					d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
				/>
			</svg>
		</button>
		<button
			class="pointer btn filter"
			@click.prevent="filterDropdown = !filterDropdown"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
				<path
					d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"
				/>
			</svg>
		</button>

		<div class="dropdowns" :class="{ active: filterDropdown }">
			<div class="triangle"></div>
			<input
				v-model="filters.location"
				type="text"
				placeholder="Find a location..."
				class="search-bar"
			/>

			<div class="range">
				<p>Min Pay: £{{ filters.pay }}</p>
				<vue3-slider
					v-model="filters.pay"
					tooltip
					color="#05386B"
					track-color="#f4f4f4"
					width="100%"
					:max="25"
				/>
			</div>

			<div class="range">
				<p>Max Hours: {{ filters.hours }}</p>
				<vue3-slider
					v-model="filters.hours"
					tooltip
					color="#05386B"
					track-color="#f4f4f4"
					width="100%"
					:max="40"
				/>
			</div>
		</div>
	</form>
</template>

<script>
	import { ref } from "vue";
	import slider from "vue3-slider";

	export default {
		name: "search",
		components: {
			"vue3-slider": slider,
		},
		data() {
			let filters = ref({
				title: "",
				pay: 0,
				hours: 0,
				location: "",
			});
			let filterDropdown = false;
			return { filters, filterDropdown };
		},
		methods: {
			shareFilters() {
				this.$emit("receiveFilters", this.filters);
			},
		},
		mounted() {
			this.$emit("receiveFilters", this.filters);
		},
	};
</script>

<style scoped>
	.btn {
		display: grid;
		place-items: center;
	}

	form {
		position: relative;
		max-width: 350px;
		margin: 1rem auto;
		flex-basis: 100%;
		flex: 1;
		display: flex;
		justify-content: space-between;
	}

	.search-btn {
		aspect-ratio: 1/1;
		background: var(--green);
		color: var(--light-grey);
		padding: 0.25rem;
		min-width: 37px;
	}

	.filter {
		position: relative;
		aspect-ratio: 1/1;
		background: var(--grey);
		color: var(--light-grey);
		padding: 0.25rem;
		min-width: 37px;
	}

	.search-bar {
		padding: 0.5rem 1.5rem;
		color: var(--grey);
		font-weight: bold;
		border: 2px solid var(--grey);
		border-radius: 1rem;
		font-size: 14px;
		min-width: 50%;
		max-width: 100%;
	}

	.search-bar:focus {
		outline: none;
		border: 2px solid var(--grey);
	}

	.active {
		display: flex !important;
	}

	.dropdowns {
		position: absolute;
		z-index: 100;
		top: 3rem;
		right: 1rem;
		background: var(--light-green);
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		gap: 1rem;
		border-radius: 10px;
		width: 70vw;
	}

	.triangle {
		background: var(--light-green);
		clip-path: polygon(100% 0, 0% 100%, 100% 100%);
		position: absolute;
		top: -1rem;
		right: 0;
		aspect-ratio: 1/1;
		width: 2rem;
	}

	select {
		background: var(--blue);
		border: none;
		color: var(--light-grey);
		text-transform: uppercase;
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-radius: 10px;
		font-weight: bold;
		font-size: 14px;
	}

	.range {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.25rem;
		width: 100%;
		color: var(--grey);
		text-transform: uppercase;
		font-size: 14px;
	}

	label {
		color: var(--grey);
		font-weight: bold;
		text-transform: uppercase;
	}

	svg {
		fill: var(--light-grey);
		width: 16px;
	}
</style>
