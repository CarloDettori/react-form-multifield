"use strict"
import ButtonComponent from "./ButtonComponent";
import PostSelectorComponent from "./PostSelectorComponent";
import posts from "../data/posts";

//promemoria: aggiungere alla funzione card controllers una modo per inserire in una array dedicata ad ogni post

function CardComponent(props) {
    let template = [];
    PostSelectorComponent.map((element, index) => {
        let postTags = [];
        let templateTags = [];
        element.tags.map((element) => {
            postTags.push(<li id={index}>{element}</li>);
        });
        template.push(<div id="element.id" className="card">
            <img src="{props.img}" alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{element.title}</h3>
                    <ul>
                        {postTags.join()}
                    </ul>
                </div>
                <p>{element.content}</p>
                <ButtonComponent />
            </div>
        </div >)
    })
    return template
}

export default CardComponent;