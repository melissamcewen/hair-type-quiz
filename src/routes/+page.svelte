<script>
    import HairQuiz from './HairQuiz.svelte';
</script>

<main>
    <h1>Hair Type Quiz</h1>
    <p>Answer the questions below to discover your hair type!</p>
    <HairQuiz />
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        color: #2c3e50;
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        color: #6c757d;
        margin-bottom: 2rem;
    }
</style>
