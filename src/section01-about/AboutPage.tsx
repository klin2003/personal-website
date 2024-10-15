import { useState } from "react";
import SectionHeader from "../section-features/SectionHeader";
import { SpotifyEmbed, SpotifyURLForm } from "./SpotifyAssets";

export default function AboutPage(props: any) {
    const [playlistID, setPlaylistID] = useState("6Szov1HwTIZXeQq5weihCa");

    return (
        <div id="about" className="flex flex-row justify-between items-center">
            <SectionHeader className="about" entryNumber={1} titleLabel={(props.width > 1000) ? "About" : ""} />
            <div className="about-description">
                About Section
            </div>
            <div className="about-spotify flex flex-col items-center">
                <SpotifyURLForm playlistID={playlistID} setPlaylistID={setPlaylistID}/>
                <SpotifyEmbed playlistID={playlistID} setPlaylistID={setPlaylistID}/>
            </div>
        </div>
    );
}