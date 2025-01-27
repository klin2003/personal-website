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
                    I am a Software Engineer based in New York focusing
                    on <span className="about-description-paragraph-ul">Game Development</span> and <span className="about-description-paragraph-ul">Web Development</span>.
                    Over the course of my academic career, I have dabbled in multiple fields including Web Dev, Game Dev, and <span className="about-description-paragraph-ul">Natural Language Processing</span>.
                </div><br/>

                <div className="about-description-paragraph">
                    Having double majored in both <span className="about-description-paragraph-ul">Computer Science</span> and <span className="about-description-paragraph-ul">Applied Mathematics and Statistics</span>,
                    I'm open to exploring various fields and always excited to learn new technologies and frameworks.
                </div><br />
                
                <div className="about-description-paragraph">
                    Currently seeking an entry-level position or internship. 
                    Feel free to contact me or browse some of my past projects below!
                </div>
            </div>
            <div className="about-spotify flex flex-col items-center">
                <SpotifyURLForm playlistID={playlistID} setPlaylistID={setPlaylistID}/>
                <SpotifyEmbed playlistID={playlistID} setPlaylistID={setPlaylistID}/>
            </div>
        </div>
    );
}