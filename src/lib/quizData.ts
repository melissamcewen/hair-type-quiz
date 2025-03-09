export type HairType = '1' | '2' | '3a' | '3c' | '4';

export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        points: HairType[];
        rulesOut?: HairType[];
    }[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "Does your hair dry straight without needing products, heat, or tools?",
        options: [
            {
                text: "Yes it dries straight or mostly straight",
                points: ['1'],
                rulesOut: ['2', '3a', '3c', '4']
            },
            {
                text: "Yes, but it's kind of frizzy",
                points: ['1', '2'],
                rulesOut: ['3a', '3c', '4']
            },
            {
                text: "No",
                points: ['2', '3a', '3c', '4'],
                rulesOut: ['1']
            }
        ]
    },
    {
        id: 2,
        text: "What happens when you try to brush your hair when it's dry?",
        options: [
            {
                text: "It smoothes it out",
                points: ['1', '2'],
                rulesOut: ['4']
            },
            {
                text: "It gets frizzy or poofy",
                points: ['2', '3a'],
                rulesOut: ['4', '1']
            },
            {
                text: "Can't brush my hair dry",
                points: ['3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "I can brush my hair dry but it feels damaging",
                points: ['3a', '3c', '4']
            }
        ]
    },
    {
        id: 3,
        text: "Do you have a lot of trouble keeping your hair moisturized?",
        options: [
            {
                text: "Yes",
                points: ['3a', '3c', '4']
            },
            {
                text: "No",
                points: ['1', '2']
            }
        ]
    },
    {
        id: 4,
        text: "Do you experience shrinkage (where your hair is much longer wet than dry)?",
        options: [
            {
                text: "Yes a lot",
                points: ['3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "A fair bit",
                points: ['3a', '3c', '4']
            },
            {
                text: "Just a little",
                points: ['2', '3a']
            },
            {
                text: "No",
                points: ['1', '2'],
                rulesOut: ['3a', '3c', '4']
            }
        ]
    }
];

export const hairTypeDescriptions: Record<HairType, string> = {
    '1': 'Straight',
    '2': 'Wavy',
    '3a': 'Curly',
    '3c': 'Very curly',
    '4': 'Coily'
};
