//@ts-check

require("core-js")

const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()

console.log(flattendArray)

const original = "abcabc123"
const changed = original.replaceAll("abc", "123")

console.log(changed)

function sleep(duration) {
  return new Promise(resolve => {
    console.log("sleep start")
    setTimeout(() => {
      console.log("sleepdone", duration)
      resolve(duration)
    }, duration)
  })
}

function alwaysReject() {
  return new Promise((resolve, reject) => {
    reject()
  })
}

// Promise.all([sleep(1000), sleep(1500), sleep(2000), alwaysReject()]).then(
//   value => {
//     console.log(value)
//     console.log("finish")
//   }
// )

Promise.allSettled([
  sleep(1000),
  sleep(1500),
  sleep(2000),
  alwaysReject()
]).then(value => {
  console.log(value)
  console.log("finish")
})
