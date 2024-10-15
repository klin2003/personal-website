import { BsBriefcaseFill, BsCollectionFill, BsFillInfoCircleFill, BsFillTelephoneFill, BsTools } from "react-icons/bs";

const NavBar = ({ }: {}) => {
    return (
        <div className="navbar">
            <Logo />
            <ToolBar />
        </div>
    );
};

function Logo() {
    return (
        <div className="flex items-center">
            <img className="navbar-logo" src="/korvue-3.svg" alt="logo"></img>
            <div className="navbar-title">Kelvin Lin</div>
        </div>
    );
}

function ToolBar() {
    return (
        <div className="navbar-toolbar">
            <a href="#about" className="navbar-tools">
                <BsFillInfoCircleFill className="navbar-tool-icon" />
                <span className="navbar-tool-label">About</span>
            </a>
            <a href="#projects" className="navbar-tools">
                <BsCollectionFill className="navbar-tool-icon" />
                <span className="navbar-tool-label">Projects</span>
            </a>
            <a href="#experiences" className="navbar-tools">
                <BsBriefcaseFill className="navbar-tool-icon" />
                <span className="navbar-tool-label">Experiences</span>
            </a>
            <a href="#tools" className="navbar-tools">
                <BsTools className="navbar-tool-icon" />
                <span className="navbar-tool-label">Tools</span>
            </a>
            <a href="#contact" className="navbar-tools">
                <BsFillTelephoneFill className="navbar-tool-icon" />
                <span className="navbar-tool-label">Contact</span>
            </a>
        </div>
    );
}

export default NavBar;