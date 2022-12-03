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


