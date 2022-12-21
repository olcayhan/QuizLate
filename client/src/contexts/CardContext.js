import React, { useContext, useState, useEffect } from "react";
import { addCardtoDB, getCardtoDB, deleteCardtoDB, addWordtoDB, getWordtoDB, deleteWordtoDB, deleteAllWordstoDB, setSignintoDB } from "../axios";




const CardContext = React.createContext();

export function useCards() {
    return useContext(CardContext)
}


export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [words, setWords] = useState([])

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

    function addCard({ name, desc }) {
        addCardtoDB({ name, desc })
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

    function addWords({ turkish, english, cardID }) {
        addWordtoDB({ turkish, english, cardID })
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
    function setSignin(formData) {
        setSignintoDB(formData)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) });
    }

    return <CardContext.Provider value={{
        addCard,
        deleteCard,
        addWords,
        deleteWords,
        getWords,
        setSignin,
        cards,
        words
    }}>
        {children}
    </CardContext.Provider>
} 