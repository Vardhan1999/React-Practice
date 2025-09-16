import React, { useState } from "react";

export default function App() {
  const images = [
    { id: 1, thumb: "https://picsum.photos/id/101/100/75", large: "https://picsum.photos/id/101/600/400" },
    { id: 2, thumb: "https://picsum.photos/id/102/100/75", large: "https://picsum.photos/id/102/600/400" },
    { id: 3, thumb: "https://picsum.photos/id/103/100/75", large: "https://picsum.photos/id/103/600/400" },
  ];

  const [active, setActive] = useState(images[0].large);

  return (
    <div>
      <img src={active} alt="Large" />

      <div>
        {images.map((img) => (
          <img key={img.id} src={img.thumb} alt={`Thunmbnail ${img.id}`} onClick={() => setActive(img.large)} />
        ))}
      </div>
    </div>
  )
}