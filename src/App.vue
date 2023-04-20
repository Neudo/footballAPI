<template>
  <ion-app>
    <Header/>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Header from "@/Components/Header.vue";

export default {
  components: {Header, IonApp, IonRouterOutlet }
}
</script>
