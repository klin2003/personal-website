import { useState } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import { Switch } from '@mui/material';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCodeSlash, BsGithub, BsLink45Deg } from "react-icons/bs";

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
            <SectionHeader className="projects" entryNumber={2} titleLabel={(props.width > 1200) ? "Projects" : ""} />
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
        <div className="projects-display-section flex flex-col overflow-hidden">
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
    return (
        <>
            <div className="projects-details-section flex flex-row">
                <div className="projects-details-description w-1/2">
                    <ProjectDescription projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                </div>
                <div className="projects-details-misc w-1/2 flex flex-col">
                    <ProjectTags projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                    <ProjectLinks projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                </div>
            </div>
        </>
    );
}

function ProjectDescription({ projectData, projectIndex }: ProjectProps) {
    const [viewDescription, toggleDescription] = useState(true);
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <Switch checked={!viewDescription} onChange={() => { toggleDescription(!viewDescription) }} />
            {viewDescription &&
                <Fade key={`${projectIndex}${keyGen.next().value}`}>
                    <div className="projects-details-title">DESCRIPTION</div>
                    <div className="projects-description-content source-code-pro">{currProject.description}</div>
                </Fade>
            }

            {!viewDescription &&
                <Fade key={`${projectIndex}${keyGen.next().value}`}>
                    <div className="projects-details-title">LEARNING OBJECTIVES</div>

                    <div className="projects-description-content source-code-pro">
                        {currProject.objectives.map((obj, index) => (
                            <span key={index} className="projects-objective-listing">
                                {`- ${obj}`}
                            </span>
                        ))}
                    </div>
                </Fade>
            }
        </>
    );
}

function ProjectTags({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <Fade key={`${projectIndex}${keyGen.next().value}`}>
                <div className="projects-details-title">TAGS</div>
                <div className="projects-tags-container">
                    {currProject.tags.map((obj, index) => (
                        <span key={index} className="projects-tag">{obj}</span>
                    ))}
                </div>
            </Fade>
        </>
    );
}

function ProjectLinks({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <Fade key={`${projectIndex}${keyGen.next().value}`}>
                <div className="projects-details-title">LINKS</div>
                <div className="projects-links-container">
                    {currProject.links.map((obj, index) => (
                        <div className="flex items-center">
                            {obj.type == 'GitHub' && (
                                <>
                                    <BsGithub key={index} size={24} className="mr-2" />
                                    <span className="source-code-pro">Github:&nbsp;</span>
                                </>
                            )}
                            {obj.type == 'Code' && (
                                <>
                                    <BsCodeSlash key={index} size={24} className="mr-2" />
                                    <span className="source-code-pro">Code Snippets:&nbsp;</span>
                                </>
                            )}
                            {obj.type == 'Try' && (
                                <>
                                    <BsLink45Deg key={index} size={24} className="mr-2" />
                                    <span className="source-code-pro">Try Yourself:&nbsp;</span>
                                </>
                            )}

                            <a className="source-code-pro classic-anchor1" href={obj.url} target="_blank">{obj.name}</a>
                        </div>
                    ))}
                </div>
            </Fade>
        </>
    );
}