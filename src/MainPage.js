import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './MainPage.css'
const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const QuoteText = searchParams.get('quote-text')
  const Name = searchParams.get('name')
  const Author = searchParams.get('author')
  const PhotoHeight = searchParams.get('photo-height')
  const PhotoWidth = searchParams.get('photo-width')
  const PhotoURL = searchParams.get('photo-url')

  return (
    <>
      <div className='container'>
        <img src='image.png' className='image1'></img>
        <img src='sotas.svg' className='image2'></img>
        <img src='image3.jpg' className='image3'></img>
        <div className='st0'></div>
        <div className='st1'></div>
        <div className='st2'></div>
        <div className='image1'></div>
        <div class='text'>
          <img src={PhotoURL} class='image'></img>
          <div className='NormalCharacterStyle'>{QuoteText}</div>
          <div className='NormalCharacterStyle1'>{Name}</div>
        </div>
      </div>
    </>
  )
}

export default MainPage
