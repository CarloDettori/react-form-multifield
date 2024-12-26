import { useState } from "react";
import CheckTagComponent from "./CheckTagComponent";
import TagList from "./TagList";

const newPost = {
    id: 0,
    title: '',
    image: '',
    content: '',
    tags: [],
    published: false,
}


function MyForm() {
    const [myPost, setMyPost] = useState(newPost)
    const [postList, setPostList] = useState([]);
    const tagList = TagList()
    console.log(tagList)


    function handleImput(ev) {
        //alert(ev)
        //let fakeNewPost = { ...myPost }
        //fakeNewPost[ev.target.name] = ev.target.value;
        setMyPost({ ...myPost, [ev.target.name]: ev.target.value });
        //setMyPost(fakeNewPost)

    }

    function handleSubmit(ev) {
        ev.preventDefault()
        const newPostList = [...postList];
        newPostList.push(myPost)
        //console.log(myPost.title)
        //console.log(myPost.content)
        setPostList([...postList, myPost]);
        //setMyPost(newPost);
        alert(myPost.title + " " + myPost.content)
    }

    return (
        <section>

            <h2>
                MAKE A NEW POST
            </h2>

            {/* post title */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="postTitle"
                        className="form-label">
                        New Post Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postTitle"
                        value={myPost.title}
                        onChange={(ev) => handleImput(ev)}
                        name="title"
                    />
                </div>

                {/* post content */}
                <div className="mb-3">
                    <label
                        htmlFor="postContent"
                        className="form-label">
                        New Post Content
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postContent"
                        value={myPost.content}
                        onChange={(ev) => handleImput(ev)}
                        name="content"
                    />
                </div>
                /*post tag */
                <ul className="d-flex flex-wrap">
                    {tagList.map((tag, index) => (
                        <CheckTagComponent key={`tagOption-${tag[index]}`} tag={tag} />
                    ))}

                </ul>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </section>
    )
}

export default MyForm;