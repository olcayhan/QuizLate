import React, { useEffect, useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useCards } from '../contexts/CardContext'

export default function ShowPair({ show, handleClose, cardId }) {
    const { getWords } = useCards()
    const words = getWords({ cardId })
    const [wordTemp, setWordTemp] = useState(words)
    let fullSelected = []

    wordTemp.sort(() => Math.random() - 0.5)

    useEffect(() => {
        setWordTemp(words)
    }, [show])

    let finalised = [...words]
    function checkCorrect(e) {

        e.target.style.backgroundColor = "#dc3545"

        fullSelected.push(e.target)

        if (fullSelected.length === 2) {
            let first = fullSelected[0]
            let second = fullSelected[1]



            first.style.background = "#0d6efd"
            second.style.background = "#0d6efd"

            if (first === second) {
                alert("please don't click same button")
            }
            else if (first.value === second.value) {
                finalised = finalised.filter((item) => first.value && second.value !== item.id)
                first.style.visibility = "hidden";
                second.style.visibility = "hidden";
            }
            if (finalised.length === 0) {
                alert("congrulations!")
            }


            fullSelected = []
        }


    }


    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Pair</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {wordTemp.map((item) => {
                        return <Button className='w-25 m-3' onClick={checkCorrect} value={item.id}>{item.turkish}</Button>
                    })}

                    {wordTemp.map((item) => {
                        return <Button className='w-25 m-3' onClick={checkCorrect} value={item.id}>{item.english}</Button>
                    })}
                </Modal.Body>
            </Form>
        </Modal>
    )
}


