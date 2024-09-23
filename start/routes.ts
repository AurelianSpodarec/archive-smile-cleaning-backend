/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import LoginController from '#controllers/auth/login_controller'
// import LogoutController from '#controllers/auth/logout_controller'
import LoginController from '#controllers/auth/login_controller'
import LogoutController from '#controllers/auth/logout_controller'
import RegisterController from '#controllers/auth/register_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.post("/register", [RegisterController, 'store']).as('register.store')
  router.post("/login", [LoginController, 'store']).as('login.store')
  router.get("/me", [LoginController, 'me']).as('me')
  router.post("/logout", [LogoutController, 'handle']).as('logout')
}).as("auth")
