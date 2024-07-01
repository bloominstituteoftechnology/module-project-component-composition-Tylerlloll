import React from 'react'

export default function Figure({imageURL, caption}) {
    return (
      <figure>
            <img src={imageURL} />
            <figcaption>Nasa chosen picture for {caption}</figcaption>
          </figure>
  
    )
  }