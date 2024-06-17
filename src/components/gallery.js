import React, { useEffect, useState } from 'react';
import './gallery.css'; // Import your CSS file for styling
import Logos from '../assets/Screenshot 2024-06-16 162943.png'; // Assuming you're importing an image asset

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = [
        {
          id: 1,
          url: 'https://picsum.photos/id/1/300/200',
          title: 'Image 1'
        },
        {
          id: 2,
          url: 'https://picsum.photos/id/2/300/200',
          title: 'Image 2'
        },
        {
          id: 3,
          url: 'https://picsum.photos/id/3/300/200',
          title: 'Image 3'
        },
        {
          id: 4,
          url: 'https://picsum.photos/id/4/300/200',
          title: 'Image 4'
        },
        {
          id: 5,
          url: 'https://picsum.photos/id/5/300/200',
          title: 'Image 5'
        }
      ];
      setImages(data);
    };

    fetchImages();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <h1 className='title'>Image Gallery App</h1>

      {images.length > 0 ? (
        <div className='imagegrid'>
          {images.map((image) => (
            <div className='imagecard' key={image.id}>
              <img src={image.url} alt={image.title} />

              <div className='imagedetails'>
                <h3>{image.title}</h3>
                <button onClick={() => handleDelete(image.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p><h1>IMAGES NOT FOUND, BYE BROTHER!!!!!!!!!!!!!!!!!!1</h1></p>
      )}
    </div>
  );
}

export default Gallery;
