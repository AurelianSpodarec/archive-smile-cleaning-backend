import User from '#models/user'
import { loginValidator } from '#models/validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {

  async store({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.json({ message: 'Welcome back!', user })
  }

  async me({ auth }: HttpContext) {
    await auth.check()
    return {
      user: auth.user
    }
  }

}