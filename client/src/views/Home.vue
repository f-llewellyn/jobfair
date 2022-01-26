<template>
    <main>
        <div class="tag-container">
            <h1>JOBFAIR</h1>
            <p>Don't get mugged off!</p>
        </div>
        <i class="far fa-file-alt file"></i>
    </main>
</template>

<script>
export default {
    name: "home"
}
</script>

<style>
    main {
        overflow: hidden;
        height: 100vh;
        color: var(--light-grey);
        background-color: var(--green);
    }

    .tag-container {
        transform: translateX(calc(100vh / 20));
        padding-top: 55%;
    }

    h1 {
        font-size: 64px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
    }

    .file {
        color: var(--blue);
        font-size: calc(100vh / 1.5);
        transform: 
            translateX(calc(100vh / 8))
            translateY(1rem)
            rotate(-25deg)
        ;

    }
</style>