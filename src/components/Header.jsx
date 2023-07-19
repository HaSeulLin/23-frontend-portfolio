import React, { useState } from "react";
import header from "../scss/header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
    const [onNav, setOnNav] = useState("off");

    const handleMouseEnter = () => {
        setOnNav("on");
    };
    const handleMouseLeave = () => {
        setOnNav("off");
    };
    return (
        <div className={`${header["header"]}`}>
            <div className={`${header["container"]}`}>
                {/** header left - profile */}
                <div className={`${header["section"]} ${header["profile"]}`}>
                    <div className={`${header["prof-img"]}`}>
                        <img
                            src={`${process.env.PUBLIC_URL}/img/test_img1.jpg`}
                            alt="profile"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className={`${header["prof-text"]}`}>
                        <h5>Jeon Ha Seul Lin</h5>
                        <h6>Front-end Developer</h6>
                    </div>
                </div>

                {/** header mid - menu */}
                <div className={`${header["section"]} ${header["menu"]}`}>
                    <div className={`${header["menu-list"]}`}>
                        <Link
                            to="/"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`${header[onNav]}`}
                        >
                            About
                        </Link>
                        <Link to="/" className={`${header[onNav]}`}>
                            Stack
                        </Link>
                        <Link to="/" className={`${header[onNav]}`}>
                            Project
                        </Link>
                        <Link to="/" className={`${header[onNav]}`}>
                            Contact
                        </Link>
                    </div>
                    <div className={`${header["menu-burger"]}`}>
                        <div>-</div>
                    </div>
                </div>

                {/** header right - update */}
                <div className={`${header["update"]}`}>last update: 23.07.18</div>
            </div>
        </div>
    );
}
