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
			<label for="company">Authorisation Key:</label>
			<input
				type="text"
				name="company"
				class="input-field"
				v-model="authKey"
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
				value="SUBMIT"
				@click.prevent="submitRequest"
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
			let title, location, hours, pay, company, authKey, url;
			let auth = false;
			return { title, location, hours, pay, company, authKey, url, auth };
		},
		methods: {
			async checkAuth() {
				// fetch the key value pairs from the database
				const res = await fetch("/api/api/authkey");
				const authKeys = await res.json();

				// Filter through the keys to find the key that matshes the user given key
				const jobKey = authKeys.filter(
					(key) => key.key === this.authKey
				);

				// Checks that the user given key is not present in the database, and that the company given and the company stored on the server are matching
				if (
					jobKey.length == 0 ||
					jobKey[0].company.toLowerCase() !==
						this.company.toLowerCase()
				) {
					alert(
						"Authorisation key is invalid, as it does not exist or does not match the company. Please try again 😁"
					);
				} else if (
					jobKey[0].company.toLowerCase() ===
					this.company.toLowerCase()
				) {
					return (this.auth = true);
				}
			},

			async submitRequest() {
				this.checkAuth()
					.then(() => {
						if (this.auth === true) {
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

							fetch("/api/api", {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(listing),
							})
								.then((response) => response.json())
								.then((data) => {
									console.log("Success:", data);
									this.title = null;
									this.location = null;
									this.hours = null;
									this.pay = null;
									this.company = null;
									this.authKey = null;
									this.url = null;
									this.auth = false;
								})
								.catch((error) => {
									console.error("Error:", error);
								});
						}
					})
					.catch((err) => console.log(err));
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
		background: var(--green);
		color: var(--grey);
		padding: 0.5rem;
		margin-bottom: 3rem;
		width: 100%;
		font-weight: bold;
	}
</style>
