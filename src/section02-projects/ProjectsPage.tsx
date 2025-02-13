import { useRef, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCaretLeftFill, BsCaretRightFill, BsGithub, BsLink45Deg, BsZoomIn } from "react-icons/bs";

import SectionHeader from "../section-features/SectionHeader";
import PROJECTS, { ProjectInfo } from "./ProjectData";
import NoImages from '../assets/project-images/NoImages.png';

interface ProjectProps {
    projectData: ProjectInfo[],
    projectIndex: number,
    setProjectIndex: (index: number) => void;
}

type ExtendedProjectProps = ProjectProps & {
    setFocus: (index: number) => void;
};

export default function ProjectsPage(props: any) {
    const DATA: ProjectProps = {
        projectData: PROJECTS,
        projectIndex: props.projectIndex,
        setProjectIndex: props.setProjectIndex
    }

    return (
        <div id="projects" className="flex flex-row items-center">
            <SectionHeader className="projects" entryNumber={2} titleLabel={(props.width > 1200) ? "Projects" : ""} />
            <div className="projects-container flex flex-col text-white">
                <ProjectHeader projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />

                <Fade key={props.projectIndex}>
                    <ProjectTitle projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
                    <ProjectImageSlides projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} setFocus={props.setFocus} />
                    <ProjectDetails projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
                </Fade>
            </div>
        </div>
    );
}

function ProjectHeader({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    const changeIndex = (inc: boolean) => {
        if (inc && projectIndex == projectData.length)
            setProjectIndex(1);
        else if (!inc && projectIndex == 1)
            setProjectIndex(projectData.length);
        else
            setProjectIndex(projectIndex + (inc ? 1 : -1));
    }

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="text-red-500 font-bold montserrat">
                CURRENT LISTING:
            </div>

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
    );
}

function ProjectTitle({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-header-section flex flex-col">
            <div className="projects-header-title averia-serif">{currProject.title}</div>
            <div className="montserrat text-gray-400 font-bold mb-8">
                <span className="underline underline-offset-4">Last Updated</span>
                <span>{`: ${currProject.last_updated}`}</span>
                <div className="mt-2">{`Status: [${currProject.status}]`}</div>
            </div>
        </div>
    );
}

function ProjectImageSlides({ projectData, projectIndex, setFocus }: ExtendedProjectProps) {
    const currProject = projectData[projectIndex - 1];
    const maxIndex = currProject.images.length;

    const [indexFactor, setIndexFactor] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const changeIndexFactor = (inc: boolean) => {
        if (inc)
            setIndexFactor((indexFactor + 1) % maxIndex);
        else
            setIndexFactor((indexFactor - 1 + maxIndex) % maxIndex);
    }

    const updateImageWidth = () => {
        if (containerRef.current) {
            const firstImage = containerRef.current.querySelector(".project-img-container") as HTMLDivElement;
            if (firstImage) {
                const rectWidth = firstImage.getBoundingClientRect().width;
                setImageWidth(rectWidth + 48);
            }
        }
    };

    if (currProject.images.length == 0) {
        return (
            <div className="project-display-section flex items-center">
                <img src={NoImages} className="project-img-none" />
            </div>
        )
    } else {
        return (
            <div className="projects-display-section flex flex-col overflow-hidden">
                <div ref={containerRef} className="project-display-images flex items-center">
                    {currProject.images.map((urlModule, index) => (
                        <div
                            key={index}
                            className="relative project-img-container flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${indexFactor * imageWidth}px)` }}
                        >
                            <img src={urlModule.default} className="project-img" onClick={() => setFocus((index + indexFactor) % maxIndex)} onLoad={updateImageWidth} />
                            <BsZoomIn className="project-img-zoom cursor-pointer" onClick={() => setFocus((index + indexFactor) % maxIndex)} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between">
                    <BsCaretLeftFill size={32} className="projects-img-arrow mr-4" onClick={() => changeIndexFactor(false)} />
                    <div className="projects-img-slides-index">
                        <span className="font-medium text-red-500">{`${(indexFactor + 1).toString().padStart(2, '0')}`}</span>
                        <span> / </span>
                        <span>{`${maxIndex.toString().padStart(2, '0')}`}</span>
                    </div>
                    <BsCaretRightFill size={32} className="projects-img-arrow ml-4" onClick={() => changeIndexFactor(true)} />
                </div>
            </div>
        );
    }
}

function ProjectDetails({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    return (
        <div className="projects-details-section">
            <div className="flex-1">
                <ProjectDescription projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
            <div className="flex flex-col flex-1">
                <ProjectTags projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                <ProjectLinks projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
        </div>
    );
}

function ProjectDescription({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-description-container mb-8">
            <div className="projects-details-title">DESCRIPTION</div>
            <div className="projects-description-content source-code-pro mb-4">{currProject.description}</div>
        </div>
    );
}

function ProjectTags({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">TECH STACK</div>
            <div className="projects-tech-stack mb-8">
                {currProject.tags.length == 0 && (
                    <div className="source-code-pro">
                        No Tech Stack Provided
                    </div>
                )}

                <div className="projects-tech-stack-grid">
                    {currProject.tags.map((obj, index) => (
                        <div
                            key={`Tag${index}`}
                            className={`projects-tech-stack-item`}
                        >
                            {obj}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function ProjectLinks({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">LINKS</div>
            <div className="projects-links-container mb-4">
                {currProject.links.length == 0 && (
                    <div className="source-code-pro">
                        No Links Available
                    </div>
                )}

                {currProject.links.map((obj, index) => (
                    <div key={`Link${index}`} className="flex items-center">
                        {obj.type == 'GitHub' && (
                            <>
                                <BsGithub size={24} className="mr-2" />
                                <span className="source-code-pro">GitHub Repo:&nbsp;</span>
                            </>
                        )}
                        {obj.type == 'Try' && (
                            <>
                                <BsLink45Deg size={24} className="mr-2" />
                                <span className="source-code-pro">Try Yourself:&nbsp;</span>
                            </>
                        )}

                        <a className="source-code-pro classic-anchor1" href={obj.url} target="_blank">{obj.name}</a>
                    </div>
                ))}
            </div>
        </>
    );
}