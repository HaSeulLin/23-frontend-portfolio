import React from "react";
import about from "../scss/about.module.scss";

export default function About() {
  return (
    <div className={about["about-wrap"]}>
      <div className={about["about-content"]}>
        {/** about section1 - top */}
        <div>
          <div className={`${about["section"]} ${about["intro"]}`}>
            <div>
              <h1>함께 ㅁㅁ하는 개발자,</h1>
              <h1>전하슬린입니다.</h1>
              <p>열정적이고 열심히하고 끊임없이 노력하고 성실하고 어쩌고</p>
            </div>
            <div className={`${about["mychar"]}`}>
              <img src="" alt="" /> 나를 나타내는 그림
            </div>
          </div>
        </div>
        {/** about section1 END */}

        {/** about section2 - bottom */}
        <div>
          {/** about section2-1 */}
          <div className={`${about["section"]} ${about["b-sec1"]}`}>
            <div>skill</div>
            <div>education</div>
          </div>
          <div className={`${about["section"]} ${about["b-sec2"]}`}>
            <div>
              <h3>archieving</h3>
              <div>
                <a href="https://github.com/HaSeulLin?tab=repositories" target='_blank'  rel="noreferrer">GitHub</a>
              </div>
              <div>
                <a href="https://velog.io/@kkong__ssal" target='_blank'  rel="noreferrer">Velog</a>
              </div>
              <div>
                <a href="https://webdlin.notion.site/FRONT-END-JEON-HA-SEUL-LIN-b71dc39c38804c32a56bd10c1029db6e?pvs=4" target='_blank'  rel="noreferrer">notion</a>
              </div>
            </div>
            <div>contact
              <p>wjstiger@naver.com</p>
            </div>
          </div>
          {/** about section2-2 */}
          <div className={`${about["section"]} ${about["b-sec3"]}`}>
            <div>
              <img src="" alt="" />
              프로젝트, 내가 좋아하는 사진, 나를 나타내는 그림
            </div>
          </div>
          {/** about section2 END */}
        </div>

        {/** scroll popup */}
        <div className={`${about["down"]}`}>⬇</div>
      </div>
    </div>
  );
}
