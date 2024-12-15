"use strict"
import ButtonComponent from "./ButtonComponent";
import posts from "../data/posts";
import PostSelectorComponent from "./PostSelectorComponent";

//promemoria: aggiungere alla funzione card controllers una modo per inserire in una array dedicata ad ogni post

function CardComponent(props) {
    let trueCards = [];
    let template = [];
    posts.filter((element, index) => {
        if (element.published === true) {
            trueCards.push(element);
        }
        for (let i = 0; i < trueCards; i++) {
            if (element.published === false)
                trueCards.splice(index, 1)
        }
        //console.log(trueCards)
        return trueCards
    }).map((element, index) => {
        let postTags = [];
        element.tags.map((element) => {
            postTags.push(<li className="post-tags" id={index}>{element}</li>);
        });
        //console.log(postTags)
        template.push(<div id="element.id" className="card">
            <img src={element.image} alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{element.title}</h3>
                    <ul className="d-flex">
                        {postTags}
                    </ul>
                </div>
                <p>{element.content}</p>
                <ButtonComponent />
            </div>
        </div >)
    })
    //console.log(template)
    return template
}

export default CardComponent;