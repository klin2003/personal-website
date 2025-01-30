import { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCaretLeft, BsCaretRight, BsCodeSlash, BsGithub, BsLink45Deg, BsZoomIn } from "react-icons/bs";

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

                <Fade key={projectIndex}>
                    <ProjectTitle projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} />
                    <ProjectDisplay projectData={DATA.projectData} projectIndex={DATA.projectIndex} setProjectIndex={DATA.setProjectIndex} setFocus={props.setFocus} />
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
            <div className="projects-header-status montserrat text-gray-500 font-bold">{`Status: [${currProject.status}]`}</div>
        </div>
    );
}

function ProjectDisplay({ projectData, projectIndex, setProjectIndex, setFocus }: ExtendedProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <div className="projects-display-section flex flex-col overflow-hidden">
            <ProjectImageSlides projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} setFocus={setFocus} />
            
            <div className="italic montserrat">
                <span className="underline">Last Updated</span>
                <span>{`: ${currProject.last_updated}`}</span>
            </div>
        </div>
    );
}

function ProjectImageSlides({ projectData, projectIndex, setFocus }: ExtendedProjectProps) {
    const currProject = projectData[projectIndex - 1];

    const maxIndex = currProject.images.length;
    const [indexFactor, setIndexFactor] = useState(0);
    const [imagesArr, setImagesArr] = useState(currProject.images);

    const modifyImagesArr = (inc: boolean) => {
        if(inc){
            setIndexFactor(indexFactor + 1);
            setImagesArr([...imagesArr.slice(1), imagesArr[0]]);
        } else {
            if(indexFactor == 0)
                setIndexFactor(maxIndex - 1)
            else
                setIndexFactor(indexFactor - 1);
            setImagesArr([imagesArr[imagesArr.length - 1], ...imagesArr.slice(0, -1)]);
        }
    }

    if (currProject.images.length == 0) {
        return (
            <div className="project-display-images flex items-center">
                <img src={NoImages} className="project-img-none" /> 
            </div>
        )
    } else {
        return (
            <>
                <div className="flex flex-row mt-4 mb-4">
                    <BsCaretLeft size={32} className="cursor-pointer mr-4" onClick={() => modifyImagesArr(false)}/>
                    <BsCaretRight size={32} className="cursor-pointer ml-4" onClick={() => modifyImagesArr(true)}/>
                </div>
                <Fade key={`${projectIndex}-${indexFactor}`}>
                    <div className="project-display-images flex items-center">
                        {imagesArr.map((urlModule, index) => (
                            <div key={index} className="relative project-img-container">
                                <img src={urlModule.default} className="project-img" onClick={() => setFocus((index + indexFactor) % maxIndex)} />
                                <span className="project-img-index">{`${(index + indexFactor) % maxIndex}`}</span>
                                <BsZoomIn className="project-img-zoom" />
                            </div>
                        ))}
                    </div>
                </Fade>
            </>
        );
    }
}

function ProjectDetails({ projectData, projectIndex, setProjectIndex }: ProjectProps) {
    return (
        <div className="projects-details-section flex flex-row">
            <div className="projects-details-description w-1/2">
                <ProjectDescription projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
                <ProjectLinks projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
            <div className="projects-details-misc w-1/2 flex flex-col">
                <ProjectObjectives projectData={projectData} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
            </div>
        </div>
    );
}

function ProjectDescription({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">DESCRIPTION</div>
            <div className="projects-description-content source-code-pro mb-10">{currProject.description}</div>
        </>
    );
}

function ProjectObjectives({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">OBJECTIVES</div>
            <div className="projects-description-content source-code-pro">
                {currProject.objectives.map((obj, index) => (
                    <span key={index} className="projects-objective-listing">
                        {`- ${obj}`}
                    </span>
                ))}
            </div>
        </>
    );
}

function ProjectLinks({ projectData, projectIndex }: ProjectProps) {
    const currProject = projectData[projectIndex - 1];

    return (
        <>
            <div className="projects-details-title">LINKS</div>
            <div className="`projects-links-container">
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
                        {obj.type == 'Code' && (
                            <>
                                <BsCodeSlash size={24} className="mr-2" />
                                <span className="source-code-pro">Code Snippets:&nbsp;</span>
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