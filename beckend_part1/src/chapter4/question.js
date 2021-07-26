const people = [
  {
    city: "서울",
    age: 41,
    pet: ["cat", "dog"]
  },
  {
    city: "프랑스",
    age: 1
  },
  {
    city: "경주",
    age: 88,
    pet: ["cat", "dog"]
  },
  {
    city: "부산",
    age: 12
  },
  {
    city: "서울",
    age: 29,
    pet: "dog"
  }
]

function solveA() {
  const allCities = people.filter(({ age }) => age < 30).map(({ city }) => city)
  console.log(allCities)
}

solveA()

/**
 * {
 *    "서울":{
 *      "dog":2,
 *      "cat":1,
 *    }
 * }
 * }
 */

/** @typedef {Object.<string, Object.<string, number>>} PetsOfCities */

function solveB() {
  /** @type {PetsOfCities} */
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person

    if (petOrPets) {
      const petsOfCity = result[city] || {}

      if (typeof petOrPets === "string") {
        const pet = petOrPets
        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = origNumPetsOfCity + 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }
      result[city] = petsOfCity
    }
  }
  return result
}

/**
 *  [
 *    ["서울", "cat"]
 *    ["서울", "dog"]
 *  ]
 *
 */

function solveBMordern() {
  return people
    .map(({ pet: petOrPets, city }) => {
      const pets =
        (typeof petOrPets === "string" ? [petOrPets] : petOrPets) || []
      return {
        city,
        pets
      }
    })
    .flatMap(({ city, pets }) => pets.map(pet => [city, pet]))
    .reduce((/** @type {PetsOfCities} */ result, [city, pet]) => {
      if (!city || !pet) {
        return result
      }

      return {
        ...result,
        [city]: {
          ...result[city],
          [pet]: (result[city]?.[pet] || 0) + 1
        }
      }
    }, {})
}

console.log(solveB())
console.log(solveBMordern())
