import getData from "./getData";

const getIDData = (id) => {
    var returnData;
    getData().map((data) => {
        if(data.id == id){
            returnData = data;
        }
    });
    return returnData;
}

export default getIDData;