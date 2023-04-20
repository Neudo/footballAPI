<template>
  <main>
    <div id="container">
      <h1>{{teamName}}</h1>
      <p>Les derniers matchs.</p>

      <ion-card v-for="event in events" >
        <ion-card-header>
          <ion-card-title>{{event.strEvent}}</ion-card-title>
          <ion-card-subtitle>{{event.dateEvent}}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ event.strVenue }} <br>
          Score final : {{event.strHomeTeam}} {{event.intHomeScore}}:{{event.intAwayScore}} {{event.strAwayTeam}}
        </ion-card-content>
      </ion-card>



    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      teamName: '',
    }
  },
  mounted() {
    this.fetchTeam()
  },
  methods: {
    async fetchTeam() {
      const teamId = this.$route.params.id
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`)
      const data = await response.json()
      console.log(data.results)


      for (let i = 0; i < data.results.length; i++) {
        this.teamName = data.results[0].strHomeTeam
        this.events.push(data.results[i])
      }
      console.log(this.events)
    },

  }
}

</script>

<style>
</style>