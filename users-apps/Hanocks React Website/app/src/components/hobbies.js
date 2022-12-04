import React from "react";
export default function Hobbies() {
    const games = ['Super Smash bros.', 'Legend of Zelda', 'Kingdom Hearts', 'Valorant', 'Pokèmon'];
    const gameList = games.map(c => {
        return (
            <section>
                <li>{c}</li>
            </section>
        )
    });
    return (
        gameList
    );
}
