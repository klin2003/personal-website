import { useRef, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCaretLeftFill, BsCaretRightFill, BsGithub, BsLink45Deg, BsFillFolderSymlinkFill, BsDownload, BsThreeDots, BsZoomIn } from "react-icons/bs";

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
        <div id="projects">
            <SectionHeader className="projects-section-header" entryNumber={2} titleLabel={(props.width > 1200) ? "Projects" : ""} />
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
            <div className="text-red-500 font-bold text-sm montserrat">
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
        <div className="projects-header-section flex flex-row items-center justify-between mt-2 mb-2">
            <div className="projects-header-title averia-serif">{currProject.title}</div>
            <div className="montserrat text-gray-300 font-semibold text-sm text-center">
                <span className="underline underline-offset-4">Last Updated</span>
                <span>{`: ${currProject.last_updated}`}</span>
                <div className="mt-2">{`=={ ${currProject.status} }==`}</div>
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
            <div className="projects-display-section">
                <div ref={containerRef} className="project-display-images flex items-center">
                    <img src={NoImages} className="project-img-none" />
                </div>
                
                <div className="flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed">
                    <BsCaretLeftFill size={24} className="projects-img-arrow cursor-not-allowed mr-4" />
                    <div className="projects-img-slides-index">
                        <span>No Images Found</span>
                    </div>
                    <BsCaretRightFill size={24} className="projects-img-arrow cursor-not-allowed ml-4" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="projects-display-section">
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

                <div className="flex flex-row items-center justify-between mt-2 p-2 border-y-2 border-gray-500 border-dashed">
                    <BsCaretLeftFill size={24} className="projects-img-arrow mr-4" onClick={() => changeIndexFactor(false)} />
                    <div className="projects-img-slides-index">
                        <span className="text-red-500">{`${(indexFactor + 1).toString().padStart(2, '0')}`}</span>
                        <span> / </span>
                        <span>{`${maxIndex.toString().padStart(2, '0')}`}</span>
                    </div>
                    <BsCaretRightFill size={24} className="projects-img-arrow ml-4" onClick={() => changeIndexFactor(true)} />
                </div>
            </div>
        );
    }
}

function ProjectDetails({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    return (
        <div className="projects-details-section">
            <div className="flex-[0_0_50%]">
                <ProjectDescription projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
            <div className="flex flex-col flex-[0_0_50%]">
                <ProjectTags projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                <ProjectLinks projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
        </div>
    );
}

function ProjectDescription({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-description-container mb-6">
            <div className="projects-details-title">DESCRIPTION</div>
            <div className="projects-description-content source-code-pro">{currProject.description}</div>
        </div>
    );
}

function ProjectTags({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">TECH STACK</div>
            <div className="projects-tech-stack mb-6">
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
                    <div key={`Link${index}`} className="flex items-center pb-4">
                        {obj.type == 'GitHub' && (
                            <>
                                <BsGithub size={24} className="mr-4" />
                                <span className="source-code-pro">GitHub Repo:&nbsp;</span>
                            </>
                        )}
                        {obj.type == 'Try' && (
                            <>
                                <BsLink45Deg size={24} className="mr-4" />
                                <span className="source-code-pro">Try Yourself:&nbsp;</span>
                            </>
                        )}
                        {obj.type == 'Resource' && (
                            <>
                                <BsFillFolderSymlinkFill size={24} className="mr-4" />
                                <span className="source-code-pro">Resource:&nbsp;</span>
                            </>
                        )}
                        {obj.type == 'Download' && (
                            <>
                                <BsDownload size={24} className="mr-4" />
                                <span className="source-code-pro">Download:&nbsp;</span>
                            </>
                        )}
                        {obj.type == 'Other' && (
                            <>
                                <BsThreeDots size={24} className="mr-4" />
                                <span className="source-code-pro">{obj.title}:&nbsp;</span>
                            </>
                        )}

                        <a className="source-code-pro classic-anchor1" href={obj.url} target="_blank">{obj.name}</a>
                    </div>
                ))}
            </div>
        </>
    );
}