import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Wish from './components/Wish';
import Poems from './components/Poems';
import Games from './components/Games';
import AboutHer from './components/AboutHer';
import Bored from './components/Bored';
import Gallery from './components/Gallery';
import pop from './components/pop';


export default function App(){
  const [page, setPage] = useState('home');
  const [muted, setMuted] = useState(true);

  useEffect(()=>{ setMuted(true); },[]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastelpink via-white to-pastelgold p-6">
      <audio id="bg-audio" src="/public/audio/music.mp3" loop autoPlay muted={muted}></audio>
      <div className="fixed top-4 left-4 z-50">
        <button onClick={()=>{ setMuted(m=>!m); const a=document.getElementById('bg-audio'); a.muted = !a.muted; }} className="bg-white/80 p-2 rounded-full shadow">{muted? '🔇':'🔊'}</button>
      </div>
      <Sidebar setPage={setPage} />
      <div className="max-w-4xl mx-auto">
        {page==='home' && <Home setPage={setPage} />}
        {page==='wish' && <Wish setPage={setPage} />}
        {page==='poems' && <Poems />}
        {page==='games' && <Games />}
        {page==='about' && <AboutHer />}
        {page==='bored' && <Bored />}
        {page==='gallery' && <Gallery />}
      </div>
    </div>
  )
}
