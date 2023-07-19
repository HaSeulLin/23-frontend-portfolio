import React, { useEffect, useRef, useState } from "react";
import home from "../scss/home.module.scss";
import About from "./About";
import Stack from "./Stack";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
    const scrollRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = scrollRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 100vh

            if (deltaY > 0) {
                // 스크롤 내릴 때
                    scrollRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
                    behavior: "smooth",
                    });
                    setScrollIndex(scrollIndex+1); // dot
            } else {
                // 스크롤 올릴 때
                scrollRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) - 1),
                    behavior: "smooth",
                    });
                    setScrollIndex(scrollIndex-1); // dot
            }
        };
        const scrollRefCurrent = scrollRef.current;
        scrollRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            scrollRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, [scrollIndex]);

    return (
        <div ref={scrollRef} className={`${home["scroll-wrap"]}`}>
            
            <div className={home["scroll-section"]} id="#">
                <About />
            </div>

            <div className={home["scroll-section"]} id="#stack">
                <Stack />
            </div>

            <div className={home["scroll-section"]}>
                <Project />
            </div>

            <div className={home["scroll-section"]}>
                <Contact />
            </div>

        </div>
    );
}
