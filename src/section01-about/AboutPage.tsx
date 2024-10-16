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
                    I am currently a Software Engineering student based in NY.
                    My passions in the Computer Science field include <span className="about-description-paragraph-ul">Game Development</span> and Web Development.
                </div><br/>

                <div className="about-description-paragraph">
                    I am currently taking a course on Natural Language Processing and
                    am double majoring in Applied Mathematics and Statistics.
                    Currently looking for any entry-level position or internship
                    to grow my skill set. Feel free to look around for my past projects
                    and overall tools and frameworks that I have used before.
                </div>
            </div>
            <div className="about-spotify flex flex-col items-center">
                <SpotifyURLForm playlistID={playlistID} setPlaylistID={setPlaylistID}/>
                <SpotifyEmbed playlistID={playlistID} setPlaylistID={setPlaylistID}/>
            </div>
        </div>
    );
}