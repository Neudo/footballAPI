<template>
    <ion-header :translucent="true">
    <ion-toolbar>
        <ion-title>        <h1><a href="/">Super league 2000</a></h1>
        </ion-title>
    </ion-toolbar>
</ion-header>
<ion-header collapse="condense">
    <ion-toolbar>
        <ion-title size="large">        <h1>Super league 2000</h1>
        </ion-title>
    </ion-toolbar>
</ion-header>
</template>

<style>

.title-default h1 {
  text-align: left;
}

a {
  text-decoration: none;
}

</style>

<script>
import { IonHeader, IonTitle, IonToolbar  } from '@ionic/vue';

export default {
  components: {
    IonHeader, IonToolbar, IonTitle
  }
}
</script>
