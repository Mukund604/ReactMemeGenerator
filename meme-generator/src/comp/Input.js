import Memes from './Memes'
import getMeme from './App';
import React from 'react'

export default function Input(){

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/25w3.jpg");
    const [memes, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/25w3.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(Memes)

    function getMeme(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const Url = memesArray[randomNumber].url;
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage : Url
        }))
    }
    return(
        <div className="InputMain">
            <div className="InputDiv">
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
            </div>
            <div className="MyButton">
                <button className="ButtonDiv" onClick={getMeme} type='submit'>Get new image 🏞️</button>
            </div>
            <img src={memes.randomImage}></img>
        </div>
    )
}