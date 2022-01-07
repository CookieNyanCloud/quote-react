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

  const container = {
    height: `${PhotoHeight}px`,
    width: `${PhotoWidth}px`,
    backgroundImage: `url(${PhotoURL})`,
  }
  const NameW = 25

  const quoteTextfontSize = PhotoWidth / NameW
  const quoteText = {
    fontSize: `${quoteTextfontSize}px`,
  }

  return (
    <div className='container' style={container}>
      <div className='up'>
        <div className='logo'>
          <div className='sota'>SOTA</div>
          <div className='mini'>t.me/sotavision</div>
        </div>
      </div>
      <div className='quote'>
        <div className='l'></div>
        <div className='r'></div>
        <div className='text' style={quoteText}>
          <p>«{QuoteText}»</p>
        </div>
      </div>
      <div className='down'>
        <div className='name'>
          {Name}
          {Author?.length > 0 && <div className='author'>{Author}</div>}
        </div>
      </div>
    </div>
  )
}

export default MainPage
