import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { QuestionDifficultyTypes, QuestionTypes } from 'App/Models/Question'

export default class CreateQuestionValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    correct_answer: schema.string({}),
    incorrect_answers: schema.array().members(schema.string()),
    category: schema.string({}),
    question: schema.string({}),
    difficulty: schema.enum(Object.values(QuestionDifficultyTypes)),
    type: schema.enum(Object.values(QuestionTypes)),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
