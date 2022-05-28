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

  const col = QuoteText.length
  let dop = 0
  if (col < 40) {
    dop = (40 - col) / 2 + 3
  }

  let toch = ''
  for (let i = 0; i < dop; i++) {
    toch += '.'
  }

  const pseudo = {
    color: 'transparent',
  }

  return (
    <div className='container' style={container}>
      <div className='up' style={to_inherit}>
        <div className='logo'>
          <div className='sota'> S⚙️TA</div>
          <div className='mini'>t.me/sotаproject</div>
        </div>
      </div>
      <div className='quote'>
        <div className='l'></div>
        <div className='r'></div>
        <div className='text' style={quoteText}>
          {dop !== 0 ? <p style={pseudo}>{toch}</p> : <></>}
          <p>«{QuoteText}»</p>
          {dop !== 0 ? <p style={pseudo}>{toch}</p> : <></>}
        </div>
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
