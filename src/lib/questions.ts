import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Does your hair dry straight without needing products, heat, or tools?',
    options: [
      {
        text: 'Yes it dries straight or mostly straight',
        pointsFor: ['1'],
        rulesOut: ['2', '3a', '3c', '4'],
      },
      {
        text: "Yes, but it's kind of frizzy",
        pointsFor: ['1', '2'],
        rulesOut: ['3a', '3c', '4'],
      },
      {
        text: 'No',
        pointsFor: ['2', '3a', '3c', '4'],
        rulesOut: ['1'],
      },
    ],
  },
  {
    id: 2,
    text: "What happens when you try to brush your hair when it's dry?",
    options: [
      {
        text: 'It smoothes it out',
        pointsFor: ['1', '2'],
        rulesOut: ['4'],
      },
      {
        text: 'It gets frizzy or poofy',
        pointsFor: ['2', '3a'],
        rulesOut: ['4', '1'],
      },
      {
        text: "Can't brush my hair dry",
        pointsFor: ['3c', '4'],
        rulesOut: ['1', '2'],
      },
      {
        text: 'I can brush my hair dry but it feels damaging',
        pointsFor: ['3a', '3c', '4'],
        rulesOut: [],
      },
    ],
  },
  {
    id: 3,
    text: 'Do you have a lot of trouble keeping your hair moisturized?',
    options: [
      {
        text: 'Yes',
        pointsFor: ['3a', '3c', '4'],
        rulesOut: ['1', '2'],
      },
      {
        text: 'No',
        pointsFor: ['1', '2'],
        rulesOut: ['3a', '3c', '4'],
      },
    ],
  },
  {
    id: 4,
    text: 'Do you experience shrinkage (where your hair is much longer wet than dry)?',
    options: [
      {
        text: 'Yes a lot',
        pointsFor: ['3c', '4'],
        rulesOut: ['1', '2'],
      },
      {
        text: 'A fair bit',
        pointsFor: ['3a', '3c', '4'],
        rulesOut: ['1', '2'],
      },
      {
        text: 'Just a little',
        pointsFor: ['2', '3a'],
        rulesOut: [],
      },
      {
        text: 'No',
        pointsFor: ['1', '2'],
        rulesOut: ['3a', '3c', '4'],
      },
    ],
  },
  {
    id: 5,
    text: 'Do oily products make your hair limp?',
    options: [
      {
        text: 'Yes',
        pointsFor: ['1', '2', '3a'],
        rulesOut: ['4'],
      },
      {
        text: 'No',
        pointsFor: ['3c', '4'],
        rulesOut: [],
      },
    ],
  },
  {
    id: 6,
    text: "What's your biggest hair worry when sleeping?",
    options: [
      {
        text: 'Breakage',
        pointsFor: ['3c', '4'],
        rulesOut: [],
      },
      {
        text: 'Curls/waves loosening',
        pointsFor: ['2', '3a'],
        rulesOut: ['4'],
      },
      {
        text: "I don't have any worries",
        pointsFor: ['1'],
        rulesOut: [],
      },
    ],
  },
  {
    id: 7,
    text: 'Do you need a lot of hold products to keep your curls/waves from loosening out?',
    options: [
      {
        text: 'No',
        pointsFor: ['3c', '4'],
        rulesOut: [],
      },
      {
        text: 'Yes',
        pointsFor: ['2', '3a'],
        rulesOut: ['4'],
      },
      {
        text: "I'm not sure",
        pointsFor: [],
        rulesOut: [],
      },
    ],
  },
  {
    id: 8,
    text: 'Do you especially have trouble getting volume at your roots?',
    options: [
      {
        text: 'No',
        pointsFor: ['3c', '4'],
        rulesOut: [],
      },
      {
        text: 'Yes',
        pointsFor: ['2', '3a'],
        rulesOut: [],
      },
    ],
  },
  {
    id: 9,
    text: 'How is your experience growing your hair out?',
    options: [
      {
        text: "I haven't tried",
        pointsFor: [],
        rulesOut: [],
      },
      {
        text: 'I have trouble getting length',
        pointsFor: ['4', '3c'],
        rulesOut: [],
      },
      {
        text: 'It grows out easily',
        pointsFor: ['1', '2', '3a'],
        rulesOut: ['4'],
      },
      {
        text: "It grows out but the curls/waves are less strong when it's long",
        pointsFor: ['2', '3a'],
        rulesOut: ['4'],
      },
    ],
  },
  {
    id: 10,
    text: 'Have you tried heatless curls?',
    options: [
      {
        text: 'No why would I need more curls?',
        pointsFor: ['3a', '3c', '4'],
        rulesOut: ['1', '2'],
      },
      {
        text: 'Yes, and they worked well',
        pointsFor: ['2', '3a'],
        rulesOut: [],
      },
      {
        text: 'Yes, but they were kind of weak',
        pointsFor: ['1', '2'],
        rulesOut: [],
      },
      {
        text: "Yes, and they didn't work at all",
        pointsFor: ['1'],
        rulesOut: [],
      },
      {
        text: "No, I haven't tried",
        pointsFor: [],
        rulesOut: [],
      },
    ],
  },
  {
    id: 11,
    text: 'When you stretch out your hair is it much longer than it is resting?',
    options: [
      {
        text: 'No',
        pointsFor: ['1', '2'],
        rulesOut: ['4'],
      },
      {
        text: "It's longer",
        pointsFor: ['2', '3a'],
        rulesOut: [],
      },
      {
        text: 'A lot longer',
        pointsFor: ['3c', '4'],
        rulesOut: [],
      },
    ],
  },
];
