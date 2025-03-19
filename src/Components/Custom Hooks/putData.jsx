import getData from "./getData";

const putData = (updatedDataObj) => {
    console.log("From put hook:");
    console.log(updatedDataObj);
    const updatedData = getData().map((dataObj)=>{
        return dataObj.id === updatedDataObj.id ? {id: updatedDataObj.id, name: updatedDataObj.name, description: updatedDataObj.description, price_per_hour: updatedDataObj.price_per_hour, status: updatedDataObj.status, elapsed: updatedDataObj.elapsed} : dataObj
    });
    localStorage.setItem("Toggl", JSON.stringify(updatedData));
}

export default putData;