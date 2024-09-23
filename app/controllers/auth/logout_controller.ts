import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {

  async show({ }: HttpContext) { }

  async handle({ response, auth }: HttpContext) {
    await auth.use('web').logout()
    return response.json({ message: "Successfully logged out" })
  }

}
