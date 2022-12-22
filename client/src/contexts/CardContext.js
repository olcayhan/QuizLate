import React, { useContext, useState, useEffect } from "react";
import { addCardtoDB, getCardtoDB, deleteCardtoDB, addWordtoDB, getWordtoDB, deleteWordtoDB, deleteAllWordstoDB, setSignintoDB, setSignuptoDB } from "../axios";




const CardContext = React.createContext();

export function useCards() {
    return useContext(CardContext)
}


export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [words, setWords] = useState([])
    const [userID, setUserID] = useState(localStorage.getItem("userID"))
    const [loginUser, setLoginUser] = useState(localStorage.getItem("login"))
    console.log(userID)
    const [isRender, setRender] = useState(false)
    useEffect(() => {

        getCardtoDB()
            .then((res) => { setCards(res.data.other) })
            .catch((err) => { console.log(err) })


        setRender(false);

    }, [isRender])

    useEffect(() => {

        getWordtoDB()
            .then((res) => { setWords(res.data.other) })
            .catch((err) => { console.log(err) })


        setRender(false);

    }, [isRender])


    // console.log(words)


    /*  ----------------------------- SIGN IN AND OUT ----------------------- */


    function setSignin(formData) {
        setSignintoDB(formData)
            .then((res) => {
                localStorage.setItem("userID", res.data.user._id);
                localStorage.setItem("login", true);
                setLoginUser(true)
                setUserID(res.data.user._id)


            })
            .catch((err) => { console.log(err) });
    }
    function setSignup(formData) {
        setSignuptoDB(formData)
            .then((res) => { alert(res.data.message) })
            .catch((err) => { console.log(err) });

    }





    function addCard(formData) {
        addCardtoDB(formData)
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
        setRender(true);
    }

    function deleteCard(id) {
        deleteCardtoDB({ id })
            .then(res => console.log(res))
            .catch((e) => console.log(e))



        deleteAllWordstoDB({ id })
            .then(res => console.log(res))
            .catch((e) => console.log(e))


        setRender(true);
    }

    function addWords(formData) {
        addWordtoDB(formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setRender(true);
    }

    function deleteWords(id) {
        deleteWordtoDB({ id })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setRender(true);

    }

    function getWords(cardID) {
        return words.filter(word => word.cardID === cardID)
    }


    return <CardContext.Provider value={{
        addCard,
        deleteCard,
        addWords,
        deleteWords,
        getWords,
        setSignin,
        setSignup,
        setLoginUser,
        userID,
        loginUser,
        cards,
        words
    }}>
        {children}
    </CardContext.Provider>
} 