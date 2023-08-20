import { createStore } from 'vuex'

export default createStore({
  state: {
  characters: [],
  charactersFilters: []
  },

  mutations: {
  setCharacters(state, payload){
  state.characters = payload
  },
  setCharactersFilter(state, payload){
    state.charactersFilters = payload
  }
},
  actions: {
  async getCharacters({commit}) {
  try{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const response1 = await fetch('https://rickandmortyapi.com/api/character/?page=2')
    const data = await response.json()
    const data1 = await response1.json()
    commit('setCharacters', data.results)
    commit('setCharactersFilter', data.results)
    //commit('setCharacters', data1.results)
    //commit('setCharactersFilters', data1.results)
  } catch (error) {
  console.error(error)
    }
   },
   filterByStatus({commit, state}, status) {
    const filter = state.characters.filter((character) => {
      return character.status.includes(status)
    })
    commit('setCharactersFilter', filter)
  },
  filterByName({commit, state}, name) {
    const formatName = name.toLowerCase()
    const filter = state.characters.filter((character) => {
      const characterName = character.name.toLowerCase()
      if(characterName.includes(formatName)) {
        return character
      }
    })
    commit('setCharactersFilter', filter)
  }
},
  }
)
