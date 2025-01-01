import { useState } from "react";
import PublishedPostComponent from "./PublishedPostComponent";
import CardComponent from "./CardComponent";
import MyForm from "./MyForm";

const tagList = [
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

// const bestPost = {
//     id: 2,
//     title: "Carlo lorem ipsum",
//     image: 'https://picsum.photos/600/400',
//     content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
//     tags: ["js", "css"],
// };

function MainComponent() {
    const [publishedPosts, setPublishedPosts] = useState(PublishedPostComponent());

    function deleteItem(id) {
        setPublishedPosts(publishedPosts.filter((el) => el.id !== id))
    }
    //console.log(publishedPosts)

    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    {publishedPosts.map((post) => (
                        <CardComponent
                            key={`card-${post.id}`}
                            element={post}
                            onDelete={() => { deleteItem(publishedPosts.id) }}
                        />
                    ))}

                </div>
                <MyForm tags={tagList} />
            </main>

            {/* <aside>
                <CardComponent key={`best-card-${bestPost.id}`} element={bestPost} />
            </aside> */}
        </>
    )
}

export default MainComponent;