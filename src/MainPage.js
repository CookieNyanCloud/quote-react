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

  const to_inherit = {
    fontSize: `${quoteTextfontSize}px`,
  }

  const tv1 = `'. . . . .'
    '. . . author .'
    '. name name name .'`

  const tv2 = `'. . . . .'
    '. name name name .'
    '. . . author .'`

  const tamplate = Author ? tv2 : tv1

  const down_var = {
    gridTemplateAreas: tamplate,
    fontSize: `${quoteTextfontSize}px`,
  }

  return (
    <div className='container' style={container}>
      <div className='up' style={to_inherit}>
        <div className='logo'>
          <div className='sota'>SOTA</div>
          <div className='mini'>t.me/sotаproject</div>
        </div>
      </div>
      <div className='quote'>
        <div className='l'></div>
        <div className='text' style={quoteText}>
          <div className='ll'></div>
          <div className='c'>«{QuoteText}»</div>
          <div className='rr'></div>
        </div>
        <div className='r'></div>
      </div>
      <div className='down' style={(to_inherit, down_var)}>
        <div className='name'>— {Name}</div>
        {Author?.length > 0 && <div className='author'>{Author}</div>}
      </div>
      <script>let elem = document.querySelector('p')</script>
    </div>
  )
}

export default MainPage
