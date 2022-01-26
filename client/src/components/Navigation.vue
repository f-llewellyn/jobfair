<template>
    <nav>
        <ul>
            <li>
                <i class="fas fa-home"></i>
                Home
            </li>

            <li>
                <i class="fas fa-search"></i>
                Discover
            </li>

            <li>
                <i class="fas fa-plus-square"></i>
                Post
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


</style>