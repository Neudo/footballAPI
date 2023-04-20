<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <h2>Liste des ligues</h2>

        <ul>
          <li><a href="/leagueinfos/4334">Ligue 1</a></li>
          <li><a href="/leagueinfos/4401">Ligue 2</a></li>
          <li><a href="/leagueinfos/4484">Coupe de France</a></li>
          <li><a href="/leagueinfos/4480">Champion's league</a></li>
        </ul>


      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage  } from '@ionic/vue';

export default {
  components: {
    IonContent, IonPage
  },
}
</script>

<style >
#container{
  margin-top: 15vh;
}

h2 {
  margin-bottom: 20vh;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

#container ul {
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#container li {
  list-style-type: none;
  width: 49%;
  padding: 75px 10px;
  background-color: #04326d;
  text-align: center;
  margin-bottom: 5px;
  color: white;
}
#container a {
  color: white;
}

body{
  background: white !important;
  color: black;
  max-height: 140% !important;
  height: 140% !important;
  position: relative !important;
  overflow: scroll !important;

}

h1, h2{
  text-align: center;
}

</style>
