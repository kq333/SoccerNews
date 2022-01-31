import { createStore } from "vuex";
 import axios from "axios"

export default createStore({
  state: {

    valuesClubs: [],
    videos: [],
    LiveMatches: [],
    laligatable:[],
    LaligaMatchDay:[],
    NewsCarusel:[],
    bestSoccers:[],
    bestTeams:[],
    bestleagues:[],
    NewsTickers:[],
    PremierLeagueMatchDay:[],
    premierLeagueTable2021:[],
    newsTransfersBing:[],
    bingLaLigaTransfers:[]
  },

  mutations: {

    ValuableClubs(state, valuesClubs) {
      state.valuesClubs = valuesClubs;
    },

    videoPlayer(state, videos) {
      state.videos = videos;
    },

    LiveScore(state, LiveMatches) {
      state.LiveMatches = LiveMatches;
    },

    laLigaTables(state, laligatable){
      state.laligatable = laligatable

    },

    LaLigaMatchesDay(state, LaligaMatchDay){
      state.LaligaMatchDay = LaligaMatchDay
    },

    newsCarusele(state, NewsCarusel){
      state.NewsCarusel = NewsCarusel

    },

    bestPlayersFifa(state, bestSoccers){
      state.bestSoccers= bestSoccers

    },

    BestTeamsFifa(state, bestTeams){
        state.bestTeams = bestTeams
    },

    bestleagueUEFA(state, bestleagues){
      state.bestleagues = bestleagues

    },

    newsTickers(state, NewsTickers){
      state.NewsTickers = NewsTickers

    },

    premierLeagueGamePlan(state, PremierLeagueMatchDay){
      state.PremierLeagueMatchDay = PremierLeagueMatchDay

    },

    premierLeagueTable(state, premierLeagueTable2021 ){
      state.premierLeagueTable2021 = premierLeagueTable2021

    },

    BingNews(state,newsTransfersBing ){
      state.newsTransfersBing = newsTransfersBing
    },

    BingLaLigaTransfers(state, bingLaLigaTransfers){
      state.bingLaLigaTransfers = bingLaLigaTransfers

    }

  },

  actions: {

    ///google key: 0b28ba2e67msh58c36e5c3e3e24fp1200bbjsneae14516dea8
    //github key: ad8937ee36msha90469fe4b1ff3ep164780jsn44d773ffe538
    //kq222 interia key: 713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f

    ////////////////////////////////////////////////////////// mostValuableClubs

     async mostValuableClubs({ commit }) {

      try{

      const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/statistic/list-most-valuable-clubs',
        headers: {
          'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
          'x-rapidapi-key': '0b28ba2e67msh58c36e5c3e3e24fp1200bbjsneae14516dea8'
        }
      };

    const res = await axios.request(options, {timeout:1})
       commit('ValuableClubs', {res} )

    }
    catch{
      console.log("Fetch error in mostValuableClubs ")
    }
  },



///////////////////////////////////////////////////////////api from SportScore


    async liveScore({ commit }){
      try{
        const options = {
          method: 'GET',
          url: 'https://sportscore1.p.rapidapi.com/sports/1/events/live',
          params: {page: '1'},
          headers: {
            'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
            'x-rapidapi-key': '713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f'
          }
        }

        const data = await axios.request(options)
        console.log(data)
        commit("LiveScore", data.data.data)

      }
      catch{
        console.log("Fetch error in liveScore")
      }
    },



///zrobione liveScore

//////////////////////////////////////////////////////////

     async LaLigaTable({commit}){

    try{

       const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/competitions/get-table',
        params: {id: 'ES1', seasonID: '2021'},
        headers: {
          'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
          'x-rapidapi-key': '0b28ba2e67msh58c36e5c3e3e24fp1200bbjsneae14516dea8'
        }
      };

        const res = await axios.request(options)

        commit('laLigaTables', {res} )
    }
    catch{
      console.log("Fetch error in LaLigaTable")
    }

    },

    ///zrobione LaLigaTable

    ///////////////////////// new limit api



    async LaLigaMatchDays({commit}){

        try{
      const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/matches/list-by-game-plan',
        params: {seasonID: '2021', leagueID: 'ES1', dayID: '15'},
        headers: {
          'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
          'x-rapidapi-key': '0b28ba2e67msh58c36e5c3e3e24fp1200bbjsneae14516dea8'
        }
      };

      const data = await axios.request(options, {timeout:30})
      commit('LaLigaMatchesDay', data.data.playDayMatches)
    }
    catch{
      console.log('Fetch error in LaLigaMatchDays')
    }

    },

    ////zrobione LaLigaMatchDays


    ////////   LiveScore API Documentation

 async newsCarusel({commit}){

  try{

  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/news/list',
    params: {category: 'soccer'},
    headers: {
      'x-rapidapi-host': 'livescore6.p.rapidapi.com',
      'x-rapidapi-key': 'ad8937ee36msha90469fe4b1ff3ep164780jsn44d773ffe538'
    }
  };

  const data = await axios.request(options)
  console.log(data)
  commit('newsCarusele',  data.data.arts )
}
catch{
    console.log('Fetch error in newsCarusel')
}
},

////zrobione  newsCarusel

///////////////////////////////////////////////////

////////////////////statistic/list-best-fifa-players

 async bestPlayers({commit}){

  try{

  const options = {

    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/statistic/list-best-fifa-players',
    headers: {
      'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
      'x-rapidapi-key': 'ad8937ee36msha90469fe4b1ff3ep164780jsn44d773ffe538'
    }
  }

    const data = await axios.request(options, { timeout:100})
    commit('bestPlayersFifa', data.data.player)

  }
  catch{
    console.log("fetch error bestPlayers")
  }
},


////zrobione bestPlayers


    ////////////////////////////////////////list-fifa-world-rankings

    async bestTeams({commit}){

        try{

          const options = {

            method: 'GET',
            url: 'https://transfermarket.p.rapidapi.com/statistic/list-fifa-world-rankings',
            headers: {
              'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
              'x-rapidapi-key': 'ad8937ee36msha90469fe4b1ff3ep164780jsn44d773ffe538'
            }
          }
          const data = await axios.request(options)
          commit('BestTeamsFifa', data.data.teams)
        }
        catch{
          console.log('Fetch  error in bestTeams')
        }
    },

///// zrobione bestTeams

  ///////////statistic/list-most-valuable-competitions

    async bestleague({commit}){
      try{
        const options = {
          method: 'GET',
          url: 'https://transfermarket.p.rapidapi.com/statistic/list-most-valuable-competitions',
          headers: {
            'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
            'x-rapidapi-key': '713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f'
          }
        }
          const data = await axios.request(options)
          commit('bestleagueUEFA', data.data.competitions)
      }
      catch{
        console.log("Fetch error bestleague")
      }
    },

///zrobione bestleague


///////////////////////////////////news/detail

async newsTicker({commit}){

  try{
    const options = {
      method: 'GET',
      url: 'https://transfermarket.p.rapidapi.com/news/list-latest',
      headers: {
        'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
        'x-rapidapi-key': '713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f'
      }
    }

    const data = await axios.request(options)
    commit('newsTickers', data.data.news)

  }



  catch{
    console.log("Fetch error in newsTicker")
  }
},

/// zrobione newsTicker

/////////////////////////////////////matches/list-by-game-plan

async permierLeagueGamePlan({commit}){
  try{

    const options = {
      method: 'GET',
      url: 'https://transfermarket.p.rapidapi.com/matches/list-by-game-plan',
      params: {seasonID: '2021', leagueID: 'GB1', dayID: '13'},
      headers: {
        'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
        'x-rapidapi-key': '713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f'
      }
    }

    const data = await axios.request(options)
    commit('premierLeagueGamePlan', data.data.playDayMatches)

  }
  catch{
    console.log("Fetch error in permierLeagueGamePlan")
  }

},

//zrobione permierLeagueGamePlan



///////////////////competitions/get-table


    async PremierLeagueTable({commit}){
      try{

        const options = {
          method: 'GET',
          url: 'https://transfermarket.p.rapidapi.com/competitions/get-table',
          params: {id: 'GB1', seasonID: '2021'},
          headers: {
            'x-rapidapi-host': 'transfermarket.p.rapidapi.com',
            'x-rapidapi-key': '713843de72msh987c5ac3e1f1ff5p1ff0d3jsn20fb3ecc653f'
          }
        }

        const data = await axios.request(options)
        commit('premierLeagueTable', data.data.table)

      }
      catch{
        console.log('Fetch error in PremierLeagueTable')
      }
    },



////zrobione PremierLeagueTable


/////////////////////////////////////////////bing search news  //// !Football API Documentation!


       async bingNews({commit}){


await fetch("https://football98.p.rapidapi.com/premierleague/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "football98.p.rapidapi.com",
		"x-rapidapi-key": "945357ef8fmshd76ef2af2269ed3p112f6ejsne769b3bf95e7"
	}
})
        .then(res=>res.json())
        .then(data=>commit('BingNews',  data))
        .catch(err => {
          console.error(err);
        });
      },




      async PremierLeagueTransfers({commit}){
            try{
              const options = {
                method: 'GET',
                url: 'https://free-news.p.rapidapi.com/v1/search',
                params: {q: 'Premier League transfers ', lang: 'en'},
                headers: {
                  'x-rapidapi-host': 'free-news.p.rapidapi.com',
                  'x-rapidapi-key': '945357ef8fmshd76ef2af2269ed3p112f6ejsne769b3bf95e7'
                }
              }

              const data = await axios.request(options)
              commit('BingNews',data.data.articles)
            }
            catch{
              console.log("fetch error in PremierLeagueTransfers")

            }
      },


//////////////////////Free News FREE By Newscatcher API



async laLigaTarnsfers({commit}){
  try{
  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'la liga transfers', lang: 'en'},
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': 'bdfa8a4404mshd96a36750c266cbp11555fjsn69fdce7a9e34'
    }
  }
    const data = await axios.request(options)
    commit('BingLaLigaTransfers',data.data.articles)

}
catch{
  console.log("fetch error in LaLigaTransfers ")
}
},




    //////////////////////////


    async getVideos({ commit }) {
      await fetch("https://free-football-soccer-videos.p.rapidapi.com/", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
          "x-rapidapi-key":
            "bdfa8a4404mshd96a36750c266cbp11555fjsn69fdce7a9e34",
        },
      })
        .then((res) => res.json())
        .then((data) => commit("videoPlayer", data))
        .catch((err) => console.log(`${err} in getVideos` ));
    },
  },
  modules: {},
});
