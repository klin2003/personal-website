import { useState } from "react";
import SectionHeader from "../section-features/SectionHeader";
import { SpotifyEmbed, SpotifyURLForm } from "./SpotifyAssets";

export default function AboutPage(props: any) {
    const [playlistID, setPlaylistID] = useState("6Szov1HwTIZXeQq5weihCa");

    return (
        <div id="about" className="flex flex-row justify-between items-center">
            <SectionHeader className="about" entryNumber={1} titleLabel={(props.width > 1200) ? "About" : ""} />
            <div className="about-description flex flex-col justify-start">
                <div className="about-description-heading flex flex-row whitespace-pre">
                    <span className="about-description-h1"><span>Hey</span></span>
                    <span>, I'm </span><span className="about-description-h2">Kelvin</span><span>!</span>
                </div><br/>
                
                <div className="about-description-paragraph">
                    I am currently a Software Engineering student based in New York. 
                    My passions in the field include <span className="about-description-paragraph-ul">Game Development</span> and <span className="about-description-paragraph-ul">Web Development</span>.
                </div><br/>

                <div className="about-description-paragraph">
                    As a student, I am currently taking a course on <span className="about-description-paragraph-ul">Natural Language Processing</span> and
                    am double majoring in <span className="about-description-paragraph-ul">Applied Mathematics and Statistics</span>. 
                </div><br/>
                
                <div className="about-description-paragraph">
                    I'm always open and eager to learn new technologies and frameworks.
                    Currently, I am seeking an entry-level position or internship
                    where I can continue to expand upon my skills. Please feel free
                    to explore some of my past projects!
                </div>
            </div>
            <div className="about-spotify flex flex-col items-center">
                <SpotifyURLForm playlistID={playlistID} setPlaylistID={setPlaylistID}/>
                <SpotifyEmbed playlistID={playlistID} setPlaylistID={setPlaylistID}/>
            </div>
        </div>
    );
}