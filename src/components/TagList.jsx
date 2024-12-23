import posts from "../data/posts";
function Taglist() {
    const tagList = [];
    const allTags = posts.forEach(element => {
        //console.log(element);

        element.tags.filter((tag) => {

            if (tagList.includes(tag)) {

            } else {
                //console.log(tag);
                tagList.push(tag);
            }
        });

        return tagList
    });
    console.log(tagList)
    return allTags
}

export default Taglist