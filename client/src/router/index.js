import { createRouter, createWebHistory } from "vue-router";
import Discover from "../views/Discover.vue";
import Post from "../views/Post.vue";

const routes = [
	{
		path: "/",
		name: "Discover",
		component: Discover,
		meta: {
			title: "Discover",
		},
	},
	{
		path: "/post",
		name: "Post",
		component: Post,
		meta: {
			title: "Post",
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Change page title
router.beforeEach((to, from, next) => {
	document.title = `JobFair | ${to.meta.title}`;
	next();
});

export default router;
