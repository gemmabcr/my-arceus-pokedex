export const backgroundImage = 'https://legends.pokemon.com/assets/home/bg-dp-desktop.jpg'
export const finalBanner = 'https://legends.pokemon.com/assets/home/home_trailer_thumb.jpg'
export const pokemonLogo = 'https://legends.pokemon.com/en-us/assets/arceus-logo-large.png'
export const areasLogos = {
  praderaObsidiana: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20220722112256/Pradera_Obsidiana_icono.png',
  pantanalCarmesi: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20220722112246/Pantanal_Carmes%C3%AD_icono.png',
  costaCobalto: 'https://images.wikidexcdn.net/mwuploads/wikidex/a/a3/latest/20220722112227/Costa_Cobalto_icono.png',
  laderaCorona: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20220722112236/Ladera_Corona_icono.png',
  tundraAlba: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20220722112318/Tundra_Alba_icono.png',
}

const areas = [
  {
    id: 0,
    name: 'Pradera Obsidiana',
    locations: [
      {id: 0, name: 'Alacena del Bosque'},
      {id: 1, name: 'Arena del Gran Árbol'},
      {id: 2, name: 'Bosque Recóndito'},
      {id: 3, name: 'Campo Aromaflor'},
      {id: 4, name: 'Cascada Obsidiana'},
      {id: 5, name: 'Colina del Anhelo'},
      {id: 6, name: 'Foresta Funesta'},
      {id: 7, name: 'Gruta Pirita'},
      {id: 8, name: 'Isla Hansa'},
      {id: 9, name: 'Lago Veraz'},
      {id: 10, name: 'Loma del Venado'},
      {id: 11, name: 'Planicie Arena'},
      {id: 12, name: 'Prado Herradura'},
      {id: 13, name: 'Presa del Estuario'},
      {id: 14, name: 'Puente Erosionado'},
      {id: 15, name: 'Senda del Venado'},
      {id: 16, name: 'Vereda del Viento'},
    ],
    pokemons: [
      {
        id: 10,
        location: [this.areas[0].locations[5], this.areas[0].locations[12], this.areas[0].locations[13]],
        specialCondition: {}
      },
      {
        id: 11,
        location: [this.areas[0].locations[13]],
        specialCondition: {}
      },
      {
        id: 12,
        location: [this.areas[0].locations[5], this.areas[0].locations[12], this.areas[0].locations[13], this.areas[0].locations[16]],
        specialCondition: {
          time: ['manana', 'mediodia', 'tarde'],
          weather: []
        }
      },
      {
        id: 13,
        location: [this.areas[0].locations[0], this.areas[0].locations[8], this.areas[0].locations[11], this.areas[0].locations[13]],
        specialCondition: {
          time: ['manana', 'mediodia', 'tarde'],
          weather: []
        }
      },
      {
        id: 14,
        location: [this.areas[0].locations[0]],
        specialCondition: {}
      },
      {
        id: 15,
        location: [this.areas[0].locations[3], this.areas[0].locations[5], this.areas[0].locations[7]],
        specialCondition: {}
      },
      {
        id: 16,
        location: [this.areas[0].locations[3], this.areas[0].locations[7], this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 17,
        location: [this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 18,
        location: [this.areas[0].locations[2], this.areas[0].locations[3], this.areas[0].locations[12]],
        specialCondition: {}
      },
      {
        id: 19,
        location: [this.areas[0].locations[2], this.areas[0].locations[3]],
        specialCondition:  {
          time: ['manana', 'mediodia', 'tarde'],
          weather: []
        }
      },
      {
        id: 20,
        location: [this.areas[0].locations[2], this.areas[0].locations[3], this.areas[0].locations[6]],
        specialCondition:  {
          time: ['manana', 'mediodia', 'tarde'],
          weather: []
        }
      },
      {
        id: 21,
        location: [this.areas[0].locations[2], this.areas[0].locations[3]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 22,
        location: [this.areas[0].locations[2], this.areas[0].locations[3], this.areas[0].locations[6]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 23,
        location: [this.areas[0].locations[12]],
        specialCondition:  {
          time: [],
          weather: ['clear', 'cloudy', 'sunny']
        }
      },
      {
        id: 24,
        location: [this.areas[0].locations[12]],
        specialCondition:  {
          time: [],
          weather: ['clear', 'cloudy', 'sunny']
        }
      },
      {
        id: 25,
        location: [this.areas[0].locations[12]],
        specialCondition:  {}
      },
      {
        id: 26,
        location: [],
        specialCondition: []
      },
      {
        id: 27,
        location: [],
        specialCondition: []
      },
      {
        id: 28,
        location: [],
        specialCondition: []
      },
      {
        id: 29,
        location: [],
        specialCondition: []
      },
      {
        id: 30,
        location: [],
        specialCondition: []
      },
      {
        id: 31,
        location: [],
        specialCondition: []
      },
      {
        id: 32,
        location: [],
        specialCondition: []
      },
      {
        id: 33,
        location: [],
        specialCondition: []
      },
      {
        id: 34,
        location: [this.areas[0].locations[0], this.areas[0].locations[2], this.areas[0].locations[7], this.areas[0].locations[15]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 35,
        location: [this.areas[0].locations[7]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 36,
        location: [],
        specialCondition: []
      },
      {
        id: 37,
        location: [this.areas[0].locations[3], this.areas[0].locations[5], this.areas[0].locations[8], this.areas[0].locations[12]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 38,
        location: [this.areas[0].locations[8], this.areas[0].locations[11]],
        specialCondition:  {
          time: ['noche'],
          weather: []
        }
      },
      {
        id: 39,
        location: [this.areas[0].locations[0], this.areas[0].locations[15], this.areas[0].locations[16]],
        specialCondition: {}
      },
      {
        id: 40,
        location: [this.areas[0].locations[0]],
        specialCondition: {}
      },
      {
        id: 41,
        location: [this.areas[0].locations[12], this.areas[0].locations[14], this.areas[0].locations[16]],
        specialCondition: {}
      },
      {
        id: 42,
        location: [this.areas[0].locations[14]],
        specialCondition: {}
      },
      {
        id: 43,
        location: [this.areas[0].locations[0], this.areas[0].locations[6], this.areas[0].locations[10], this.areas[0].locations[15]],
        specialCondition: {}
      },
      {
        id: 44,
        location: [this.areas[0].locations[6], this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 45,
        location: [this.areas[0].locations[6]],
        specialCondition: {}
      },
      {
        id: 46,
        location: [this.areas[0].locations[7], this.areas[0].locations[10], this.areas[0].locations[14]],
        specialCondition: {}
      },
      {
        id: 47,
        location: [this.areas[0].locations[7], this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 48,
        location: [],
        specialCondition: []
      },
      {
        id: 49,
        location: [this.areas[0].locations[10]],
        specialCondition: {}
      },
      {
        id: 50,
        location: [],
        specialCondition: []
      },
      {
        id: 51,
        location: [this.areas[0].locations[10]],
        specialCondition: {}
      },
      {
        id: 52,
        location: [this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 53,
        location: [this.areas[0].locations[0]],
        specialCondition: {}
      },
      {
        id: 54,
        location: [this.areas[0].locations[0]],
        specialCondition: {}
      },
      {
        id: 55,
        location: [this.areas[0].locations[0], this.areas[0].locations[3]],
        specialCondition: {}
      },
      {
        id: 56,
        location: [this.areas[0].locations[0]],
        specialCondition: {}
      },
      {
        id: 57,
        location: [],
        specialCondition: []
      },
      {
        id: 58,
        location: [this.areas[0].locations[11], this.areas[0].locations[16]],
        specialCondition: {}
      },
      {
        id: 59,
        location: [this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 60,
        location: [this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 61,
        location: [this.areas[0].locations[8], this.areas[0].locations[10]],
        specialCondition: {}
      },
      {
        id: 62,
        location: [this.areas[0].locations[8]],
        specialCondition: {}
      },
      {
        id: 63,
        location: [this.areas[0].locations[8]],
        specialCondition: {}
      },
      {
        id: 64,
        location: [this.areas[0].locations[2]],
        specialCondition: {}
      },
      {
        id: 65,
        location: [this.areas[0].locations[2]],
        specialCondition: {}
      },
      {
        id: 66,
        location: [this.areas[0].locations[2]],
        specialCondition: {}
      },
      {
        id: 67,
        location: [this.areas[0].locations[2]],
        specialCondition: {}
      },
      {
        id: 68,
        location: [this.areas[0].locations[2]],
        specialCondition: {}
      },
      {
        id: 69,
        location: [],
        specialCondition: []
      },
      {
        id: 70,
        location: [this.areas[0].locations[2], this.areas[0].locations[6], this.areas[0].locations[8]],
        specialCondition: {}
      },
      {
        id: 71,
        location: [],
        specialCondition: []
      },
      {
        id: 72,
        location: [this.areas[0].locations[1]],
        specialCondition: {}
      },
      {
        id: 73,
        location: [],
        specialCondition: []
      },
      {
        id: 74,
        location: [],
        specialCondition: []
      },
      {
        id: 75,
        location: [this.areas[0].locations[6]],
        specialCondition:  {
          time: ['manana', 'mediodia', 'tarde'],
          weather: []
        }
      },
      {
        id: 76,
        location: [this.areas[0].locations[11], this.areas[0].locations[12]],
        specialCondition: {}
      },
      {
        id: 77,
        location: [this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 78,
        location: [this.areas[0].locations[8]],
        specialCondition: {}
      },
      {
        id: 79,
        location: [],
        specialCondition: []
      },
      {
        id: 80,
        location: [this.areas[0].locations[4], this.areas[0].locations[9]],
        specialCondition: {}
      },
      {
        id: 81,
        location: [this.areas[0].locations[4], this.areas[0].locations[9]],
        specialCondition: {}
      },
      {
        id: 82,
        location: [this.areas[0].locations[8], this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 83,
        location: [this.areas[0].locations[8], this.areas[0].locations[11]],
        specialCondition: {}
      },
      {
        id: 86,
        location: [this.areas[0].locations[4], this.areas[0].locations[7]],
        specialCondition: {}
      },
      {
        id: 87,
        location: [this.areas[0].locations[4]],
        specialCondition: {}
      },
      {
        id: 88,
        location: [this.areas[0].locations[4]],
        specialCondition: {}
      },
      {
        id: 127,
        location: [],
        specialCondition: []
      },
      {
        id: 128,
        location: [],
        specialCondition: []
      },
      {
        id: 129,
        location: [this.areas[0].locations[9]],
        specialCondition: {}
      },
      {
        id: 154,
        location: [this.areas[0].locations[4], this.areas[0].locations[7]],
        specialCondition: {}
      },
      {
        id: 155,
        location: [this.areas[0].locations[4]],
        specialCondition: {}
      },
      {
        id: 156,
        location: [],
        specialCondition: []
      },
    ]
  },
  {id: 1, name: 'Pantanal Carmesí'},
  {id: 2, name: 'Costa Cobalto'},
  {id: 3, name: 'Ladera Corona'},
  {id: 4, name: 'Tundra Alba'},
]

const todoPokedex = [
  // pokemon ajenos
  {
    id: 0,
    name: 'Ejemplares capturados',
  },
  {
    id: 0,
    name: 'Ejemplares capturados durante el día',
  },
  {
    id: 0,
    name: 'Capturados durante la noche',
  },
  {
    id: 1,
    name: 'Alfa capturado',
  },
  {
    id: 2,
    name: 'Derrotados',
  },
  {
    id: 3,
    name: 'Derrotado tipo Lucha',
  },
  {
    id: 4,
    name: 'Derrotado tipo Siniestro',
  },
  //tus pokemons
  {
    id: 5,
    name: 'Uso Recuperación',
  },
  {
    id: 5,
    name: 'Uso Psíquico',
  },
  {
    id: 6,
    name: 'Uso Cola Férrea',
  },
  {
    id: 6,
    name: 'Estilo rápido',
  },
  {
    id: 6,
    name: 'Estilo fuerte',
  },
  {
    id: 6,
    name: 'Saliendo árboles',
  },
]
