import posts from "../data/posts";
function TagList() {
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

    });
    //console.log(tagList)
    return tagList
}
//const test = TagList();
//console.log(test);
export default TagList;