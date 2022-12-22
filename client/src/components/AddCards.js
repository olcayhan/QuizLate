import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useCards } from '../contexts/CardContext'

export default function AddCards({ show, handleClose }) {
    const nameRef = useRef()
    const descRef = useRef()
    const { addCard, userID } = useCards()

    function handleSubmit(e) {
        e.preventDefault();
        addCard(
            {
                name: nameRef.current.value,
                desc: descRef.current.value,
                userID: userID,
            }
        )
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title> New Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descRef} type="text" required />
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit">Add</Button>

                    </div>

                </Modal.Body>
            </Form>
        </Modal>
    )
}
