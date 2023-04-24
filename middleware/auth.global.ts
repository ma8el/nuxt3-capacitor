export default defineNuxtRouteMiddleware((to, from) => {
    let user = undefined
    supabase.auth.getUser().then((data) => {
      user = data.data.user
      if (!user && to.path !== '/login') {
        navigateTo('/login')
      }
      if (user && to.path == '/login') {
        navigateTo('/')
      }
    })
})