import { Fade } from "react-awesome-reveal";
import PROJECTS from "../section02-projects/ProjectData";
import { BsArrowLeft, BsArrowRight, BsXCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Overlay(props: any) {
    const DATA = PROJECTS;
    const maxIndex = DATA[props.projectIndex - 1].images.length;

    const[playZoom, setPlayZoom] = useState(true);
    const[fromArrow, setFromArrow] = useState(false);

    const changeFocus = (inc: boolean) => {
        setFromArrow(true);

        if (inc)
            props.setFocus((props.focusState + 1) % maxIndex);
        else
            props.setFocus((props.focusState - 1 + maxIndex) % maxIndex);
    }

    useEffect(() => {
        const modal = document.getElementById('project-focus-img-modal');
        const modalImg = document.getElementById('project-focus-img') as HTMLImageElement;

        if (modal && modalImg) {
            setPlayZoom(!fromArrow);
            setFromArrow(false);

            if (props.focusState < 0)
                modal.style.display = 'none';
            else {
                modal.style.display = 'flex';
                modalImg.src = DATA[props.projectIndex - 1].images[props.focusState].default;
            }
        }
    }, [props.focusState]);

    return (
        <>
            <div id="project-focus-img-modal">
                <BsXCircleFill className="project-focus-img-modal-close" onClick={() => { props.setFocus(-1) }} />
                <div className="flex flex-row items-center">
                    <BsArrowLeft className="project-focus-img-arrow" onClick={() => changeFocus(false)} />
                    <Fade key={props.focusState} duration={1000}>
                        <img id="project-focus-img" className={`${playZoom ? 'zoom' : ''}`} />
                    </Fade>
                    <BsArrowRight className="project-focus-img-arrow" onClick={() => changeFocus(true)} />
                </div>
            </div>
        </>
    );
}