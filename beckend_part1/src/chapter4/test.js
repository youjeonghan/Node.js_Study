function solution(arrayA, arrayB) {
  var answer = []
  setA = createSet(arrayA)
  setB = createSet(arrayB)
  answer.push(setA)
  answer.push(setB)
  answer.push(sum(setA, setB))
  answer.push(complement(setA, setB))
  answer.push(intersect(setA, setB))
  return answer
}

function sum(base, other) {
  let union = [...base]
  other.forEach(element => {
    if (!union.includes(element)) {
      union.push(element)
    }
  })
  sortAsc(union)
  return union
}

function complement(base, other) {
  let diffSet = [...base]
  other.forEach(element => {
    let index = diffSet.indexOf(element)
    if (index !== -1) {
      diffSet.splice(index, 1)
    }
  })
  return diffSet
}

function intersect(base, other) {
  let intersection = []
  base.forEach(element => {
    if (other.includes(element)) {
      intersection.push(element)
    }
  })
  return intersection
}

function createSet(array) {
  let set = []
  array.forEach(element => {
    if (!set.includes(element)) {
      set.push(element)
    }
  })
  sortAsc(set)
  return set
}

function sortAsc(set) {
  if (typeof set[0] === "string") {
    set.sort()
  } else {
    set.sort((o1, o2) => {
      return o1 - o2
    })
  }
}

function print(id, arrayA, arrayB) {
  console.log(`\nTestcase ${id} : `)
  console.log(solution(arrayA, arrayB))
}

let arrayA = [10, 2, 3, 2]
let arrayB = [1, 3]
print(1, arrayA, arrayB)
arrayA = [2, 3, 4, 3, 5]
arrayB = [1, 6, 7]
print(2, arrayA, arrayB)
arrayA = ["ac", "a", "bd", "ae", "ad", "cs"]
arrayB = ["ac", "ew", "ae", "bw", "cs", "cq"]
print(3, arrayA, arrayB)
