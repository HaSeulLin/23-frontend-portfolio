import React from "react";
import stack from "../scss/stack.module.scss";

import html from "../img/stack/html5.png";
import css from "../img/stack/css3.png";
import js from "../img/stack/js.png";
import sass from "../img/stack/sass.png";
import react from "../img/stack/react.png";
import redux from "../img/stack/redux.png";
import firebase from "../img/stack/firebase.png";
import figma from "../img/stack/figma.png";
import photoshop from "../img/stack/photoshop.png";
import git from "../img/stack/git.png";

export default function Stack() {
  const wid = 56;
  const hei = wid;

  return (
    <div className={stack["stack-wrap"]}>
      <h1>SKILL</h1>
      
      <div className={stack["stack-content"]}>
        {/** stack section1 - frontend */}
        <div className={`${stack["section"]}`}>
          <h2>FRONT-END</h2>
          <div>
            <ul className={`${stack["skill-icon"]}`}>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={html} alt="html5" width={wid} height={hei} />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>HTML5</h3>
                  <p>
                    HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능 HTML5, CSS3
                    웹표준문법에 맞춰 코드 작성 가능
                  </p>
                </div>
              </li>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={css} alt="css3" width={wid} height={hei} />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>CSS3</h3>
                  <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                </div>
              </li>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={js} alt="js" width={wid} height={hei} />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>JS</h3>
                  <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                </div>
              </li>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={sass} alt="sass" width={wid} height="auto" />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>SASS</h3>
                  <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                </div>
              </li>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={react} alt="react" width={wid} height={hei} />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>REACT</h3>
                  <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                </div>
              </li>
              <li>
                <div className={`${stack["skill-img"]}`}>
                  <img src={redux} alt="redux" width={wid} height={hei} />
                </div>
                <div className={`${stack["skill-explain"]}`}>
                  <h3>REDUX</h3>
                  <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/** stack section2 - etc */}
        <div>
          {/** stack section2-1 - backend */}
          <div className={`${stack["section"]} ${stack["backend"]}`}>
            <h2>BACK-END</h2>
            <div>
              <ul className={`${stack["skill-icon"]}`}>
                <li>
                  <div className={`${stack["skill-img"]}`}>
                    <img
                      src={firebase}
                      alt="firebase"
                      width="auto"
                      height={wid}
                    />
                  </div>
                  <div className={`${stack["skill-explain"]}`}>
                    <h3>HTML5</h3>
                    <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/** stack section2-2 - design */}
          <div className={`${stack["section"]} ${stack["tool"]}`}>
            <h2>TOOL</h2>
            <div>
              <ul className={`${stack["skill-icon"]}`}>
                <li>
                  <div className={`${stack["skill-img"]}`}>
                    <img src={figma} alt="figma" width="auto" height={wid} />
                  </div>
                  <div className={`${stack["skill-explain"]}`}>
                    <h3>Figma</h3>
                    <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                  </div>
                </li>
                <li>
                  <div className={`${stack["skill-img"]}`}>
                    <img
                      src={photoshop}
                      alt="photoshop"
                      width={wid}
                      height={hei}
                    />
                  </div>
                  <div className={`${stack["skill-explain"]}`}>
                    <h3>Photoshop</h3>
                    <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                  </div>
                </li>
                <li>
                  <div className={`${stack["skill-img"]}`}>
                    <img src={git} alt="git" width={wid} height={hei} />
                  </div>
                  <div className={`${stack["skill-explain"]}`}>
                    <h3>Git</h3>
                    <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                  </div>
                </li>
                <li>
                  <div className={`${stack["skill-img"]}`}>
                    <img src={sass} alt="sass" width={wid} height={hei} />
                  </div>
                  <div className={`${stack["skill-explain"]}`}>
                    <h3>HTML5</h3>
                    <p>HTML5, CSS3 웹표준문법에 맞춰 코드 작성 가능</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
