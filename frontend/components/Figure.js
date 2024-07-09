import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
    max-width: 300px;

figcaption {
  font-style: italic;
}

`

export default function Figure({imageURL, caption}) {
    return (
      <StyledFigure>
            <img src={imageURL} />
            <figcaption>Nasa chosen picture for {caption}</figcaption>
          </StyledFigure>
  
    )
  }