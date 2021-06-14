const initState = {
      attack: {
            standas: {
                  hit: {
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
            }
      },
      defense: {
            standas: {
                  shield: {
                        name: "โล่",
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
                  }
            }
      },
      parry: {
            standas: {
                  elude: {
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
                  }
            }
      },
      empower: {
            standas: {
                  power_up: {
                        name: "เพิ่มพลัง",
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
            }
      }

};

const systemSkillReducer = (state = initState, action) => {
      switch (action.type) {
            default:
                  return state
      }
};

export default systemSkillReducer;