export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    console.log('user', user.value)
    if (!user.value && to.path !== '/login') {
      return '/login'
    }
//    if (user.value && to.path == '/login') {
//      navigateTo('/')
//    }
})