import { Fade } from "react-awesome-reveal";
import PROJECTS from "../section02-projects/ProjectData";

export default function Overlay(props: any) {
    const DATA = PROJECTS;

    return (
        <Fade className="fixed inset-0 w-full h-full flex items-center justify-center">
            <div className='full-screen-overlay' onClick={() => props.setFocus(-1)}/>
            <img src={DATA[props.projectIndex - 1].images[props.focusState].default} className="project-focus-img" onClick={() => props.setFocus(-1)}/>
        </Fade>
    );
}