import React from 'react'
import { Card, Stack, Button } from 'react-bootstrap'
import { useCards } from '../contexts/CardContext'

export default function NewCard({ id, name, description, onShowWords, onShowPair }) {

    const { deleteCard } = useCards()

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className="me-2">{name}</div>
                    <Button className='d-flex align-items-baseline' variant="danger" onClick={() => deleteCard(id)}>Delete</Button>
                </Card.Title>

                <div className="me-2 fs-">{description}</div>

                <Stack direction="horizontal" gap="4" className="mt-4" >
                    <Button variant='outline-primary' onClick={() => onShowWords(id)}>Words</Button>
                    <Button variant='outline-success' onClick={() => onShowPair(id)}>Pair</Button>
                </Stack>

            </Card.Body>

        </Card>
    )
}
