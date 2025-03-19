import getData from "./getData";
import postData from "./postData";

const removeData = (id) => {
    postData(getData().filter(data=>data.id !== id));
}

export default removeData;