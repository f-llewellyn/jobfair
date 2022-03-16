<template>
	<div
		class="listings"
		:class="{ center: this.filteredListings.length === 0 }"
	>
		<!-- <p>{{ this.data }}</p> -->
		<p v-if="this.filteredListings.length === 0" class="err">
			Sorry, there don't seem to be any jobs at the moment <span>😕</span>
		</p>
		<!-- Display the listing element if there are more than 0 listings, create an element for each listing, and pass in the props -->
		<Listing
			v-else
			v-for="listing in this.filteredListings"
			:key="listing.id"
			:title="listing.title"
			:pay="listing.pay.toFixed(2)"
			:hours="listing.hours"
			:location="listing.location"
			:employer="listing.company"
			:applicationUrl="listing.applicationUrl"
		/>
	</div>
</template>

<script>
	import Listing from "./Listing.vue";

	export default {
		name: "listing-container",
		components: {
			Listing,
		},
		props: ["filters"],
		data() {
			const data = [];

			return { data };
		},
		async mounted() {
			try {
				const response = await fetch("http://localhost:3000/api");
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error =
						(this.data && this.data.message) || response.statusText;
					return Promise.reject(error);
				}
				this.data = await response.json();
			} catch (error) {
				console.warn(error.message);
			}
		},
		computed: {
			getFilters() {
				return this.filters;
			},

			filteredListings() {
				return this.data
					.filter((listing) => {
						if (this.getFilters.title) {
							return listing.title
								.toLowerCase()
								.includes(this.getFilters.title.toLowerCase());
						} else {
							return listing;
						}
					})
					.filter((listing) => {
						return listing.pay >= this.getFilters.pay;
					})
					.filter((listing) => {
						if (this.getFilters.hours > 0) {
							return listing.hours <= this.getFilters.hours;
						} else {
							return listing;
						}
					})
					.filter((listing) => {
						if (this.getFilters.location) {
							return listing.location
								.toLowerCase()
								.includes(
									this.getFilters.location.toLowerCase()
								);
						} else {
							return listing;
						}
					});
			},
		},
	};
</script>

<style scoped>
	.listings {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		align-items: center;
		/* margin: 1rem; */
		margin-bottom: 4rem;
	}

	.err {
		color: var(--grey);
		max-width: 27ch;
		text-align: center;
		font-weight: bold;
		font-size: 1.2rem;
	}

	span {
		font-weight: normal;
	}
</style>
