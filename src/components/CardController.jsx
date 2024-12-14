"use strict"
import ButtonController from "./ButtonController";
import posts from "../data/posts";

//promemoria: aggiungere alla funzione card controllers una modo per inserire in una array dedicata ad ogni post

function CardController() {
    let trueCard = [];
    let template = [];
    let postTags = posts.map

    posts.filter((element) => {
        if (element.published == true) {
            trueCard.push(element);
        }
        return trueCard
    }).map((element) => {
        template.push(<div id="{element.id}" className="card">
            <img src="https://picsum.photos/600/400" alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{element.title}</h3>
                    <ul>

                    </ul>
                </div>
                <p>{element.content}</p>
                <ButtonController />
            </div>
        </div >)
    })
    return template
}

export default CardController;