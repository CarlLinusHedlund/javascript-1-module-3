// example 1 
console.log(document.location);


//how to get the query param

console.log(document.location.search); //?school=noroff

const queryString = document.location.search;

//in order to get the value
const params = new URLSearchParams(queryString)

console.log(params);
console.log(params.get("school"))

const mySchoolParam = (params.get("school"));


// i want to check that i have a param called school

if (!params.has("school")){
    console.log("i dont have the param school")
}
    // console.log i have a param
else if (params.get("school") === "noroff"){
    console.log("okay the param is Noroff")
}

// i want to check that this param is equal to Noroff
    //Okay the param is noroff
else {
    document.location.href = "second.html"
}
//else redirect to another page


