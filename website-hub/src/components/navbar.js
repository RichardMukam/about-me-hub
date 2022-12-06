import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <ul>
                <Link to="/"> Home </Link>
            </ul>
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
                <Link to="/anirudh"> Anirudh </Link>
            </ul>
            <ul>
                <Link to="/richard"> Richard </Link>
            </ul>
        </>
    );
}

export default Home;