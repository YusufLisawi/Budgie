// Sidebar.jsx
import React, { useState, useEffect } from "react";
import ControlSidebar from "../../assets/ControlSidebar.svg";
import Logo from "./Logo";
import Budget from "./Budget";
import Navs from "./Navs";
import { styleSidebar, styleToggler } from "../../styles/twStyles";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768 && open) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    const toggleSidebar = () => {
        if (isMobile) {
            setOpen(!open);
        } else {
            setOpen(!open);
        }
    };

    return (
        <div
            className={`${open ? "w-60" : "w-25"} ${styleSidebar} sidebar`}
            onDoubleClick={toggleSidebar}
            onClick={isMobile ? toggleSidebar : undefined}
        >
            <div className="head">
                <img
                    src={ControlSidebar}
                    alt="SidebarToggler"
                    className={`${!open && "rotate-180"} ${styleToggler}`}
                    onClick={toggleSidebar}
                />
                <Logo isOpen={open} />
                <Navs isOpen={open} />
            </div>
            <div className="foot">
                <Budget isOpen={open} />
            </div>
        </div>
    );
}
