// @ts-nocheck
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question, {
  QuestionDifficultyTypes,
  QuestionTypes,
} from 'App/Models/Question'

export default class extends BaseSeeder {
  public async run () {
    await Question.createMany([
      {
        category: 'Sportes',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'Qual foi a colocação do Brasil na Copa de 1982?',
        correct_answer: 'Quinto Lugar',
        incorrect_answers: JSON.stringify([
          'Terceiro Lugar',
          'Segundo Lugar',
          'Sexto Lugar',
        ]),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.HARD,
        question: 'Quantas finais de Copas o Brasil perdeu?',
        correct_answer: '2 finais',
        incorrect_answers: JSON.stringify([
          'Nenhuma final',
          '3 finais',
          '1 final',
        ]),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.HARD,
        question: 'Quem foi o artilheiro do Brasil na Copa de 1986?',
        correct_answer: 'Careca',
        incorrect_answers: JSON.stringify(['Ronaldo', 'Cafú', 'Romário']),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'Quantos gols Adriano fez na Copa de 2006?',
        correct_answer: '2 gols',
        incorrect_answers: JSON.stringify(['Nenhum gol', '6 gols', '4 gols']),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question: 'Qual o maior artilheiro da Seleção Brasileira em copas?',
        correct_answer: 'Ronaldo',
        incorrect_answers: JSON.stringify(['Pelé', 'Garrincha', 'Zico']),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.MEDIUM,
        question: 'Quantos gols o Brasil fez na Copa de 1994?',
        correct_answer: '11 gols',
        incorrect_answers: JSON.stringify(['10 gols', '8 gols', '12 gols']),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question: 'Em que ano a seleção ganhou o primeiro título?',
        correct_answer: '1958',
        incorrect_answers: JSON.stringify(['1950', '1954', '2002']),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question: 'Em que ano Felipão assumiu a posição de técnico da Seleção Brasileira?',
        correct_answer: '2001',
        incorrect_answers: JSON.stringify([
          '2002',
          '2000',
          '1998',
        ]),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question: 'Qual o nome do jogador que ergueu a taça na copa de 2002?',
        correct_answer: 'Cafu',
        incorrect_answers: JSON.stringify([
          'Ronaldo',
          'Adriano',
          'Kaká',
        ]),
      },
      {
        category: 'Sports',
        type: QuestionTypes.MULTIPLE,
        difficulty: QuestionDifficultyTypes.EASY,
        question: 'Quem foi o goleiro da seleção na copa de 1998?',
        correct_answer: 'Taffarel',
        incorrect_answers: JSON.stringify([
          'Dida',
          'Allison',
          'Iker Casillas',
        ]),
      },
    ])
  }
}
