import axios from "axios";

const HTTP = axios.create({
    baseURL: "http://localhost:5000/"
})

export async function addCardtoDB(formData) {
    return await HTTP.post("/cards/addcard", formData);
}

export async function getCardtoDB() {
    return await HTTP.get("/cards/getcard");
}

export async function deleteCardtoDB(id) {
    console.log(id)
    return await HTTP.post("/cards/deletecard", id);
}


export async function addWordtoDB(formData) {
    return await HTTP.post("/words/addword", formData);
}

export async function getWordtoDB() {
    return await HTTP.get("/words/getword");
}

export async function deleteWordtoDB(id) {

    return await HTTP.post("/words/deleteword", id);

}

export async function deleteAllWordstoDB(id) {

    return await HTTP.post("/words/deleteallword", id);

}