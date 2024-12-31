import { useState } from "react";
import CheckTagComponent from "./CheckTagComponent";
import PostTagList from "./TagList";

const newPost = {
    id: 0,
    title: '',
    image: '',
    content: '',
    tags: [],
    published: false,
}

export const allTagList = [
    "javascript",
    "html",
    "css",
    "python",
    "java",
    "c++",
    "php",
    "ruby",
    "sql",
    "xml",
];


function MyForm() {
    const [myPost, setMyPost] = useState(newPost)
    const [postList, setPostList] = useState([]);
    const [checkedTagList, setCheckedTagList] = useState(
        newPost.tags.map((tag) => false)
    );

    const tagList = PostTagList()
    //console.log(tagList)


    function handleImput(ev) {
        //alert(ev)
        //let fakeNewPost = { ...myPost }
        //fakeNewPost[ev.target.name] = ev.target.value;

        let { type, name, value, checked } = ev.target
        const KEY = name
        const VAL = type == "checkbox" ? checked : value;

        if (name != "tags") return setMyPost({ ...myPost, [KEY]: VAL });

        if (checked) {
            setMyPost({
                ...myPost,
                [KEY]: [...myPost.tags, ev.target.value],
            });
        } else if (!checked) {
            const newTags = myPost.tags.filter((tag) => tag != ev.target.value);
            setMyPost({ ...myPost, [KEY]: newTags });
        }

        const newCheckedTagList = checkedTagList.map((isChecked, index) => {
            if (index == ev.target.getAttribute("tagindex")) {
                return !isChecked;
            }
            return isChecked;

        });

        setCheckedTagList(newCheckedTagList);
        if (ev.target.type === "checkbox") {
            value = ev.target.checked
        } else {
            value = ev.target.value
        }
        setMyPost({ ...myPost, [ev.target.name]: value });


    }

    function handleSubmit(ev) {
        ev.preventDefault()
        const newPostList = [...postList];
        newPostList.push(myPost)
        //console.log(myPost.title)
        //console.log(myPost.content)
        setPostList([...postList, myPost]);
        //setMyPost(newPost);
        console.log("-1-title: " + myPost.title + " -2-iamge: " + myPost.image + " -3-content: " + myPost.content + " -4-tags: " + myPost.tags + " -5-published: " + myPost.published)

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
                        <span className="form-title">New Post Title</span>
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

                {/* post image */}
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label"><span className="form-title">New Post Image</span></label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name="image"
                        onChange={(ev) => handleImput(ev)} />
                </div>

                {/* post content */}
                <div className="mb-3">
                    <label
                        htmlFor="postContent"
                        className="form-label">
                        <span className="form-title">New Post Content</span>
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
                <br />
                {/*post tag */}
                <p className="form-title">New Post Tags</p>
                <ul className="d-flex flex-wrap tag-list">
                    {tagList.map((tag, index) => (

                        < CheckTagComponent key={`tagOption-${index}`} tag={tag} handleImput={handleImput} />
                    ))}

                </ul>
                <br />
                {/*post publishing */}
                <p className="form-title">New Post Publishing Status </p>
                <div className="d-flex" >
                    <p className="go-to-dx">Is new post published?</p>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={myPost.published}
                        id="flexCheckDefault"
                        onChange={(ev) => handleImput(ev)}
                        name="published"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        yes
                    </label>

                </div>
                <br />

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </section>
    )
}

export default MyForm;