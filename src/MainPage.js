import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './MainPage.css'
const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const QuoteText = searchParams.get('quote-text')
  const Name = searchParams.get('name')
  const PhotoHeight = searchParams.get('photo-height')
  const PhotoWidth = searchParams.get('photo-width')
  const PhotoURL = searchParams.get('photo-url')

  console.log(QuoteText, Name, PhotoHeight, PhotoWidth, PhotoURL)

  const container = {
    height: `${PhotoHeight}px`,
    width: `${PhotoWidth}px`,
    backgroundImage: `url(${PhotoURL})`,
  }
  const NameW = 25

  const sotafontSize = PhotoWidth / NameW
  const sotaletterSpacing = PhotoWidth / (NameW * 5)
  const sota = {
    fontSize: `${sotafontSize}px`,
    letterSpacing: `${sotaletterSpacing}px`,
  }

  const minifontSize = (PhotoWidth * 2) / (NameW * 4)
  const mini = {
    fontSize: `${minifontSize}px`,
  }

  const quoteTextfontSize = PhotoWidth / NameW
  const quoteText = {
    fontSize: `${quoteTextfontSize}px`,
  }

  const namefontSize = PhotoWidth / NameW
  const name = {
    fontSize: `${namefontSize}px`,
  }

  const newQ = `«${QuoteText}»`

  return (
    <div>
      <div className='container' style={container}>
        <div className='logo-all'>
          <div className='logo'>
            <div className='full'>
              <span className='sota' style={sota}>
                SOTA
              </span>
              <span className='mini' style={mini}>
                t.me/sotavision
              </span>
            </div>
          </div>
        </div>
        <div className='quote-text' style={quoteText}>
          <p>{newQ}</p>
        </div>
        <div className='name' style={name}>
          {Name}
        </div>
      </div>
    </div>
  )
}

export default MainPage
