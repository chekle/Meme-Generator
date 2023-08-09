import "./Header.css";
const trollFace = "../src/assets/troll-face.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header--logo-title">
        <img src={trollFace} alt="Troll Face" />
        <p>Meme Generator</p>
      </div>
      <div className="header--course-title">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;