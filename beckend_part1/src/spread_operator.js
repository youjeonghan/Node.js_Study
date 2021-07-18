const ary = [1, 2, 3, 4, 5]

const [head, ...rest] = ary

console.log(head, rest)

const personalData = {
  email: "yjh9360@naver.com",
  password: "@@@@"
}

const publicData = {
  nickname: "foo"
}

const overrides = {
  email: "fff@fff.com"
}

const shouldOverrides = true

const user = {
  ...personalData,
  ...publicData,
  ...(shouldOverrides ? overrides : null)
}

console.log(user)
