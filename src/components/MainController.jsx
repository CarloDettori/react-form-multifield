"use strict"
import CardController from "./CardController";

function MainController() {
    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    <CardController />
                </div>
            </main>
        </>
    )
}

export default MainController;