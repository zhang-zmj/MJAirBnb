import mjRequest from '../request'

export function getHomeGoodPriceData() {
  return mjRequest.get({
    url: "/home/goodprice"
  })
}

