<template>
	<Header />
	<div class="center">
		<form autocomplete="off">
			<label for="title">Job Title:</label>
			<input
				type="text"
				name="title"
				class="input-field"
				v-model="title"
				required
			/>

			<label for="location">Location:</label>
			<input
				type="text"
				name="location"
				class="input-field"
				v-model="location"
				required
			/>

			<label for="hours">Hours:</label>
			<input
				type="number"
				name="hours"
				class="input-field"
				step="any"
				v-model="hours"
				required
			/>

			<label for="pay">Pay (Hourly):</label>
			<input
				type="number"
				name="pay"
				class="input-field"
				step="any"
				v-model="pay"
				required
			/>

			<label for="company">Company:</label>
			<input
				type="text"
				name="company"
				class="input-field"
				v-model="company"
				required
			/>
			<label for="url">Application URL:</label>
			<input
				type="text"
				name="url"
				class="input-field"
				v-model="url"
				required
			/>
			<input
				type="submit"
				value="Submit"
				@submit.prevent
				@click="submitRequest"
				class="btn submit-btn"
			/>
		</form>
	</div>
</template>

<script>
	import Header from "../components/Header.vue";
	export default {
		name: "post",
		components: {
			Header,
		},
		data() {
			let title, location, hours, pay, company, url;
			return { title, location, hours, pay, company, url };
		},
		methods: {
			async submitRequest() {
				if (
					this.title &&
					this.location &&
					this.hours &&
					this.pay &&
					this.company &&
					this.url
				) {
					this.url = this.url.replace("https://", "");
					this.url = this.url.replace("http://", "");

					let listing = {
						title: this.title,
						location: this.location,
						hours: this.hours,
						pay: this.pay,
						company: this.company,
						applicationUrl: this.url,
					};

					fetch("http://localhost:3000/api", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(listing),
					})
						.then((response) => response.json())
						.then((data) => {
							console.log("Success:", data);
						})
						.catch((error) => {
							console.error("Error:", error);
						});
				} else {
					alert("Please fill all fields");
				}
			},
		},
	};
</script>

<style scoped>
	.center {
		display: flex;
		justify-content: center;
	}

	form {
		display: block;
		min-width: 280px;
		max-width: 350px;
		margin: 2rem;
		margin-top: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.2rem;
		font-weight: bold;
	}

	.input-field {
		display: block;
		padding: 0.3rem;
		margin-bottom: 1rem;
		border-radius: 10px;
		border: 2px solid var(--grey);
		font-size: 14px;
		width: 100%;
	}

	.input-field:focus {
		outline: none;
	}

	.submit-btn {
		display: block;
		background: var(--blue);
		color: var(--light-grey);
		padding: 0.5rem;
		margin-bottom: 3rem;
		width: 100%;
	}
</style>
