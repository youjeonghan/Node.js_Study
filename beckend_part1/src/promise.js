// @ts-check

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, duration)
  })
}

sleep(1000)
  .then(v => {
    console.log(v)
    return sleep(1000)
  })
  .then(v => {
    console.log(v)
    return sleep(1000)
  })
