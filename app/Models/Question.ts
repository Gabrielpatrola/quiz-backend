import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum QuestionDifficultyTypes {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum QuestionTypes {
  BOOLEAN = 'boolean',
  MULTIPLE = 'multiple',
}

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: QuestionTypes

  @column()
  public question: string

  @column()
  public category: string

  @column()
  public correct_answer: string

  @column()
  public incorrect_answers: string

  @column()
  public difficulty: QuestionDifficultyTypes

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
