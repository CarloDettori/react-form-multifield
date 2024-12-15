"use strict"
import CardComponent from "./CardComponent";

function MainComponent() {
    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    <CardComponent />
                </div>
            </main>
        </>
    )
}

export default MainComponent;