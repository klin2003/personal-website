import { BsCollectionFill, BsFillInfoCircleFill, BsFillTelephoneFill, BsTools } from "react-icons/bs";

export default function NavBar(props: any) {
    return (
        <div className="navbar">
            <Logo width={props.width}/>
            <ToolBar />
        </div>
    );
};

function Logo(props: any) {
    return (
        <div className="flex items-center">
            <img className="navbar-logo" src="/korvue-3.svg" alt="logo"></img>
            <div className="navbar-title">{(props.width > 900) ? "Kelvin Lin" : "Kelvin"}</div>
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