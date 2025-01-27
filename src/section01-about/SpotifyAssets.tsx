import { useState } from "react";
import { Input, Button } from "@mui/material";

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

        if (formInput.length == 0)
            return;

        if (formInput.startsWith("https://open.spotify.com/playlist/")) {
            const extractedID = extractPlaylistID(formInput);
            if (extractedID)
                props.setPlaylistID(extractedID);
        } else {
            props.setPlaylistID(formInput);
        }

        setFormInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="spotify-form">
            <Input className="spotify-form-input"
                type="text"
                value={formInput}
                onChange={handleInputChange}
                placeholder="Enter Playlist ID or URL:"
                sx={{
                    fontSize: '14px', // Adjust font size
                    padding: '2px 8px',   // Optional: Adjust padding
                }}
            />
            <Button className="spotify-form-submit"
                variant="contained"
                type="submit"
                sx={{
                    fontSize: '12px', // Adjust font size
                    padding: '4px 8px',   // Optional: Adjust padding
                }}
            >
                Submit
            </Button>
        </form>
    );
}

function extractPlaylistID(url: string): string | null {
    const match = url.match(/\/playlist\/(.*?)(\?)/);
    return match ? match[1] : null;
}

export { SpotifyEmbed, SpotifyURLForm }