export type HairType = '1' | '2' | '3a' | '3c' | '4';

export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        pointsFor: HairType[];
        rulesOut: HairType[];
    }[];
}

export interface QuizState {
    currentQuestion: number;
    scores: Record<HairType, number>;
    eliminatedTypes: Set<HairType>;
    answered: boolean[];
}
