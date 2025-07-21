import React from "react";
import "../styles/Newslider.css";

const images = [
  {
    url: "https://i.pinimg.com/736x/41/fa/a3/41faa3508a7b1210a03d8b6265ed7848.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
  {
    url: "https://i.pinimg.com/736x/fd/96/24/fd9624ae8ebf666a6661ff666fa06c45.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
  },
  {
    url: "https://i.pinimg.com/736x/15/72/ff/1572ff60f781820b9cdb5b333f003304.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/861/861060.png",
  },
  {
    url: "https://i.pinimg.com/736x/a1/30/75/a1307526f9ea584b11e128b823eb5cc2.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    url: "https://i.pinimg.com/736x/3d/44/72/3d4472acef736917140c0d539da45680.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/69/69906.png",
  },
];

const NewImgSlider = () => {
  return (
    <div className="slider-wrapper">
      <h2 className="title">CREATIVE IMAGE SLIDERS</h2>
      <div className="slider-container">
        {images.map((item, index) => (
          <div
            className="slider-item"
            key={index}
            style={{ backgroundImage: `url(${item.url})` }}
          >
          </div>
        ))}
      </div>
      <p className="subtitle">A PRESENTATION BY SLIDE MASTER</p>
    </div>
  );
};

export default NewImgSlider;
