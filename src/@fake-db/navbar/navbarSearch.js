import mock from "../mock"

export const searchResult = [
  {
    groupTitle: "Pages",
    searchLimit: 4,
    data: [

      {
        id: 3,
        target: "dashboard",
        title: "Dashboard",
        link: "/dashboard",
        icon: "Home"
      },
      {
        id: 100,
        target: "cposjk2",
        title: "CPOS JK-2",
        link: "/cpos/jk2/Chiller_1",
        icon: "Activity"
      },

      {
        id: 101,
        target: "cposjk2",
        title: "CPOS JK-3",
        link: "/cpos/jk3/Chiller_1",
        icon: "Activity"
      },
    ]
  },

  {
    groupTitle: "Data",
    searchLimit: 20,
    data: [


      {
        id: 11,
        target: "home",
        title: "Temperature Table Details",
        link: "/table/temperature",
        icon: "File"
      },
      {
        id: 12,
        target: "page",
        title: "Suc Pressure Table Details",
        link: "/table/Suc_Pressure",
        icon: "File"
      },
      {
        id: 13,
        target: "dashboard",
        title: "Vibration & Noise Table",
        link: "/table/Vibration_and_Noise",
        icon: "File"
      },
      {
        id: 14,
        target: "TrendOne",
        title: "Trend Temperature 7 September 2020",
        link: "/pages/TrendOne",
        icon: "Activity"
      },
      {
        id: 15,
        target: "TrendTwo",
        title: "Trend Vibration 7 September 2020",
        link: "/pages/TrendTwo",
        icon: "Activity"
      },

 //=========================================
 //============== VIBRATION ================
 // ========================================


      {
        id: 16,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z03",
        link: "/pages/trends/vibration/jk1/vib1-a-z03",
        icon: "Activity"
      },

      {
        id: 17,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z04",
        link: "/pages/trends/vibration/jk1/vib1-a-z04",
        icon: "Activity"
      },

      {
        id: 18,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z05",
        link: "/pages/trends/vibration/jk1/vib1-a-z05",
        icon: "Activity"
      },

      {
        id: 19,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z09",
        link: "/pages/trends/vibration/jk1/vib1-a-z09",
        icon: "Activity"
      },

      {
        id: 20,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z10",
        link: "/pages/trends/vibration/jk1/vib1-a-z10",
        icon: "Activity"
      },

      {
        id: 21,
        target: "TrendTwo",
        title: "Trend Vibration JK1 | 1-A-Z11",
        link: "/pages/trends/vibration/jk1/vib1-a-z11",
        icon: "Activity"
      },

      //======= 1B =================


      {
        id: 22,
        title: "Trend Vibration JK1 | 1-A-Z03",
        link: "/pages/trends/vibration/jk1/vib1-b-z03",
        icon: "Activity"
      },


      {
        id: 23,
        title: "Trend Vibration JK1 | 1-A-Z04",
        link: "/pages/trends/vibration/jk1/vib1-b-z04",
        icon: "Activity"
      },


      {
        id: 24,
        title: "Trend Vibration JK1 | 1-A-Z05",
        link: "/pages/trends/vibration/jk1/vib1-b-z05",
        icon: "Activity"
      },


      {
        id: 25,
        title: "Trend Vibration JK1 | 1-B-Z08",
        link: "/pages/trends/vibration/jk1/vib1-b-z08",
        icon: "Activity"
      },


      {
        id: 26,
        title: "Trend Vibration JK1 | 1-B-Z09",
        link: "/pages/trends/vibration/jk1/vib1-b-z09",
        icon: "Activity"
      },


      {
        id: 27,
        title: "Trend Vibration JK1 | 1-B-Z10",
        link: "/pages/trends/vibration/jk1/vib1-b-z10",
        icon: "Activity"
      },


//========= 2B =====

      {
        id: 28,
        title: "Trend Vibration JK1 | 2-B-Z02",
        link: "/pages/trends/vibration/jk1/vib2-b-z02",
        icon: "Activity"
      },

      {
        id: 29,
        title: "Trend Vibration JK1 | 2-B-Z03",
        link: "/pages/trends/vibration/jk1/vib2-b-z03",
        icon: "Activity"
      },

      {
        id: 30,
        title: "Trend Vibration JK1 | 2-B-Z04",
        link: "/pages/trends/vibration/jk1/vib2-b-z04",
        icon: "Activity"
      },

      {
        id: 31,
        title: "Trend Vibration JK1 | 2-B-Z05",
        link: "/pages/trends/vibration/jk1/vib2-b-z05",
        icon: "Activity"
      },

      {
        id: 32,
        title: "Trend Vibration JK1 | 2-B-Z07",
        link: "/pages/trends/vibration/jk1/vib2-b-z07",
        icon: "Activity"
      },

      {
        id: 33,
        title: "Trend Vibration JK1 | 2-B-Z08",
        link: "/pages/trends/vibration/jk1/vib2-b-z08",
        icon: "Activity"
      },

      {
        id: 34,
        title: "Trend Vibration JK1 | 2-B-Z09",
        link: "/pages/trends/vibration/jk1/vib2-b-z09",
        icon: "Activity"
      },

      {
        id: 35,
        title: "Trend Vibration JK1 | 2-B-Z10",
        link: "/pages/trends/vibration/jk1/vib2-b-z10",
        icon: "Activity"
      },

//========= 3A =====


      {
        id: 36,
        title: "Trend Vibration JK1 | 3-A-Z02",
        link: "/pages/trends/vibration/jk1/vib3-a-z02",
        icon: "Activity"
      },


      {
        id: 37,
        title: "Trend Vibration JK1 | 3-A-Z03",
        link: "/pages/trends/vibration/jk1/vib3-a-z03",
        icon: "Activity"
      },


      {
        id: 38,
        title: "Trend Vibration JK1 | 3-A-Z04",
        link: "/pages/trends/vibration/jk1/vib3-a-z04",
        icon: "Activity"
      },


      {
        id: 39,
        title: "Trend Vibration JK1 | 3-A-Z05",
        link: "/pages/trends/vibration/jk1/vib3-a-z05",
        icon: "Activity"
      },


      {
        id: 40,
        title: "Trend Vibration JK1 | 3-A-Z06",
        link: "/pages/trends/vibration/jk1/vib3-a-z06",
        icon: "Activity"
      },


      {
        id: 41,
        title: "Trend Vibration JK1 | 3-A-Z07",
        link: "/pages/trends/vibration/jk1/vib3-a-z07",
        icon: "Activity"
      },


      {
        id: 42,
        title: "Trend Vibration JK1 | 3-A-Z08",
        link: "/pages/trends/vibration/jk1/vib3-a-z08",
        icon: "Activity"
      },


      {
        id: 43,
        title: "Trend Vibration JK1 | 3-A-Z09",
        link: "/pages/trends/vibration/jk1/vib3-a-z09",
        icon: "Activity"
      },


      {
        id: 44,
        title: "Trend Vibration JK1 | 3-A-Z10",
        link: "/pages/trends/vibration/jk1/vib3-a-z10",
        icon: "Activity"
      },


//============ 3B ===============

      {
        id: 45,
        title: "Trend Vibration JK1 | 3-B-Z02",
        link: "/pages/trends/vibration/jk1/vib3-b-z02",
        icon: "Activity"
      } ,


      {
        id: 46,
        title: "Trend Vibration JK1 | 3-B-Z03",
        link: "/pages/trends/vibration/jk1/vib3-b-z03",
        icon: "Activity"
      } ,


      {
        id: 47,
        title: "Trend Vibration JK1 | 3-B-Z04",
        link: "/pages/trends/vibration/jk1/vib3-b-z04",
        icon: "Activity"
      } ,


      {
        id: 48,
        title: "Trend Vibration JK1 | 3-B-Z05",
        link: "/pages/trends/vibration/jk1/vib3-b-z05",
        icon: "Activity"
      } ,


      {
        id: 49,
        title: "Trend Vibration JK1 | 3-B-Z06",
        link: "/pages/trends/vibration/jk1/vib3-b-z06",
        icon: "Activity"
      } ,


      {
        id: 50,
        title: "Trend Vibration JK1 | 3-B-Z07",
        link: "/pages/trends/vibration/jk1/vib3-b-z07",
        icon: "Activity"
      } ,


      {
        id: 51,
        title: "Trend Vibration JK1 | 3-B-Z08",
        link: "/pages/trends/vibration/jk1/vib3-b-z08",
        icon: "Activity"
      } ,


      {
        id: 52,
        title: "Trend Vibration JK1 | 3-B-Z09",
        link: "/pages/trends/vibration/jk1/vib3-b-z09",
        icon: "Activity"
      } ,


      {
        id: 53,
        title: "Trend Vibration JK1 | 3-B-Z10",
        link: "/pages/trends/vibration/jk1/vib3-b-z10",
        icon: "Activity"
      } ,


      {
        id: 54,
        title: "Trend Vibration JK1 | 3-B-Z11",
        link: "/pages/trends/vibration/jk1/vib3-b-z11",
        icon: "Activity"
      } ,


      {
        id: 55,
        title: "Trend Vibration JK1 | 3-B-Z12",
        link: "/pages/trends/vibration/jk1/vib3-b-z12",
        icon: "Activity"
      } ,


      {
        id: 56,
        title: "Trend Vibration JK1 | 3-B-Z13",
        link: "/pages/trends/vibration/jk1/vib3-b-z13",
        icon: "Activity"
      } ,


//=========================================
// ============== TEMPERATURE ================
// ========================================


      {
        id: 57,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z03",
        link: "/pages/trends/temperature/jk1/temp1-a-z03",
        icon: "Activity"
      },

      {
        id: 58,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z04",
        link: "/pages/trends/temperature/jk1/temp1-a-z04",
        icon: "Activity"
      },

      {
        id: 59,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z05",
        link: "/pages/trends/temperature/jk1/temp1-a-z05",
        icon: "Activity"
      },

      {
        id: 60,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z09",
        link: "/pages/trends/temperature/jk1/temp1-a-z09",
        icon: "Activity"
      },

      {
        id: 61,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z10",
        link: "/pages/trends/temperature/jk1/temp1-a-z10",
        icon: "Activity"
      },

      {
        id: 62,
        target: "TrendTwo",
        title: "Trend Temperature JK1 | 1-A-Z11",
        link: "/pages/trends/temperature/jk1/temp1-a-z11",
        icon: "Activity"
      },

      //======= 1B =================


      {
        id: 63,
        title: "Trend Temperature JK1 | 1-B-Z03",
        link: "/pages/trends/temperature/jk1/temp1-b-z03",
        icon: "Activity"
      },


      {
        id: 64,
        title: "Trend Temperature JK1 | 1-B-Z04",
        link: "/pages/trends/temperature/jk1/temp1-b-z04",
        icon: "Activity"
      },


      {
        id: 65,
        title: "Trend Temperature JK1 | 1-B-Z05",
        link: "/pages/trends/temperature/jk1/temp1-b-z05",
        icon: "Activity"
      },


      {
        id: 66,
        title: "Trend Temperature JK1 | 1-B-Z08",
        link: "/pages/trends/temperature/jk1/temp1-b-z08",
        icon: "Activity"
      },


      {
        id: 67,
        title: "Trend Temperature JK1 | 1-B-Z09",
        link: "/pages/trends/temperature/jk1/temp1-b-z09",
        icon: "Activity"
      },


      {
        id: 68,
        title: "Trend Temperature JK1 | 1-B-Z10",
        link: "/pages/trends/temperature/jk1/temp1-b-z10",
        icon: "Activity"
      },


//========= 2B =====

      {
        id: 69,
        title: "Trend Temperature JK1 | 2-B-Z02",
        link: "/pages/trends/temperature/jk1/temp2-b-z02",
        icon: "Activity"
      },

      {
        id: 70,
        title: "Trend Temperature JK1 | 2-B-Z03",
        link: "/pages/trends/temperature/jk1/temp2-b-z03",
        icon: "Activity"
      },

      {
        id: 71,
        title: "Trend Temperature JK1 | 2-B-Z04",
        link: "/pages/trends/temperature/jk1/temp2-b-z04",
        icon: "Activity"
      },

      {
        id: 72,
        title: "Trend Temperature JK1 | 2-B-Z05",
        link: "/pages/trends/temperature/jk1/temp2-b-z05",
        icon: "Activity"
      },

      {
        id: 73,
        title: "Trend Temperature JK1 | 2-B-Z07",
        link: "/pages/trends/temperature/jk1/temp2-b-z07",
        icon: "Activity"
      },

      {
        id: 74,
        title: "Trend Temperature JK1 | 2-B-Z08",
        link: "/pages/trends/temperature/jk1/temp2-b-z08",
        icon: "Activity"
      },

      {
        id: 75,
        title: "Trend Temperature JK1 | 2-B-Z09",
        link: "/pages/trends/temperature/jk1/temp2-b-z09",
        icon: "Activity"
      },

      {
        id: 76,
        title: "Trend Temperature JK1 | 2-B-Z10",
        link: "/pages/trends/temperature/jk1/temp2-b-z10",
        icon: "Activity"
      },

//========= 3A =====


      {
        id: 77,
        title: "Trend Temperature JK1 | 3-A-Z02",
        link: "/pages/trends/temperature/jk1/temp3-a-z02",
        icon: "Activity"
      },


      {
        id: 78,
        title: "Trend Temperature JK1 | 3-A-Z03",
        link: "/pages/trends/temperature/jk1/temp3-a-z03",
        icon: "Activity"
      },


      {
        id: 79,
        title: "Trend Temperature JK1 | 3-A-Z04",
        link: "/pages/trends/temperature/jk1/temp3-a-z04",
        icon: "Activity"
      },


      {
        id: 80,
        title: "Trend Temperature JK1 | 3-A-Z05",
        link: "/pages/trends/temperature/jk1/temp3-a-z05",
        icon: "Activity"
      },


      {
        id: 81,
        title: "Trend Temperature JK1 | 3-A-Z06",
        link: "/pages/trends/temperature/jk1/temp3-a-z06",
        icon: "Activity"
      },


      {
        id: 82,
        title: "Trend Temperature JK1 | 3-A-Z07",
        link: "/pages/trends/temperature/jk1/temp3-a-z07",
        icon: "Activity"
      },


      {
        id: 83,
        title: "Trend Temperature JK1 | 3-A-Z08",
        link: "/pages/trends/temperature/jk1/temp3-a-z08",
        icon: "Activity"
      },


      {
        id: 84,
        title: "Trend Temperature JK1 | 3-A-Z09",
        link: "/pages/trends/temperature/jk1/temp3-a-z09",
        icon: "Activity"
      },


      {
        id: 85,
        title: "Trend Temperature JK1 | 3-A-Z10",
        link: "/pages/trends/temperature/jk1/temp3-a-z10",
        icon: "Activity"
      },


//============ 3B ===============

      {
        id: 86,
        title: "Trend Temperature JK1 | 3-B-Z02",
        link: "/pages/trends/temperature/jk1/temp3-b-z02",
        icon: "Activity"
      } ,


      {
        id: 87,
        title: "Trend Temperature JK1 | 3-B-Z03",
        link: "/pages/trends/temperature/jk1/temp3-b-z03",
        icon: "Activity"
      } ,


      {
        id: 88,
        title: "Trend Temperature JK1 | 3-B-Z04",
        link: "/pages/trends/temperature/jk1/temp3-b-z04",
        icon: "Activity"
      } ,


      {
        id: 89,
        title: "Trend Temperature JK1 | 3-B-Z05",
        link: "/pages/trends/temperature/jk1/temp3-b-z05",
        icon: "Activity"
      } ,


      {
        id: 90,
        title: "Trend Temperature JK1 | 3-B-Z06",
        link: "/pages/trends/temperature/jk1/temp3-b-z06",
        icon: "Activity"
      } ,


      {
        id: 91,
        title: "Trend Temperature JK1 | 3-B-Z07",
        link: "/pages/trends/temperature/jk1/temp3-b-z07",
        icon: "Activity"
      } ,


      {
        id: 92,
        title: "Trend Temperature JK1 | 3-B-Z08",
        link: "/pages/trends/temperature/jk1/temp3-b-z08",
        icon: "Activity"
      } ,


      {
        id: 93,
        title: "Trend Temperature JK1 | 3-B-Z09",
        link: "/pages/trends/temperature/jk1/temp3-b-z09",
        icon: "Activity"
      } ,


      {
        id: 94,
        title: "Trend Temperature JK1 | 3-B-Z10",
        link: "/pages/trends/temperature/jk1/temp3-b-z10",
        icon: "Activity"
      } ,


      {
        id: 95,
        title: "Trend Temperature JK1 | 3-B-Z11",
        link: "/pages/trends/temperature/jk1/temp3-b-z11",
        icon: "Activity"
      } ,


      {
        id: 96,
        title: "Trend Temperature JK1 | 3-B-Z12",
        link: "/pages/trends/temperature/jk1/temp3-b-z12",
        icon: "Activity"
      } ,


      {
        id: 97 ,
        title: "Trend Temperature JK1 | 3-B-Z13",
        link: "/pages/trends/temperature/jk1/temp3-b-z13",
        icon: "Activity"
      }



    ]
  }
]

mock.onGet("/api/main-search/data").reply(200, {
  searchResult
})
