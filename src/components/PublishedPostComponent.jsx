

//promemoria: aggiungere alla funzione card controllers una modo per inserire in una array dedicata ad ogni post

function PublishedPostComponent({ posts }) {
    const postList = [...posts];
    console.log(postList);
    const truePosts = [];
    postList.filter((element) => {
        if (element.published === true) {
            truePosts.push(element);
        }
    });
    console.log(truePosts);
    return truePosts;
};


export default PublishedPostComponent;