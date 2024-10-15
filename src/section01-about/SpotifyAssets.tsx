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
        props.setPlaylistID(formInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Step 4: Create the input field */}
            <label htmlFor="props.playlistID">
                <input
                    type="text"
                    value={formInput}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
            </label>
            {/* Step 5: Add a submit button */}
            <button type="submit">Submit</button>
        </form>
    );
}

export { SpotifyEmbed, SpotifyURLForm }