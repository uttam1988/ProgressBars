const INITIAL_STATE = { "buttons":[12,39,-12,-23],"bars":[20,25,51,42],"limit":110 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_BAR':
      let bars;
      bars = state.bars.map(function(bar,i) {
        if(i === action.payload.index)
        {
         return action.payload.value;
        }else {
          return bar;
        }
      });
      return { ...state, bars };
  }
  return state;
}