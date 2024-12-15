"use strict";

import CardComponent from "./CardComponent";
import posts from "../data/posts";
function MainComponent() {
    const postList = [...posts];
    const truePosts = postList.filter((published) => published.state == "true");
    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    <CardComponent posts={truePosts} />
                </div>
            </main>
        </>
    )
}

export default MainComponent;