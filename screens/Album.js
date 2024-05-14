import React, { useState } from "react";
import Masonry from "react-responsive-masonry";

const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/2000/1500",
    "https://picsum.photos/1000/2000",
    "https://picsum.photos/1200/2000",
]

const ImageGallery = () => {

    const [data, setData] = useState({img: '', i:0})

    const viewImage = (img, i) =>{
        setData({img, i})
    }

    const doSomething = (action) => {
        let i = data.i;
        if (action === 'next') {
            setData({img: images[i + 1], i: i + 1})
        }
        if (action === 'previous') {
            setData({img: images[i - 1], i: i - 1})
        }
        if (!action) {
            setData({img: '', i: 0})
        }
        
    }
    return (
        <>
            

            {data.img &&
                    <div style = {{
                        width: '100%',
                        height: '100vh',
                        background: 'black', 
                        position: 'fixed',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}>
                    <button onClick = {() => doSomething()} style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
                    <button onClick = {() => doSomething('previous')}>{"<"}</button>
                    <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
                    <button onClick = {() => doSomething('next')}>{">"}</button>
                    </div>
                }
            <Masonry columnsCount={5} gutter="10px" style={{ paddingTop: "120px", background: "#00758f"}}>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                        alt=""
                        onClick={() => viewImage(image, i)}
                    />
                ))}
            </Masonry>
        </>
            
    );
};

export default ImageGallery;