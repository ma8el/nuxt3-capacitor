<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>About</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h1>About</h1>
      <IonButton @click="navigateTo('/')">
        Goto Home Page
      </IonButton>
    </IonContent>
  </IonPage>
</template>