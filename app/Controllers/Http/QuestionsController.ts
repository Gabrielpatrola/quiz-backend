import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question'
import CreateQuestionValidator from 'App/Validators/CreateQuestionValidator'
import UpdateQuestionValidator from 'App/Validators/UpdateQuestionValidator'

export default class QuestionsController {
  public async index ({}: HttpContextContract) {
    return Question.all()
  }

  public async store ({ request }: HttpContextContract) {
    const { incorrect_answers: incorrectAnswers, ...data } =
      await request.validate(CreateQuestionValidator)

    return Question.create({
      incorrect_answers: JSON.stringify(incorrectAnswers),
      ...data,
    })
  }

  public async update ({ request }: HttpContextContract) {
    const question = await Question.findOrFail(request.param('id'))

    const { incorrect_answers: incorrectAnswers, ...data } =
      await request.validate(UpdateQuestionValidator)

    question.merge({
      incorrect_answers: JSON.stringify(incorrectAnswers),
      ...data,
    })

    return question.save()
  }

  public async destroy ({ request }: HttpContextContract) {
    const question = await Question.findOrFail(request.param('id'))

    return question.delete()
  }
}
