

//promemoria: aggiungere alla funzione card controllers una modo per inserire in una array dedicata ad ogni post

function PublishedPostComponent({ posts }) {
    const postList = [...posts];
    console.log(postList);

    const truePosts = postList.filter((element) => element.published === true);
    console.log(truePosts);
};


export default PublishedPostComponent;