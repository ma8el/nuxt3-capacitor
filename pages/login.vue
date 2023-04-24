<script setup lang="ts">
  const loading = ref(false)
  const sent = ref(false)
  const email = ref('')
  const otp = ref('')
  
  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({ email: email.value })
      if (error) throw error
      alert('Check your email for the login link!')
      sent.value = true
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
  }
  
  const handleSignIn = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.verifyOtp({ email: email.value, token: otp.value, type: 'magiclink' })
      if (error) throw error
      sent.value = false
      router.push('/')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
  }
  const router = useIonRouter()
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') navigateTo('/')
  })

  const user = ref()
  onMounted(async () => {
    user.value = await supabase.auth.getUser()
    console.log((await user.value).data)
  })
</script>

<template>
    <IonPage>
      <IonHeader :translucent="true">
        <IonTitle>Login</IonTitle>
      </IonHeader>
      <IonContent v-if="!sent" class="ion-padding">
        <h1>Login</h1>
          <IonInput v-model="email" placeholder="Email" />
          <IonButton @click.prevent="handleLogin">
            SIGN IN
          </IonButton>
      </IonContent>
      <IonContent v-else class="ion-padding">
        <h1>Token</h1>
          <IonInput v-model="otp" placeholder="Token" />
          <IonButton @click.prevent="handleSignIn">
            Log In
          </IonButton>
      </IonContent>
    </IonPage>  
</template>