import React, { useState } from 'react';
export default function Sidebar({ setPage }){
  const [open, setOpen] = useState(false);
  const pages = [['HOME','home'],['WISH','wish'],['GAMES','games'],['POEMS','poems'],['ABOUT HER','about'],['BORED?','bored'],['GALLERY','gallery']];
  return (<>
    <div className="fixed bottom-6 left-6 z-50">
      <button onClick={()=>setOpen(o=>!o)} className="w-12 h-12 rounded-full bg-pink-400 shadow-lg text-white">{open? '✕':'☰'}</button>
    </div>
    {open && <aside className="fixed left-6 bottom-20 bg-white p-4 rounded-2xl shadow-lg z-50">
      {pages.map(p=> (<div key={p[1]} className="mb-2"><button onClick={()=>{ setPage(p[1]); setOpen(false); }} className="text-pink-600 font-semibold">{p[0]}</button></div>))}
      <div className="text-xs text-gray-400 mt-2">made with love, by pranav</div>
    </aside>}
  </>)
}
