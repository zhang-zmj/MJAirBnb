import React, { memo, useEffect, useState } from 'react'
import mjRequest from '@/services'

const index = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    mjRequest.get({ url: '/home/highscore' }).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore?.list?.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default index
