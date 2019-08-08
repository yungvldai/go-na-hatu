export default {
  state: {
    choice: null,
    whatEdit: 'map',
    whatWait: 'wait',
    scroll: {x: 0, y: 0},
    confirm: false
    /*
      'find' - i`am finding party
      'create' - i`am organizing party
      'wait' - i`am waiting for participants
      'go' - i`am going to party
    */
  },
  mutations: {
    'user/confirmSet': function(state, confirm) {
      state.confirm = confirm;
    },
    'user/saveScroll': function(state, scroll) {
      state.scroll = scroll;
    },
    'user/setChoice': function(state, choice) {
      state.choice = choice;
    },
    'user/whatEdit': function(state, what) {
      state.whatEdit = what;
    },
    'user/whatWait': function(state, what) {
      state.whatWait = what;
    }
  }
}
