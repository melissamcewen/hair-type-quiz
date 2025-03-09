<script lang="ts">
    import type { HairType, QuizState } from '$lib/types';
    import { questions } from '$lib/questions';

    const hairTypes: HairType[] = ['1', '2', '3a', '3c', '4'];

    let quizState: QuizState = {
        currentQuestion: 0,
        scores: {
            '1': 0,
            '2': 0,
            '3a': 0,
            '3c': 0,
            '4': 0
        },
        eliminatedTypes: new Set<HairType>(),
        answered: new Array(questions.length).fill(false)
    };

    $: currentQuestion = questions[quizState.currentQuestion];

    $: remainingTypes = hairTypes.filter(type => !quizState.eliminatedTypes.has(type));

    $: isComplete = remainingTypes.length === 1 ||
        (quizState.currentQuestion >= questions.length - 1) ||
        quizState.answered.every(a => a);

    $: result = isComplete ? getResult() : null;

    function handleAnswer(optionIndex: number) {
        const option = currentQuestion.options[optionIndex];

        // Add points
        option.pointsFor.forEach(type => {
            if (!quizState.eliminatedTypes.has(type)) {
                quizState.scores[type]++;
            }
        });

        // Eliminate types
        option.rulesOut.forEach(type => {
            quizState.eliminatedTypes.add(type);
        });

        // Mark question as answered
        quizState.answered[quizState.currentQuestion] = true;

        // Move to next question if not complete
        if (!isComplete && quizState.currentQuestion < questions.length - 1) {
            quizState.currentQuestion++;
        }

        // Force reactivity
        quizState = { ...quizState };
    }

    function getResult(): HairType {
        if (remainingTypes.length === 1) {
            return remainingTypes[0];
        }

        // Find type with highest score among remaining types
        return remainingTypes.reduce((a, b) =>
            quizState.scores[a] > quizState.scores[b] ? a : b
        );
    }

    function getHairTypeDescription(type: HairType): string {
        const descriptions: Record<HairType, string> = {
            '1': 'Straight',
            '2': 'Wavy',
            '3a': 'Curly',
            '3c': 'Very curly',
            '4': 'Coily'
        };
        return descriptions[type];
    }
</script>

<div class="quiz-container">
    {#if !isComplete}
        <div class="question">
            <h2>{currentQuestion.text}</h2>
            <div class="options">
                {#each currentQuestion.options as option, i}
                    <button
                        class="option"
                        on:click={() => handleAnswer(i)}
                    >
                        {option.text}
                    </button>
                {/each}
            </div>
        </div>
    {:else if result}
        <div class="result">
            <h2>Your Hair Type Result</h2>
            <p class="type">Type {result}: {getHairTypeDescription(result)}</p>
            {#if remainingTypes.length > 1}
                <p class="note">
                    Note: This is your most likely type based on your answers.
                    Other possible types: {remainingTypes.filter(t => t !== result).map(getHairTypeDescription).join(', ')}
                </p>
            {/if}
        </div>
    {/if}
</div>

<style>
    .quiz-container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .question h2 {
        margin-bottom: 1.5rem;
        color: #333;
        font-size: 1.5rem;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .option {
        padding: 1rem;
        background: #f8f9fa;
        border: 2px solid #dee2e6;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .option:hover {
        background: #e9ecef;
        border-color: #adb5bd;
    }

    .result {
        text-align: center;
    }

    .result h2 {
        color: #333;
        margin-bottom: 1rem;
    }

    .type {
        font-size: 1.5rem;
        color: #2c3e50;
        margin: 1rem 0;
    }

    .note {
        font-size: 0.9rem;
        color: #6c757d;
        margin-top: 1rem;
    }
</style>
