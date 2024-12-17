import { useState } from "react";
function MyForm() {
    const [myTitle, setMyTitle] = useState("")
    function handleSubmit(ev) {
        ev.preventDefault();
        console.log(myTitle)
    }

    return (
        <section>
            <h2>
                MAKE A NEW POST
            </h2>
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
                        aria-describedby="postTitleHelp"
                        value={myTitle}
                        onChange={(ev) => setMyTitle(ev.target.value)}
                    />

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </section>
    )
}

export default MyForm;