// Data for "Find Yourself in the Budget" — 2026-27 ACT Budget.
//
// Every `excerpt` below is copied verbatim from the statement named beside
// it, and is verified as a literal substring of the source file at build
// time. Do not paraphrase these fields.
//
// Sources:
//   areas[].source, health points, cost-of-living crisis fund point
//     -> data/markdown/03-wellbeing.md  (Wellbeing Budget Statement)
//   concession points, costOfLiving.concessions
//     -> data/markdown/01-cost-of-living.md, Table 3.3.1
//   costOfLiving.scenarios
//     -> data/extracted/household-scenarios.csv (Table 3.3.2)
//
// The `Total` row of concessions.csv is dropped on purpose (honesty rule 5).
// Money units differ and must never be mixed: areas[].headline is in $ MILLION,
// concession costs are in $ THOUSAND, scenario figures are whole dollars.

window.DATA = {
  "meta": {
    "budget": "2026-27"
  },
  "areas": [
    {
      "id": "health",
      "label": "Health",
      "blurb": "Hospitals, community health services, and prevention and early intervention.",
      "headline": {
        "value": 910,
        "unit": "million",
        "qualifier": "",
        "period": "over four years"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Mental and physical health",
        "excerpt": "The 2026-27 Budget will support the health of Canberrans through the investment of $910 million over four years including:"
      },
      "points": [
        {
          "id": "health-northside-hospital",
          "summary": "A new hospital is being built for Canberra's north side.",
          "source": {
            "statement": "Wellbeing Budget Statement",
            "heading": "Mental and physical health",
            "excerpt": "Delivering the new Northside Hospital"
          }
        },
        {
          "id": "health-south-tuggeranong",
          "summary": "A newly built health centre in South Tuggeranong is opening.",
          "source": {
            "statement": "Wellbeing Budget Statement",
            "heading": "Mental and physical health",
            "excerpt": "Opening the newly constructed South Tuggeranong Health Centre"
          }
        },
        {
          "id": "health-rapid-access-clinic",
          "summary": "The Rapid Access Clinic is getting more capacity to find lung cancer earlier.",
          "source": {
            "statement": "Wellbeing Budget Statement",
            "heading": "Mental and physical health",
            "excerpt": "Increasing capacity at Canberra Health Services’ Rapid Access Clinic to improve early detection and integrated care for individuals with, or at risk of, lung cancer."
          }
        },
        {
          "id": "health-palliative-care",
          "summary": "Canberra Hospital is opening a unit for people needing palliative care.",
          "source": {
            "statement": "Wellbeing Budget Statement",
            "heading": "Mental and physical health",
            "excerpt": "Operationalising the Acute Palliative Care Unit at Canberra Hospital. The facility will provide specialised medical care that relieves symptoms and improves quality of life."
          }
        }
      ]
    },
    {
      "id": "housing",
      "label": "Housing and homes",
      "blurb": "Building more homes, and support for renters and people at risk of homelessness.",
      "headline": {
        "value": 770,
        "unit": "million",
        "qualifier": "more than",
        "period": "over four years"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Housing",
        "excerpt": "The 2026–27 Budget includes more than $770 million in funding over four years for housing initiatives."
      },
      "points": []
    },
    {
      "id": "transport",
      "label": "Transport, city services and environment",
      "blurb": "Getting around the city, local services, and the environment.",
      "headline": {
        "value": 343.1,
        "unit": "million",
        "qualifier": "",
        "period": "in the 2026-27 Budget"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Wellbeing Domains",
        "excerpt": "Transport, city services, environment and climate – we are providing $343.1 million in funding – this category is predominantly aligned to the wellbeing domains of Environment and climate, Access and connectivity and aspects of the Safety domain."
      },
      "points": []
    },
    {
      "id": "education",
      "label": "Education and training",
      "blurb": "Schools, teachers and training.",
      "headline": {
        "value": 253,
        "unit": "million",
        "qualifier": "nearly",
        "period": "in the 2026-27 Budget"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Wellbeing Domains",
        "excerpt": "Education and training – we are providing nearly $253 million in funding – this category is predominantly aligned to the wellbeing domain of Education and life-long learning and aspects of the Environment and climate, and Health domains."
      },
      "points": []
    },
    {
      "id": "public-administration",
      "label": "Public administration",
      "blurb": "Running government services.",
      "headline": {
        "value": 202,
        "unit": "million",
        "qualifier": "",
        "period": "in the 2026-27 Budget"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Wellbeing Domains",
        "excerpt": "Public administration – we are providing $202 million in funding — this category is aligned to the wellbeing domains of Governance and institutions and the Economy."
      },
      "points": []
    },
    {
      "id": "community",
      "label": "Community support, social inclusion and safety",
      "blurb": "Community services, feeling included, and staying safe.",
      "headline": {
        "value": 182.6,
        "unit": "million",
        "qualifier": "",
        "period": "in the 2026-27 Budget"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Wellbeing Domains",
        "excerpt": "Community support, social inclusion and safety – we are providing $182.6 million in funding – this category is predominantly aligned to the wellbeing domains of Social connection, Identity and belonging, and Safety."
      },
      "points": []
    },
    {
      "id": "jobs",
      "label": "Jobs, entertainment, sport and culture",
      "blurb": "Work, and the things to do around the city.",
      "headline": {
        "value": 143.5,
        "unit": "million",
        "qualifier": "",
        "period": "in the 2026-27 Budget"
      },
      "source": {
        "statement": "Wellbeing Budget Statement",
        "heading": "Wellbeing Domains",
        "excerpt": "Jobs, entertainment, sport and culture – we are providing $143.5 million in funding – this category is aligned to the wellbeing domains of Governance and institutions, Economy, and aspects of Social connection, Identity and belonging and Living standards domains."
      },
      "points": []
    }
  ],
  "costOfLiving": {
    "id": "cost-of-living",
    "label": "Cost of living",
    "framing": "What you might be able to claim",
    "blurb": "Concessions overlap the areas above rather than sitting alongside them.",
    "note": "These are what each concession is worth, not a statement that you can get one. The Budget papers say “eligible households” without setting out who is eligible. Concessions are run by the ACT Government, which sets and checks the criteria.",
    "points": [
      {
        "id": "col-utilities-rebate",
        "summary": "There is an $800 rebate on electricity, gas and water bills.",
        "source": {
          "statement": "Cost of Living Statement",
          "heading": "Concessions",
          "excerpt": "$800 rebate on utility bills."
        }
      },
      {
        "id": "col-pensioner-rates",
        "summary": "Pensioners can get half off their general rates, capped at $750 a year.",
        "source": {
          "statement": "Cost of Living Statement",
          "heading": "Concessions",
          "excerpt": "50 per cent rates rebate up to $750 per year, $133 PFESL rebate per year."
        }
      },
      {
        "id": "col-public-transport",
        "summary": "Some people pay less, or nothing, on buses and light rail.",
        "source": {
          "statement": "Cost of Living Statement",
          "heading": "Concessions",
          "excerpt": "Reduced or free fares on Transport Canberra bus and light rail services."
        }
      },
      {
        "id": "col-housing-crisis-fund",
        "summary": "A new fund and payment is being set up for renters under financial stress.",
        "source": {
          "statement": "Wellbeing Budget Statement",
          "heading": "Cost of living",
          "excerpt": "Establishing a new Housing Crisis Support Fund and a Crisis Support Payment to provide targeted assistance to low income households experiencing rental stress."
        }
      }
    ],
    "concessions": [
      {
        "assistance": "Electricity, Gas and Water Rebate",
        "description": "$800 rebate on utility bills.",
        "estimatedTakeUp": "33,200 households",
        "cost2025_26Thousands": 25300,
        "cost2026_27Thousands": 26600
      },
      {
        "assistance": "Pensioner General Rates Rebate, PFESL Rebate",
        "description": "50 per cent rates rebate up to $750 per year, $133 PFESL rebate per year.",
        "estimatedTakeUp": "15,500",
        "cost2025_26Thousands": 11200,
        "cost2026_27Thousands": 11700
      },
      {
        "assistance": "Conveyance duty concessions",
        "description": "Up to 100 per cent discount on conveyance duty payable.",
        "estimatedTakeUp": "6,200",
        "cost2025_26Thousands": 107000,
        "cost2026_27Thousands": 143500
      },
      {
        "assistance": "Spectacles Subsidy Scheme",
        "description": "Subsidy up to $200 on spectacle purchases once every two years.",
        "estimatedTakeUp": "9,200 spectacles",
        "cost2025_26Thousands": 2000,
        "cost2026_27Thousands": 2000
      },
      {
        "assistance": "Taxi Subsidy Scheme",
        "description": "Assistance for people with disability or significant mobility restriction.",
        "estimatedTakeUp": "161,100 trips",
        "cost2025_26Thousands": 4900,
        "cost2026_27Thousands": 5000
      },
      {
        "assistance": "Motor vehicle registration concessions",
        "description": "Up to 100 per cent discount on motor vehicle registration fees.",
        "estimatedTakeUp": "77,900 registrations",
        "cost2025_26Thousands": 15400,
        "cost2026_27Thousands": 15700
      },
      {
        "assistance": "Driver licence concessions",
        "description": "Up to a 100 per cent discount on driver licence fees.",
        "estimatedTakeUp": "6,800 licences",
        "cost2025_26Thousands": 1600,
        "cost2026_27Thousands": 1600
      },
      {
        "assistance": "Public transport concessions",
        "description": "Reduced or free fares on Transport Canberra bus and light rail services.",
        "estimatedTakeUp": "Over 3.2 million trips",
        "cost2025_26Thousands": 6100,
        "cost2026_27Thousands": 6800
      }
    ],
    "scenarios": [
      {
        "id": 1,
        "suburb": "Belconnen",
        "household": "Single, pensioner, in own unit, no car",
        "years": {
          "2025-26": {
            "disposableIncome": 29900.0,
            "ratesPfeslSflHl": 1801.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 0.0,
            "publicTransportFares": 1411.0,
            "utilities": 4248.0,
            "ratesPfeslConcession": 865.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 706.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 24811.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 31200.0,
            "ratesPfeslSflHl": 1739.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 0.0,
            "publicTransportFares": 1665.0,
            "utilities": 4570.0,
            "ratesPfeslConcession": 883.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 835.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 25744.0,
            "change": 933.0
          }
        }
      },
      {
        "id": 2,
        "suburb": "Braddon",
        "household": "Couple, pensioners, in own house, 2 cars, downsizing to unit in 2026-27",
        "years": {
          "2025-26": {
            "disposableIncome": 45000.0,
            "ratesPfeslSflHl": 6493.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1434.0,
            "publicTransportFares": 0.0,
            "utilities": 6125.0,
            "ratesPfeslConcession": 865.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 1114.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 33727.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 47100.0,
            "ratesPfeslSflHl": 2208.0,
            "conveyanceDuty": 10568.0,
            "vehicleCharges": 1540.0,
            "publicTransportFares": 0.0,
            "utilities": 6510.0,
            "ratesPfeslConcession": 883.0,
            "conveyanceDutyConcession": 10568.0,
            "vehicleConcession": 1217.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 39742.0,
            "change": 6015.0
          }
        }
      },
      {
        "id": 3,
        "suburb": "Banks",
        "household": "Single parent, first income quintile, in own house, 1 car, 1 child who catches the bus to school",
        "years": {
          "2025-26": {
            "disposableIncome": 35800.0,
            "ratesPfeslSflHl": 2953.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 717.0,
            "publicTransportFares": 937.0,
            "utilities": 6125.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 505.0,
            "publicTransportConcession": 468.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 26841.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 37000.0,
            "ratesPfeslSflHl": 3022.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 770.0,
            "publicTransportFares": 1084.0,
            "utilities": 6510.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 555.0,
            "publicTransportConcession": 542.0,
            "utilitiesConcession": 800.0,
            "netDisposableIncome": 27511.0,
            "change": 670.0
          }
        }
      },
      {
        "id": 4,
        "suburb": "Cook",
        "household": "Single, fixed income retiree, in own house, 1 car",
        "years": {
          "2025-26": {
            "disposableIncome": 65300.0,
            "ratesPfeslSflHl": 4990.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 717.0,
            "publicTransportFares": 0.0,
            "utilities": 4248.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 56.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 56300.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 68100.0,
            "ratesPfeslSflHl": 4309.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 770.0,
            "publicTransportFares": 0.0,
            "utilities": 4573.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 61.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 58509.0,
            "change": 2208.0
          }
        }
      },
      {
        "id": 5,
        "suburb": "Kingston",
        "household": "Single, second income quintile, in own unit, no car",
        "years": {
          "2025-26": {
            "disposableIncome": 61200.0,
            "ratesPfeslSflHl": 2643.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 0.0,
            "publicTransportFares": 1411.0,
            "utilities": 4248.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 52898.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 63200.0,
            "ratesPfeslSflHl": 2758.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 0.0,
            "publicTransportFares": 1665.0,
            "utilities": 4573.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 54204.0,
            "change": 1306.0
          }
        }
      },
      {
        "id": 6,
        "suburb": "Turner",
        "household": "Single, third income quintile, 1 car, purchasing first unit in 2026-27",
        "years": {
          "2025-26": {
            "disposableIncome": 81600.0,
            "ratesPfeslSflHl": 0.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 717.0,
            "publicTransportFares": 0.0,
            "utilities": 4248.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 76635.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 84200.0,
            "ratesPfeslSflHl": 2559.0,
            "conveyanceDuty": 14456.0,
            "vehicleCharges": 770.0,
            "publicTransportFares": 0.0,
            "utilities": 4573.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 14456.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 0.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 76298.0,
            "change": -337.0
          }
        }
      },
      {
        "id": 7,
        "suburb": "Wright",
        "household": "Couple, third income quintile, 2 cars, first time buying house in 2026-27, 1 child who catches bus to school",
        "years": {
          "2025-26": {
            "disposableIncome": 163100.0,
            "ratesPfeslSflHl": 0.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1434.0,
            "publicTransportFares": 937.0,
            "utilities": 6125.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 468.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 155072.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 168400.0,
            "ratesPfeslSflHl": 4061.0,
            "conveyanceDuty": 48358.0,
            "vehicleCharges": 1540.0,
            "publicTransportFares": 1084.0,
            "utilities": 6510.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 48358.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 542.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 155747.0,
            "change": 675.0
          }
        }
      },
      {
        "id": 8,
        "suburb": "Ainslie",
        "household": "Couple, fourth income quintile, in own house, 2 cars, 1 school child and 1 tertiary student who catch the bus",
        "years": {
          "2025-26": {
            "disposableIncome": 210100.0,
            "ratesPfeslSflHl": 6144.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1434.0,
            "publicTransportFares": 2298.0,
            "utilities": 7981.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 1149.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 193392.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 217000.0,
            "ratesPfeslSflHl": 6642.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1540.0,
            "publicTransportFares": 2337.0,
            "utilities": 8429.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 1168.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 199220.0,
            "change": 5828.0
          }
        }
      },
      {
        "id": 9,
        "suburb": "Forrest",
        "household": "Couple, fifth income quintile, in own house, 2 cars, 2 children who catch the bus to school",
        "years": {
          "2025-26": {
            "disposableIncome": 311900.0,
            "ratesPfeslSflHl": 15789.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1434.0,
            "publicTransportFares": 1874.0,
            "utilities": 7981.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 937.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 285759.0,
            "change": null
          },
          "2026-27": {
            "disposableIncome": 322000.0,
            "ratesPfeslSflHl": 17872.0,
            "conveyanceDuty": 0.0,
            "vehicleCharges": 1540.0,
            "publicTransportFares": 2168.0,
            "utilities": 8429.0,
            "ratesPfeslConcession": 0.0,
            "conveyanceDutyConcession": 0.0,
            "vehicleConcession": 0.0,
            "publicTransportConcession": 1084.0,
            "utilitiesConcession": 0.0,
            "netDisposableIncome": 293075.0,
            "change": 7316.0
          }
        }
      }
    ]
  }
};
