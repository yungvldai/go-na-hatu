export default {
  state: {
    choice: null
    /*
      'create' - i`am finding party
      'find' - i`am organize party
    */
  },
  mutations: {
    'user/setChoice': function(state, choice) {
      state.choice = choice;
    }
  }
}
