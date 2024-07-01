import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`



function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
        function fetchPhoto() {
          axios.get(URL)
          .then(res => {
            console.log(res.data)
            setApod(res.data)
          })
          .catch(err => {
            console.log(err.message)
          })
        }
        //fetchPhoto()
        setApod({
          "date": "2024-07-01",
          "explanation": "What's happened since the universe started? The time spiral shown here features a few notable highlights. At the spiral's center is the Big Bang, the place where time, as we know it, began about 13.8 billion years ago. Within a few billion years atoms formed, then stars formed from atoms, galaxies formed from stars and gas, our Sun formed, soon followed by our Earth, about 4.6 billion years ago.  Life on Earth begins about 3.8 billion years ago, followed by cells, then photosynthesis within a bi...",
          "hdurl": "https://apod.nasa.gov/apod/image/2407/TimeSpiral_Budassi_2500.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Time Spiral",
          "url": "https://apod.nasa.gov/apod/image/2407/TimeSpiral_Budassi_960.jpg"
        })
  }, [])
  
  if (!apod) return "Fetching Photo of the day..."
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
