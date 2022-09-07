import React from 'react';
import brandimage from "../assets/brand.png";

function Tile({ tileTitle, tileText, tileImage, tileImageDescription}) {
    return (
        <section>
            <h2>
                {tileTitle}
            </h2>
            <p>
                {tileText}
            </p>
            <img
                src={tileImage}
                alt={tileImageDescription}
            />
        </section>
    )
}

export default Tile;