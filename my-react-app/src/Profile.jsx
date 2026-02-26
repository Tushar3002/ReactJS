import React, { useState } from "react";



// ONLY INLINE CSS is USed

function Profile() {
  const [styleCard, setStyleCard] = useState({
    border: "3px solid ",
    backgroundColor: "lightgray",
    height: "350px",
    width: "250px",
    margin: "20px",
    padding: "5px",
    boxShadow: "10px 10px 8px #888888",
  });
  const [grid,setGrid]=useState(true)
  const updateTheme = (bgColor, textColor) => {
    setStyleCard({ ...styleCard, backgroundColor: bgColor, color: textColor });
  };
  return (
    <>
      <button onClick={() => updateTheme("lightgreen", "yellow")}>
        Funky BG
      </button>
      <button onClick={() => updateTheme("#212529", "#ffffff")}>
        Dark Mode
      </button>

      <button onClick={() => updateTheme("#1a1a2e", "#e94560")}>
        Midnight
      </button>

      <button onClick={() => updateTheme("#2c3e50", "#ecf0f1")}>Navy</button>
      <button onClick={() => updateTheme("#f8f9fa", "#212529")}>
        Light Gray
      </button>

      <button onClick={() => updateTheme("#e3f2fd", "#0d47a1")}>
        Soft Blue
      </button>

      <button onClick={() => updateTheme("#e8f5e9", "#1b5e20")}>
        Mint Green
      </button>
      <button onClick={() => updateTheme("black", "yellow")}>
        Classic Hacker
      </button>

      <button onClick={() => updateTheme("#ff4081", "white")}>Pink Pop</button>

      <button onClick={() => updateTheme("purple", "cyan")}>Neon</button>

      <button onClick={() => updateTheme("orange", "blue")}>Retro</button>

      <button onClick={()=>setGrid(!grid)}>Toggle Display</button>
      <div style={{ display: grid?"flex":"block", flexWrap: "wrap" }}>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
        <div style={styleCard}>
          <img
            style={{ width: "200px", height: "200px", padding: "20px" }}
            src="https://laser360clinic.com/wp-content/uploads/2020/08/user-image.jpg"
            alt=""
          />
          <h2>Name : Tushar Jana </h2>
          <h3>Age : 22</h3>
        </div>
      </div>
    </>
  );
}

export default Profile;
