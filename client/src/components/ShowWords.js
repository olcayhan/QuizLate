import React, { useRef } from 'react'
import { Form, Modal, Button, Stack } from 'react-bootstrap'
import { useCards } from '../contexts/CardContext'

export default function ShowWords({ show, handleClose, cardId }) {
    const englishRef = useRef()
    const turkishRef = useRef()

    const { addWords, getWords, deleteWords } = useCards()
    const words = getWords(cardId)

    function handleSubmit(e) {
        e.preventDefault();
        addWords(
            {
                turkish: turkishRef.current.value,
                english: englishRef.current.value,
                cardID: cardId,
            }
        )
        englishRef.current.value = ""
        turkishRef.current.value = ""
    }

    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title> Words</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Stack direction='horizontal' gap="3">
                        <Form.Group className='mb-3' controlId='english'>
                            <Form.Label>English</Form.Label>
                            <Form.Control ref={englishRef} type="text" required />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='turkish'>
                            <Form.Label>Turkish</Form.Label>
                            <Form.Control ref={turkishRef} type="text" required />
                        </Form.Group>

                        <div className='d-flex justify-content-end mt-3'>
                            <Button variant="primary" type="submit">Add</Button>
                        </div>
                    </Stack>
                </Form>

                {words?.map((word) => {
                    return (
                        <Stack direction="horizontal" gap="3">
                            <p className='ms-5'>{word.english}</p>
                            <p className='m-auto'>{word.turkish}</p>
                            <Button size="sm" onClick={() => deleteWords(word._id)} >X</Button>
                        </Stack>
                    )
                }
                )}





            </Modal.Body>

        </Modal>
    )
}