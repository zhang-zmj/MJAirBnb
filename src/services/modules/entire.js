import mjRequest from '..'

export function getEntireRoomList(offset = 0, size = 20) {
  return mjRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}