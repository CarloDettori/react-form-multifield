

import CardComponent from "./CardComponent";

import MyForm from "./myForm";


// const bestPost = {
//     id: 2,
//     title: "Carlo lorem ipsum",
//     image: 'https://picsum.photos/600/400',
//     content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
//     tags: ["js", "css"],
// };

function MainComponent({ pubPosts }) {
    console.log(pubPosts)

    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    {pubPosts.map((post) => (
                        <CardComponent key={`card-${post.id}`} element={post} />
                    ))}

                </div>
                <MyForm posts={<TagList />} />
            </main>

            {/* <aside>
                <CardComponent key={`best-card-${bestPost.id}`} element={bestPost} />
            </aside> */}
        </>
    )
}

export default MainComponent;