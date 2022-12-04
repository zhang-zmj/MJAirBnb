import mjRequest from '../request'

export function getHomeGoodPriceData() {
  return mjRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return mjRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscounntData() {
  return mjRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return mjRequest.get({
    url: "/home/hotrecommenddest"
  })
}
