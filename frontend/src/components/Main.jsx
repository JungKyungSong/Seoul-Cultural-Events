import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const Main = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () =>{
            if(window.innerWidth < 600 && isNavOpen){
                setIsNavOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isNavOpen]);
    return(
        <>
            <button
            className="sidebar-toggle"
            onClick={()=> setIsNavOpen(!isNavOpen)}
            >
                <span class = "material-symbols-outlined">
                    {isNavOpen? "toggle_on": "toggle_off"}
                </span>
            </button>
            <nav className={`nav ${isNavOpen ? "nav-open": "nav-closed"}`}>
                <div className="logo">Art Venture Seoul</div>
                <p>
                    <hr/>
                    <p className="toggle_links"><Link className="toggle_link" to="/">Home</Link></p>
                    <hr/>
                    <p className="toggle_links"><Link className="toggle_link" to="/Recommend">행사 정보</Link></p>
                    <hr/>
                    <p className="toggle_links"><Link className="toggle_link" to="/Congestion">실시간 혼잡도</Link></p>
                    <hr/>
                </p>
            </nav>
        </>
    );
};