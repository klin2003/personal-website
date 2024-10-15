import { useState } from "react";

function SpotifyEmbed(props: any) {
    return (
        <iframe
            src={`https://open.spotify.com/embed/playlist/${props.playlistID}`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
    );

};

function SpotifyURLForm(props: any) {
    const [formInput, setFormInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInput(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let validInput = true;

        if (formInput.startsWith("https://open.spotify.com/playlist/")) {
            const extractedID = extractPlaylistID(formInput);
            if (extractedID)
                props.setPlaylistID(extractedID);
            else
                validInput = false;
        } else {
            props.setPlaylistID(formInput);
        }

        setFormInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="spotify-form">
            <input className="spotify-form-input"
                type="text"
                value={formInput}
                onChange={handleInputChange}
                placeholder="Enter Playlist ID or URL:"
            />
            <button className="spotify-form-submit" type="submit">Submit</button>
        </form>
    );
}

function extractPlaylistID(url: string): string | null {
    const match = url.match(/\/playlist\/(.*?)(\?)/);
    return match ? match[1] : null;
}

export { SpotifyEmbed, SpotifyURLForm }