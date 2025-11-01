import React from "react";
console.log(import.meta.env.BASE_URL);

const Gallery = () => {
  const photos = [
  `${import.meta.env.BASE_URL}alpika1.jpeg`,
  `${import.meta.env.BASE_URL}alpika2.jpeg`,
  `${import.meta.env.BASE_URL}alpika3.jpeg`,
  `${import.meta.env.BASE_URL}alpika4.jpeg`,
  `${import.meta.env.BASE_URL}alpika5.jpeg`,
  `${import.meta.env.BASE_URL}alpika6.jpeg`,
  `${import.meta.env.BASE_URL}alpika7.jpg`,
  `${import.meta.env.BASE_URL}alpika8.jpg`,
  `${import.meta.env.BASE_URL}alpika9.jpg`,
  `${import.meta.env.BASE_URL}alpika10.jpg`,
];


  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-10">
        Gorgeous Lady 💖
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {photos.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Alpika ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
