<template>
	<nav>
		<ul>
			<li>
				<router-link :to="{ name: 'Discover' }">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path
							d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
						/>
					</svg>
					Discover
				</router-link>
			</li>

			<li>
				<router-link :to="{ name: 'Post' }">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path
							d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z"
						/>
					</svg>
					Post
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "navigation",
	};
</script>

<style scoped>
	nav {
		position: fixed;
		bottom: 0;
		width: 100vw;
		padding: 1rem;
		height: 3rem;
		background-color: var(--light-grey);
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style: none;
	}

	ul li {
		text-transform: uppercase;
		font-weight: 500;
		color: var(--grey);
	}

	router-link,
	a {
		color: var(--grey) !important;
		text-decoration: none;
		font-weight: bold;
		display: flex;
		gap: 0.5rem;
	}

	svg {
		fill: var(--grey);
		width: 16px;
	}
</style>
