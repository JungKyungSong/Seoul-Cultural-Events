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
                    <p><Link className="toggle_link" to="/">Home</Link></p>
                    <p><Link className="toggle_link" to="/Recommend">Recommend</Link></p>
                    <p><Link className="toggle_link" to="/Congestion">Conjestion</Link></p>
                </p>
            </nav>
        </>
    );
};