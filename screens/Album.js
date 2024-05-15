import React from 'react';
import './Album.css';

const images = [
  'childrenDrawing2.jpg',
  'childrenDrawing.webp',
  'my-drawing.png',
  'my-drawing (1).png',
  'my-drawing (2).png',
  'my-drawing (3).png',
  'my-drawing (5).png',
  'my-drawing (6).png',
];

const AlbumPage = () => {
  return (
    <div className="album-page">
      <header className="album-header">
        <div className="inner-header">
          <div className="home-button">
          <button onClick={() => alert('Home')} style={{ background: 'none', border: 'none' }}>
          <img src="Gluki.png" alt="Home" style={{ width: '50px', height: '50px' }} />
        </button>          </div>
          <div className="score">
            <img src="/assets/levelNscore.png" alt="levelNscore" style={{ width: '120px', height: '50px' }} />
          </div>
        </div>
        <h1 className="just-another-hand" style={{
          backgroundColor: '#9DD0DD',
          color: 'black',
          width: '90%',
          fontSize: '10vw',
          textAlign: 'center',
          padding: '10px 20px',
          borderRadius: '20px',
          margin: '20px auto',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}>T1D  &  Me</h1>
      </header>

      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={`assets/AlbumPhoto/${image}`} alt={`Album ${index + 1}`}  className='album-image'/>
          </div>
        ))}
      </div>

      <footer className="album-footer">
        <div className="footer-content">
          <p>© 2024 T1D & Me. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AlbumPage;
