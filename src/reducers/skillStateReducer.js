const initState = {
      name: null,
      lavel: null,
      expNow: null,
      expMax: null,
      expUpgrate: null,
      reinforcement: null,
      type: null,
      condition: null,
      turn: null,
      use: {
            ep: null,
            mp: null
      },
      detail: null
};

const systemEventReducer = (state = initState, action) => {
      switch (action.type) {
            case "NAME_SKILL_STATE":
                  return {
                        ...state,
                        name: action.payload
                  }
            case "LAVEL_SKILL_STATE":
                  return {
                        ...state,
                        lavel: action.payload
                  }
            case "EXP_NOW_SKILL_STATE":
                  return {
                        ...state,
                        expNow: action.payload
                  }
            case "EXP_MAX_SKILL_STATE":
                  return {
                        ...state,
                        expMax: action.payload
                  }
            case "EXP_UPGRATE_SKILL_STATE":
                  return {
                        ...state,
                        expUpgrate: action.payload
                  }
            case "REINFORCEMANT_SKILL_STATE":
                  return {
                        ...state,
                        reinforcement: action.payload
                  }
            case "TYPE_SKILL_STATE":
                  return {
                        ...state,
                        type: action.payload
                  }
            case "TURN_SKILL_STATE":
                  return {
                        ...state,
                        turn: action.payload
                  }
            case "USE_EP_SKILL_STATE":
                  return {
                        ...state,
                        use: {
                              ...state.use,
                              ep: action.payload
                        }
                  }
            case "USE_MP_SKILL_STATE":
                  return {
                        ...state,
                        use: {
                              ...state.use,
                              mp: action.payload
                        }
                  }
            case "DETAIL_SKILL_STATE":
                  return {
                        ...state,
                        detail: action.payload
                  }
            default:
                  return state
      }
};

export default systemEventReducer;