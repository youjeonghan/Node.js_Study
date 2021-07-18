const people = [
  {
    city: "서울",
    age: 41
  },
  {
    city: "프랑스",
    age: 1
  },
  {
    city: "경주",
    age: 88
  },
  {
    city: "부산",
    age: 12
  },
  {
    city: "서울",
    age: 29
  }
]

function solveA() {
  const allCities = people.filter(({ age }) => age < 30).map(({ city }) => city)
  console.log(allCities)
}

solveA()
