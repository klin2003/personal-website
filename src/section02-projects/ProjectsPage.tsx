import { useState } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import { Switch } from '@mui/material';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import SectionHeader from "../section-features/SectionHeader";
import PROJECTS, { ProjectInfo } from "./ProjectData";

interface ProjectProps {
    projectData: ProjectInfo[],
    projectIndex: number,
    setProjectIndex: (index: number) => void;
}

const keyGen = keyGenerator();

function* keyGenerator() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

export default function ProjectsPage(props: any) {
    const [projectIndex, setProjectIndex] = useState(1);

    const DATA: ProjectProps = {
        projectData: PROJECTS,
        projectIndex: projectIndex,
        setProjectIndex: setProjectIndex
    }

    return (
        <div id="projects" className="flex flex-row items-center">
            <SectionHeader className="projects" entryNumber={2} titleLabel={(props.width > 1200) ? "Projects (WIP)" : ""} />
            <div className="projects-container flex flex-col text-white">
                <ProjectHeader projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
                <ProjectDisplay projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
                <ProjectDetails projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
            </div>
        </div>
    );
}

function ProjectHeader({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    const changeIndex = (inc: boolean) => {
        if (inc && projectIndex == projectData.length)
            setProjectIndex(1);
        else if (!inc && projectIndex == 1)
            setProjectIndex(projectData.length);
        else
            setProjectIndex(projectIndex + (inc ? 1 : -1));
    }

    return (
        <>
            <div className="text-red-500 font-bold montserrat">
                CURRENT LISTING:
            </div>
            <div className="projects-header-section flex flex-row justify-between">
                <Fade key={`${projectIndex}${keyGen.next().value}`}>
                    <div className="flex flex-col">
                        <div className="projects-header-title averia-serif">{currProject.title}</div>
                        <div className="projects-header-status montserrat text-gray-500 font-bold">{`[${currProject.status}]`}</div>
                    </div>
                </Fade>

                <div className="projects-header-settings flex justify-center items-center">
                    <BsArrowLeftCircleFill className="projects-header-arrow" onClick={() => { changeIndex(false) }} />

                    <div className="projects-header-index">
                        <span className="font-medium text-red-500">{`${projectIndex.toString().padStart(3, '0')}`}</span>
                        <span> / </span>
                        <span>{`${projectData.length.toString().padStart(3, '0')}`}</span>
                    </div>

                    <BsArrowRightCircleFill className="projects-header-arrow" onClick={() => { changeIndex(true) }} />
                </div>
            </div>
        </>
    );
}

function ProjectDisplay({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-display-section flex flex-col">
            <Slide key={`${projectIndex}${keyGen.next().value}`} direction="right">
                <ProjectImageSlides projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </Slide>
            <Fade key={`${projectIndex}${keyGen.next().value}`}>
                <div className="italic montserrat">
                    <span className="underline">Last Updated</span>
                    <span>{`: ${currProject.last_updated}`}</span>
                </div>
            </Fade>
        </div>
    );
}

function ProjectImageSlides({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    if (currProject.images.length == 0) {
        return (
            <div className="project-display-images flex items-center">
                No Images Found
            </div>
        )
    } else {
        return (
            <div className="project-display-images flex items-center">
                {currProject.images.map((urlModule, index) => (
                    <img key={index} src={urlModule.default} className="project-img" />
                ))}
            </div>
        );
    }
}

function ProjectDetails({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    const [viewDescription, toggleDescription] = useState(true);

    return (
        <>
            <Switch checked={!viewDescription} onChange={() => { toggleDescription(!viewDescription) }} />
            <div className="projects-details-section flex flex-row justify-between">
                <div className="projects-details-description">
                    {viewDescription && <ProjectDescription projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />}
                    {!viewDescription && <ProjectObjectives projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />}
                </div>
                <div className="projects-details-misc flex flex-col">
                    <ProjectTags projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                    <ProjectLinks projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                </div>
            </div>
        </>
    );
}

function ProjectDescription({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">DESCRIPTION</div>
            <div className="projects-description-content">
                Content
            </div>
        </>
    );
}

function ProjectObjectives({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">LEARNING OBJECTIVES</div>
            <div className="projects-description-content">
                Content
            </div>
        </>
    );
}

function ProjectTags({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-details-title">TAGS</div>
    );
}

function ProjectLinks({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-details-title">LINKS</div>
    );
}