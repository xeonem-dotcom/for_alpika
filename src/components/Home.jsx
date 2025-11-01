import React from 'react';
export default function Home({ setPage }){
  return (
    <div className="bg-white/90 p-8 rounded-2xl shadow-xl mt-8">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-extrabold text-pink-600">HAPPY BIRTHDAY ALPIKA</h1>
          <p className="mt-3 text-pink-700">This one, For the prettiest girl i know...</p>
          <div className="mt-6"><button onClick={()=>setPage('wish')} className="px-6 py-3 rounded-full bg-pink-400 text-white">Click me 💗</button></div>
        </div>
        <div className="mt-6 md:mt-0 grid grid-cols-3 gap-2">
          <img src="/public/images/alpika1.jpeg" className="w-40 h-28 object-cover rounded-lg" alt="1"/>
          <img src="/public/images/alpika2.jpeg" className="w-40 h-28 object-cover rounded-lg" alt="1"/>
          <img src="/public/images/alpika3jpeg" className="w-40 h-28 object-cover rounded-lg" alt="1"/>
        </div>
      </div>
    </div>
  );
}
