<template>
	<div class="card">
		<div class="title" :class="{'title-expanded': expanded}">
			<h1>{{ title }}</h1>
			<i
				class="fas fa-chevron-down collapse-btn"
				@click="expanded = !expanded"
			></i>
		</div>
		<div class="collapsable" :class="{expanded: expanded}">
			<div class="content">
				<p>Pay: £{{ pay }}</p>
				<p>Hours: {{ hours }}</p>
				<p>Location: {{ location }}</p>
				<p>Employer: {{ employer }}</p>
				<a :href="applicationUrl" target="_"><button class="btn apply">Apply Now</button></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "listing",
	data() {
		let expanded = true;
		return {expanded};
	},
    props: [
        "title",
        "pay",
        "hours",
        "location",
        "employer",
        "applicationUrl"
    ],
	setup() {}
};
</script>

<style scoped>
.card {
	width: 100%;
	max-width: 350px;
	min-width: max-content;
}

.title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	color: var(--grey);
	background-color: var(--green);
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	-webkit-transition: 1s;
	transition: 1s;
}

.collapse-btn {
	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	-webkit-transition: 1s;
	transition: 1s;
}

.title-expanded {
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}

.title-expanded .collapse-btn {
	transform: rotate(180deg);
}

h1 {
	font-size: 12px;
}

.collapsable {
	background-color: var(--light-grey);
	color: var(--grey);
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	-webkit-transition: 1s;
	transition: 1s;
	transition: max-height 0.5s;
	max-height: 0;
	overflow: hidden;
}

.expanded {
	max-height: 100vh;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin: 0.5rem 1rem;
}

p {
	font-size: 14px;
	font-weight: normal;
}

.apply {
	background-color: var(--blue);
	color: var(--light-grey);
	padding: 0.5rem 1rem;
	margin: 0.5rem 0;
}

a {
    align-self: center;
}
</style>
