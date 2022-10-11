import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question, {
  QuestionDifficultyTypes,
  QuestionTypes,
} from 'App/Models/Question'

export default class extends BaseSeeder {
  public async run () {
    await Question.createMany([
      {
        category: 'Vehicles',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'Which of the following is NOT a Russian car manufacturer?',
        correct_answer: 'BYD',
        incorrect_answers: JSON.stringify(['Silant', 'Dragon', 'GAZ']),
      },
      {
        category: 'Entertainment: Video Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.HARD,
        question: 'When was Steam first released?',
        correct_answer: '2003',
        incorrect_answers: JSON.stringify(['2004', '2011', '2007']),
      },
      {
        category: 'Geography',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.HARD,
        question: 'Which is the largest freshwater lake in the world?',
        correct_answer: 'Lake Superior ',
        incorrect_answers: JSON.stringify(['Caspian Sea', 'Lake Michigan', 'Lake Huron']),
      },
      {
        category: 'Entertainment: Video Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'In the Mass Effect trilogy, who is the main protagonist?',
        correct_answer: 'Shepard',
        incorrect_answers: JSON.stringify(['Mordin', 'Garrus', 'Thane']),
      },
      {
        category: 'Entertainment: Music',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'Who is the lead singer of Bastille?',
        correct_answer: 'Dan Smith',
        incorrect_answers: JSON.stringify(['Will Farquarson', 'Kyle Simmons', 'Chris Wood']),
      },
      {
        category: 'Entertainment: Video Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question:
          'In &quot;PAYDAY 2&quot;, what weapon has the highest base weapon damage on a per-shot basis?',
        correct_answer: 'HRL-7',
        incorrect_answers: JSON.stringify([
          'Heavy Crossbow',
          'Thanatos .50 cal',
          'Broomstick Pistol',
        ]),
      },
      {
        category: 'Entertainment: Board Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.HARD,
        question:
          'Which card is on the cover of the Beta rulebook of &quot;Magic: The Gathering&quot;?',
        correct_answer: 'Bog Wraith',
        incorrect_answers: JSON.stringify(['Island', 'Rock Hydra', 'Elvish Archers']),
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        // eslint-disable-next-line max-len
        question: 'Which Pokemon and its evolutions were banned from appearing in a main role after the Episode 38 Incident?',
        correct_answer: 'The Porygon Line',
        incorrect_answers: JSON.stringify([
          'The Pikachu Line',
          'The Elekid Line',
          'The Magby Line',
        ]),
      },
      {
        category: 'Entertainment: Video Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question:
          'Which of these covert groups employs Sam Fisher to work as a Splinter Cell?',
        correct_answer: 'Third Echelon',
        incorrect_answers: JSON.stringify(['Voron', 'Black Arrow', 'The Engineers']),
      },
      {
        category: 'Entertainment: Video Games',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question:
          'Which of the following characters is NOT playable in &quot;Resident Evil 6&quot;?',
        correct_answer: 'Jill Valentine',
        incorrect_answers: JSON.stringify(['Chris Redfield', 'Sherry Birkin', 'Helena Harper']),
      },
    ])
  }
}
