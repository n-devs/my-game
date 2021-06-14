const initState = {
      openDetailStatus: false,
      openUpdateStatus: false,
      openBagget: false,
      opneDetailSkill: false
};

const systemEventReducer = (state = initState, action) => {
      switch (action.type) {
            case "OPEN_DETAIL_STATUS_SYSTEM_EVENT":
                  return {
                        ...state,
                        openDetailStatus: action.payload
                  }
            case "OPEN_UPDATE_STATUS_SYSTEM_EVENT":
                  return {
                        ...state,
                        openUpdateStatus: action.payload
                  }
            case "OPEN_BAGGET_SYSTEM_EVENT":
                  return {
                        ...state,
                        openBagget: action.payload
                  }
            case "OPEN_DETAIL_SKILL_SYSTEM_EVENT":
                  return {
                        ...state,
                        opneDetailSkill: action.payload
                  }
            default:
                  return state
      }
};

export default systemEventReducer;