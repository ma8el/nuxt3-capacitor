<template>
    <IonPage>
      <IonHeader :translucent="true">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>WELCOME HOME on IOS AND ANDROID</h1>
        <IonButton @click="navigateTo('/about')">
          Goto About Page
        </IonButton>
        <IonButton @click="handleSignOut">
          Sign Out
        </IonButton>
        <h3 v-if="!user">Loading</h3>
        <h3 v-else>{{ user }}</h3>
      </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_OUT') navigateTo('/login')
  })

  const user = ref()
  onMounted(async () => {
    user.value = await supabase.auth.getUser()
    console.log((await user.value).data)
  })
</script>