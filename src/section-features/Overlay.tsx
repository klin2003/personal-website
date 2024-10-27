import { Fade } from "react-awesome-reveal";
import PROJECTS from "../section02-projects/ProjectData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

export default function Overlay(props: any) {
    const DATA = PROJECTS;

    const [switchCooldown, toggleSwitchCooldown] = useState(false);

    const changeFocus = (inc: boolean) => {
        if (switchCooldown)
            return;

        const lastIndex = DATA[props.projectIndex - 1].images.length - 1;

        if (inc) {
            props.setFocus((props.focusState == lastIndex) ? 0 : (props.focusState + 1))
        } else {
            props.setFocus((props.focusState == 0) ? lastIndex : (props.focusState - 1))
        }

        toggleSwitchCooldown(true);
        setTimeout(() => {
            toggleSwitchCooldown(false);
        }, 500);
    }

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
            <Fade className="flex items-center justify-center">
                <div className="absolute inset-0 z-10 full-screen-overlay" />

                <div className="flex flex-row items-center">
                    <div>
                        <BsArrowLeft className="full-screen-overlay-arrows" size={36} color="white" onClick={() => changeFocus(false)} />
                    </div>
                    <div className="flex flex-col items-center">
                        <Fade key={props.focusState}>
                            <img src={DATA[props.projectIndex - 1].images[props.focusState].default} className="project-focus-img" />
                        </Fade>
                        <span className="full-screen-overlay-exit-text" onClick={() => props.setFocus(-1)}>Click Here to Exit</span>
                    </div>
                    <div>
                        <BsArrowRight className="full-screen-overlay-arrows" size={36} color="white" onClick={() => changeFocus(true)} />
                    </div>
                </div>
            </Fade>
        </div>
    );
}