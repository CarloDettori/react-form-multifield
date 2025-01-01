
import ButtonComponent from "./ButtonComponent";
import DeleteButtonComponent from "./DeleteButtonComponent";



function CardComponent({ element }) {

    // let template = [];
    // props.posts.map((element, index) => {
    //     // let postTags = [];

    //     //console.log(postTags)
    //     // template.push()
    // })
    //console.log(template)

    return (
        <div className="card" >
            <img src={element.image} alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{element.title}</h3>
                    <ul className="d-flex">
                        {element.tags.map((tag) => {
                            <li className="post-tags" key={`tags-${tag}`}>
                                {tag}
                            </li>
                        })}
                    </ul>
                </div>
                <p>{element.content}</p>
                <ButtonComponent />
                <button
                    id="delete-button"
                    type="button"
                    className="btn btn-warning"
                    onClick={onDelete}
                >
                    cancella
                </button>

            </div>
        </div>
    )
}

export default CardComponent;