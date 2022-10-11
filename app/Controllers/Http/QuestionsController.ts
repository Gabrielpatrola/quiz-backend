import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question'

export default class QuestionsController {
  public async index ({}: HttpContextContract) {
    return Question.all()
  }

  public async store ({}: HttpContextContract) {}

  public async update ({}: HttpContextContract) {}

  public async destroy ({}: HttpContextContract) {}
}
