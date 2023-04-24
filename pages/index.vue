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
      </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
  const supabase = useSupabaseClient()
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  watchEffect(() => {
    if (!useSupabaseUser().value) {
      navigateTo('/login')
    }
  })
</script>