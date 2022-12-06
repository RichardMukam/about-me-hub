import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <ul>
                <Link to="/sanjeev"> Sanjeev </Link>
            </ul>
            <ul>
                <Link to="/ana"> Ana </Link>
            </ul>
            <ul>
                <Link to="/apurva"> Apurva </Link>
            </ul>
            <ul>
                <Link to="/gelilas"> Gelilas </Link>
            </ul>
            <ul>
                <Link to="/hanock"> Hanock </Link>
            </ul>
            <ul>
                <Link to="/anirudh"> Anirudh </Link>
            </ul>
            <ul>
                <Link to="/jillian"> Jillian </Link>
            </ul>
            <ul>
                <Link to="/richard"> Richard </Link>
            </ul>
            <ul>
                <Link to="/sathya"> Sathya </Link>
            </ul>
        </>
    );
}

export default Home;