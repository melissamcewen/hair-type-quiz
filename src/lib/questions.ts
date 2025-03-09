import type { Question } from './types';

export const questions: Question[] = [
    {
        id: 1,
        text: "Does your hair dry straight without needing products, heat, or tools?",
        options: [
            {
                text: "Yes it dries straight or mostly straight",
                pointsFor: ['1'],
                rulesOut: ['2', '3a', '3c', '4']
            },
            {
                text: "Yes, but it's kind of frizzy",
                pointsFor: ['1', '2'],
                rulesOut: ['3a', '3c', '4']
            },
            {
                text: "No",
                pointsFor: ['2', '3a', '3c', '4'],
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
                pointsFor: ['1', '2'],
                rulesOut: ['4']
            },
            {
                text: "It gets frizzy or poofy",
                pointsFor: ['2', '3a'],
                rulesOut: ['4', '1']
            },
            {
                text: "Can't brush my hair dry",
                pointsFor: ['3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "I can brush my hair dry but it feels damaging",
                pointsFor: ['3a', '3c', '4'],
                rulesOut: []
            }
        ]
    },
    {
        id: 3,
        text: "Do you have a lot of trouble keeping your hair moisturized?",
        options: [
            {
                text: "Yes",
                pointsFor: ['3a', '3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "No",
                pointsFor: ['1', '2'],
                rulesOut: ['3a', '3c', '4']
            }
        ]
    },
    {
        id: 4,
        text: "Do you experience shrinkage (where your hair is much longer wet than dry)?",
        options: [
            {
                text: "Yes a lot",
                pointsFor: ['3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "A fair bit",
                pointsFor: ['3a', '3c', '4'],
                rulesOut: ['1', '2']
            },
            {
                text: "Just a little",
                pointsFor: ['2', '3a'],
                rulesOut: []
            },
            {
                text: "No",
                pointsFor: ['1', '2'],
                rulesOut: ['3a', '3c', '4']
            }
        ]
    }
];
