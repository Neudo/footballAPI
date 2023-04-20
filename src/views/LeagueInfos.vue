<template>
  <main>
    <div id="container">
      <h1>{{leagueName}}</h1>
      <p>Classement actuelle des équipes.</p>

      <ion-list class="teams-list" >
        <ion-list-header>
          <ion-label>Équipes</ion-label>
          <ion-label class="points">Points</ion-label>
        </ion-list-header>
        <ion-item v-for="team in teams">
          <ion-label>
            <div class="wrapper-team"><a :href="'team/' + team.idTeam">{{team.intRank}}) {{team.strTeam}}</a> <span>{{team.intPoints}}</span></div></ion-label>
        </ion-item>
      </ion-list>

    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      teams: [],
      leagueName: ''
    }
  },
  mounted() {
    this.fetchLeagues()
  },
  methods: {
    async fetchLeagues() {
      const leagueId = this.$route.params.id
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${leagueId}&s=2022-2023`)
      const data = await response.json()

      this.leagueName = data.table[0].strLeague


      for (let i = 0; i < data.table.length; i++) {
        this.teams.push(data.table[i])
      }
    }
  }
}

</script>

<style>
#container p{
  margin-left: 3vw;
}

.wrapper-team {
  display: flex;
  justify-content: space-between;
}

.teams-list{
  width: 95%;
}

.points{
  text-align: right;
}

#container .wrapper-team a {
  color: black;
}
</style>