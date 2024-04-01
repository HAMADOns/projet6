import * as React from "react";
import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header"></div>
        <div className="content">
          <div className="bloc">
            <img
              src="../public/etoile.png"
              alt="Description de l'image"
              style={{
                width: "40px",
                float: "left",
                marginRight: "10px",
                marginLeft: "10px",
                marginTop: "25px",
              }}
            />
            <h1
              style={{ color: "purple", textAlign: "left", marginLeft: "30px" }}
            >
              FAQ
            </h1>
            <ul>
              <li
                style={{
                  color: "purple",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                Pourquoi on choisit React ?{" "}
                <ul>
                  <li>Virtual DOM et rendu efficace</li>
                  <li>Composants réutilisables et maintenables</li>
                  <li>Écosystème dynamique et communauté active</li>
                </ul>
              </li>
              <li
                style={{
                  color: "purple",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                Pourquoi on choisit React ?{" "}
                <ul>
                  <li>Virtual DOM et rendu efficace</li>
                  <li>Composants réutilisables et maintenables</li>
                  <li>Écosystème dynamique et communauté active</li>
                </ul>
              </li>
              <li
                style={{
                  color: "purple",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                Pourquoi on choisit React ?{" "}
                <ul>
                  <li>Virtual DOM et rendu efficace</li>
                  <li>Composants réutilisables et maintenables</li>
                  <li>Écosystème dynamique et communauté active</li>
                </ul>
              </li>
              <li
                style={{
                  color: "purple",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                Pourquoi on choisit React ?{" "}
                <ul>
                  <li>Virtual DOM et rendu efficace</li>
                  <li>Composants réutilisables et maintenables</li>
                  <li>Écosystème dynamique et communauté active</li>
                </ul>
              </li>
              <li
                style={{
                  color: "purple",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                Pourquoi on choisit React ?{" "}
                <ul>
                  <li>Virtual DOM et rendu efficace</li>
                  <li>Composants réutilisables et maintenables</li>
                  <li>Écosystème dynamique et communauté active</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
