<template>
    <nav>
        <ul>
            <li>
                <router-link class="link" :to="{ name: 'Home'}">
                    <i class="fas fa-home"></i>
                    Home
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'Discover'}">
                    <i class="fas fa-search"></i>
                    Discover
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'Post'}">
                    <i class="fas fa-plus-square"></i>
                    Post
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navigation"
    }
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

    .router-link,
    a {
        color: var(--grey) !important;
        text-decoration: none;
    }


</style>