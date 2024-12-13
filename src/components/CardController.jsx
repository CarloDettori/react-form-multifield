"use strict"
import ButtonController from "./ButtonController";

function CardController(title, text) {
    return (
        <div className="card">
            <img src="https://picsum.photos/600/400" alt="600x400img" />
            <div id="info">
                <h3>Titolo del post</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias iure nesciunt corporis pariatur architecto quo et nam ex perferendis, minus id velit facere quis voluptatem explicabo cum facilis, incidunt officia.</p>
                <ButtonController />
            </div>
        </div >
    )
}

export default CardController;