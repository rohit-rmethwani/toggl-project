const getData = () => {
    return JSON.parse(localStorage.getItem("Toggl"));
}

export default getData;