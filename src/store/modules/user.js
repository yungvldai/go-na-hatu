export default {
  state: {
    choice: null,
    whatEdit: 'map',
    scroll: {x: 0, y: 0}
    /*
      'find' - i`am finding party
      'create' - i`am organizing party
      'wait' - i`am waiting for participants
    */
  },
  mutations: {
    'user/saveScroll': function(state, scroll) {
      state.scroll = scroll;
    },
    'user/setChoice': function(state, choice) {
      state.choice = choice;
    },
    'user/whatEdit': function(state, what) {
      state.whatEdit = what;
    }
  }
}
