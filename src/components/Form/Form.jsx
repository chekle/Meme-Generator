import React from "react";
import "./Form.css";
import memesData from "../../memesdata"

const Form = () => {

  //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        randomImage: url
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input"/>
        <input type="text" placeholder="Bottom Text" className="form--input"/>
        <button type="submit" className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} alt="Meme" />
    </main>
  );
}

export default Form;