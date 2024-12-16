"use strict"
import ButtonComponent from "./ButtonComponent";
import PostSelectorComponent from "./PostSelectorComponent";

function CardComponent(props) {
    let template = [];
    truePosts.map((element, index) => {
        let postTags = [];
        element.tags.map((element) => {
            postTags.push(<li className="post-tags" id={index}>{element}</li>);
        });
        //console.log(postTags)
        template.push(<div id={index} className="card">
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