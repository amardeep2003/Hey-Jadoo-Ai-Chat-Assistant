import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import IntroScreen from './components/IntroScreen'
import jadooImg from './assets/jadoo.png'


function App() {

  const [ready, setReady] = useState(false);

  return (
    // <div className='app'>
    //   <header className='app__header'>
    //     <div className="left">
    //       <div className="logo">👽</div>
    //       <h1 className="title">Hey Jadoo</h1>
    //     </div>

    //     <p className="subtitle">
    //       ✨ Jadoo sun raha hai... pucho jo bhi mann mein ho!
    //     </p>
    //   </header>
    //   <Chat />
    // </div>
    <>
      {!ready && <IntroScreen onDone={() => setReady(true)} />}

      <div className='app' style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.6s ease'
      }}>
        <header className='app__header'>
          <div className="logo">
            <img src={jadooImg} alt="Jadoo" style={{ width: 55, height: 55, objectFit: 'contain' }} />

          </div>
          <div className='titles'>
            <h1>HEY JADOO</h1>
          </div>

          <div className='header__right'>
            <p>INTERSTELLAR LINK ACTIVE | ENTER TO SEND | SHIFT+ENTER = NEWLINE</p>
          </div>
        </header>
        <Chat />
      </div>
    </>
  )
}

export default App
