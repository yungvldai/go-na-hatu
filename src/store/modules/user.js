export default {
  state: {
    choice: null
    /*
      'find' - i`am finding party
      'create' - i`am organizing party
      'wait' - i`am waiting for participants
    */
  },
  mutations: {
    'user/setChoice': function(state, choice) {
      state.choice = choice;
    }
  }
}
