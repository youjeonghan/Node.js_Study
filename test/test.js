const axios = require("axios")
const cheerio = require("cheerio")
const log = console.log
const url =
  "https://www.google.co.kr/search?q=apple&sxsrf=ALeKk00XKLcFc2_jUODLIsIM0r4JK_21hQ%3A1626837918809&source=hp&ei=npP3YJSaL9XK-Qa3urjYDg&iflsig=AINFCbYAAAAAYPehroJrUH9V4lVxx4xpuZgf3MX0ivIX&oq=apple&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAELEDMgQIABBDMggIABCxAxCDATIECAAQQzIFCAAQsQMyCAgAELEDEIMBMgIIADIICAAQsQMQgwEyBQgAELEDMgUIABCxAzoHCCMQ6gIQJzoECCMQJzoHCAAQsQMQQ1C-CVj4E2DnFWgCcAB4AIABqAGIAc0HkgEDMC42mAEAoAEBqgEHZ3dzLXdperABCg&sclient=gws-wiz&ved=0ahUKEwiU4YXCm_PxAhVVZd4KHTcdDusQ4dUDCAc&uact=51212"

const getHtml = async () => {
  try {
    return await axios.get(url)
  } catch (error) {
    console.error(error)
  }
}

getHtml()
