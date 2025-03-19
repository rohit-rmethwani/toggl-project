import getData from "./getData";

const postData = (data) => {
    localStorage.setItem("Toggl", JSON.stringify(data));
}

export default postData;