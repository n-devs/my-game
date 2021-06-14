
const initState = {
  name: null,
  newName: null,
  newPointUpdateStatus: 10,
  pointUpdateStatus: 10,
  healthPointProgress: 0,
  magicPointProgress: 0,
  energyPointProgress: 0,
  coin: 100,
  lavel: 0,
  expNow: 0,
  expMax: 10,
  expUpgrate: 2,
  status: {
    newHealthPointStatusDefault: 5,
    healthPointStatusDefault: 5,
    healthPointStatusNow: 0,
    healthPointStatusState: 0,
    newHealthPointStatusState: 0,
    newMagicPointStatusDefault: 5,
    magicPointStatusDefault: 5,
    magicPointStatusNow: 0,
    magicPointStatusState: 0,
    newMagicPointStatusState: 0,
    newEnergyPointStatusDefault: 5,
    energyPointStatusDefault: 5,
    energyPointStatusNow: 0,
    energyPointStatusState: 0,
    newEnergyPointStatusState: 0,
    newAttackPointStatusDefault: 1,
    attackPointStatusDefault: 1,
    attackPointStatusState: 0,
    newAttackPointStatusState: 0,
    newDefensePointStatusDefault: 1,
    defensePointStatusDefault: 1,
    defensePointStatusState: 0,
    newDefensePointStatusState: 0,
    newSpeedPointStatusDefault: 1,
    speedPointStatusDefault: 1,
    speedPointStatusState: 0,
    newSpeedPointStatusState: 0,
    newIntelligencePointStatusDefault: 1,
    intelligencePointStatusDefault: 1,
    intelligencePointStatusState: 0,
    newIntelligencePointStatusState: 0
  },
  newSkills: [
    {
      name: "ต่อย",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "attack",
      condition: "standas",
      turn: 1,
      use: {
        ep: 1,
        mp: 0
      },
      detail: "สกิลต่อย เป็นการโจมตีโดยการต่อยสัตตรู โดยใช้กำปั้นตัวเอง ใช้ พลังงานไป 1 แต้ม โดยคิดค่าพลังโจมตี จากพลังโจมตีพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "ป้องกัน",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "defense",
      condition: "standas",
      turn: 1,
      use: {
        ep: 1,
        mp: 0
      },
      detail: "สกิลป้องกัน เป็นการป้องกันตัวโดยนำแขนมากันการโจมตีของสัตตรู ใช้ พลังงานไป 1 แต้ม โดยคิดค่าพลังบ้องกัน จากพลังป้องกันพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "หลบหลีก",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "parry",
      condition: "standas",
      turn: 1,
      use: {
        ep: 2,
        mp: 2
      },
      detail: "สกิลหลบหลีก เป็นการหลบหลีกโดยเคลื่อนที่ด้วยความเร็วเพื่อไม่ให้สัตตรูโจมตีเรา ใช้ พลังงานไป 2 แต้ม พลังเวทไป 2 แต้ม โดยคิดค่าความเร็ว จากความเร็วพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "เสริมพลัง",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "empower",
      condition: "standas",
      turn: 5,
      use: {
        ep: 0,
        mp: 5
      },
      detail: "สกิลเสริมพลัง เป็นการเสริมพลังโดยเพิ่มพลังโจมตีเรา ใช้  พลังเวทไป 5 แต้ม โดยเพิ่มค่าพลังสถานะทุกอย่าง +0.3% เพิ่มตามระดับสกิล เป็นเวลา 5 รอบ"
    }
  ],
  skills: [
    {
      name: "ต่อย",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "attack",
      condition: "standas",
      turn: 1,
      use: {
        ep: 1,
        mp: 0
      },
      detail: "สกิลต่อย เป็นการโจมตีโดยการต่อยสัตตรู โดยใช้กำปั้นตัวเอง ใช้ พลังงานไป 1 แต้ม โดยคิดค่าพลังโจมตี จากพลังโจมตีพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "ป้องกัน",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "defense",
      condition: "standas",
      turn: 1,
      use: {
        ep: 1,
        mp: 0
      },
      detail: "สกิลป้องกัน เป็นการป้องกันตัวโดยนำแขนมากันการโจมตีของสัตตรู ใช้ พลังงานไป 1 แต้ม โดยคิดค่าพลังบ้องกัน จากพลังป้องกันพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "หลบหลีก",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "parry",
      condition: "standas",
      turn: 1,
      use: {
        ep: 2,
        mp: 2
      },
      detail: "สกิลหลบหลีก เป็นการหลบหลีกโดยเคลื่อนที่ด้วยความเร็วเพื่อไม่ให้สัตตรูโจมตีเรา ใช้ พลังงานไป 2 แต้ม พลังเวทไป 2 แต้ม โดยคิดค่าความเร็ว จากความเร็วพื้นฐาน+0.3% เพิ่มตามระดับสกิล"
    },
    {
      name: "เสริมพลัง",
      lavel: 0,
      expNow: 0,
      expMax: 10,
      expUpgrate: 2,
      reinforcement: 0.3,
      type: "empower",
      condition: "standas",
      turn: 5,
      use: {
        ep: 0,
        mp: 5
      },
      detail: "สกิลเสริมพลัง เป็นการเสริมพลังโดยเพิ่มพลังโจมตีเรา ใช้  พลังเวทไป 5 แต้ม โดยเพิ่มค่าพลังสถานะทุกอย่าง +0.3% เพิ่มตามระดับสกิล เป็นเวลา 5 รอบ"
    }
  ]

}

//Define Actions
const characterReducer = (state = initState, action) => {
  switch (action.type) {
    //Change character name
    case 'NAME':
      return {
        ...state,
        name: action.payload
      }
    //Change character name
    case 'NEW_NAME':
      return {
        ...state,
        newName: action.payload
      }
    //Change character point update status
    case 'POINT_UPDATE_STATUS':
      return {
        ...state,
        pointUpdateStatus: action.payload
      }
      case 'NEW_POINT_UPDATE_STATUS':
      return {
        ...state,
        newPointUpdateStatus: action.payload
      }
    //Change character health point status
    case 'HEALTH_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          healthPointStatusState: action.payload
        }

      }
    //Change character health point progress
    case 'HEALTH_POINT_PROGRESS':
      return {
        ...state,
        healthPointProgress: action.payload

      }
    //Change character health point now
    case 'HEALTH_POINT_STATUS_NOW':
      return {
        ...state,
        status: {
          ...state.status,
          healthPointStatusNow: action.payload
        }

      }
    //character health point default
    case 'HEALTH_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          healthPointStatusDefault: action.payload
        }
      }
    case 'NEW_HEALTH_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newHealthPointStatusDefault: action.payload
        }
      }
    //Change character point point status
    case 'MAGIC_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          magicPointStatusState: action.payload
        }

      }
    //Change character magic point progress
    case 'MAGIC_POINT_PROGRESS':
      return {
        ...state,
        magicPointProgress: action.payload
      }
    //Change character point point now
    case 'MAGIC_POINT_STATUS_NOW':
      return {
        ...state,
        status: {
          ...state.status,
          magicPointStatusNow: action.payload
        }

      }
    //character magic point default
    case 'MAGIC_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          magicPointStatusDefault: action.payload
        }
      }
    case 'NEW_MAGIC_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newMagicPointStatusDefault: action.payload
        }
      }
    //Change character energy point status
    case 'ENERGY_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          energyPointStatusState: action.payload
        }
      }
    //Change character magic point progress
    case 'ENERGY_POINT_PROGRESS':
      return {
        ...state,
        energyPointProgress: action.payload
      }
    //Change character energy point now
    case 'ENERGY_POINT_STATUS_NOW':
      return {
        ...state,
        status: {
          ...state.status,
          energyPointStatusNow: action.payload
        }
      }
    //character energy point default
    case 'ENERGY_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          energyPointStatusDefault: action.payload
        }
      }
    case 'NEW_ENERGY_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newEnergyPointStatusDefault: action.payload
        }
      }
    //Change character attack point status
    case 'ATTACK_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          attackPointStatusState: action.payload
        }
      }
    //character attack point status
    case 'ATTACK_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          attackPointStatusDefault: action.payload
        }
      }
    case 'NEW_ATTACK_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newAttackPointStatusDefault: action.payload
        }
      }
    //Change character defense point status
    case 'DEFENSE_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          defensePointStatusState: action.payload
        }
      }
    //character defense point status
    case 'DEFENSE_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          defensePointStatusDefault: action.payload
        }
      }
    case 'NEW_DEFENSE_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newDefensePointStatusDefault: action.payload
        }
      }
    //Change character speed point status
    case 'SPEED_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          speedPointStatusState: action.payload
        }
      }
    //character speed point status
    case 'SPEED_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          speedPointStatusDefault: action.payload
        }
      }
    case 'NEW_SPEED_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newSpeedPointStatusDefault: action.payload
        }
      }
    //Change character intelligence point status
    case 'INTELLIGENCE_POINT_STATUS_STATE':
      return {
        ...state,
        status: {
          ...state.status,
          intelligencePointStatusState: action.payload
        }
      }
    //character intelligence point status
    case 'INTELLIGENCE_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          intelligencePointStatusDefault: action.payload
        }
      }
    case 'NEW_INTELLIGENCE_POINT_STATUS_DEFAULT':
      return {
        ...state,
        status: {
          ...state.status,
          newIntelligencePointStatusDefault: action.payload
        }
      }
    default:
      return state
  }
}

export default characterReducer;