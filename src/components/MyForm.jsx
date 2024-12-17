import { useState } from "react";
import posts from "../data/posts";

const newPost = {
    title: '',
    content: '',
}

function MyForm() {
    const [myPost, setMyPost] = useState(newPost)

    function handleImput(ev) {
        console.log(ev)
        let fakeNewPost = { ...myPost }
        fakeNewPost[ev.target.name] = ev.target.value;
        //setMyPost({ ...fakeNewPost, [e.target.name]: e.target.value });
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        console.log(myPost.title)
        console.log(myPost.content)
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

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </section>
    )
}

export default MyForm;