import { BsCodeSlash, BsCollectionFill, BsFillInfoCircleFill, BsTools } from "react-icons/bs";

export default function NavBar() {
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
            <BsCodeSlash className="navbar-logo" />
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
            <a href="#tools" className="navbar-tools mr-4">
                <BsTools className="navbar-tool-icon" />
                <span className="navbar-tool-label">Tools</span>
            </a>
        </div>
    );
}