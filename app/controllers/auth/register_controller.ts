import User from '#models/user'
import { registerValidator } from '#models/validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {

  async show({ }: HttpContext) { }

  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create(data)
    await auth.use('web').login(user)

    return response.json({ message: 'Thanks for joining' })
  }

}