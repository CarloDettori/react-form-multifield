"use strict"
import ButtonController from "./ButtonController";
import posts from "../data/posts";
//creare una funzione che mentre itera sugli elementi dell'array seleziona (filter) quelli true e utilizza i parametri di ogni oggetto per andare a costruire una lista (map) composta da card con all'interno i valori dei paramenti di ogni post
function CardController(title, text) {
    return (
        <div className="card">
            <img src="https://picsum.photos/600/400" alt="600x400img" />
            <div id="info">
                <h3>Titolo del post</h3>
                <p>po</p>
                <ButtonController />
            </div>
        </div >
    )
}

export default CardController;