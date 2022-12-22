import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddCard from "./AddCards";
import ShowWords from "./ShowWords";
import ShowPair from "./ShowPair";
import NewCard from "./NewCard";
import { useCards } from '../contexts/CardContext'
import { useNavigate } from "react-router-dom"


export default function Card() {
  const [isShow, setIsShow] = useState(false)
  const [isShowWord, setIsShowWord] = useState(false)
  const [isShowPair, setIsShowPair] = useState(false)


  const [vievWordCardId, setViewWordCardId] = useState()
  const { cards, setLoginUser } = useCards()
  const navigate = useNavigate()


  function onShowWords(cardId) {
    setIsShowWord(true)
    setViewWordCardId(cardId)
  }


  function onShowPair(cardId) {
    setIsShowPair(true)
    setViewWordCardId(cardId)
  }

  return (
    <>

      <Container className="App my-4">

        <Stack direction="horizontal" gap="2" className="mb-3">
          <h1 className="me-auto">CardWord</h1>
          <Button variant="primary" onClick={() => setIsShow(true)}> Add New Card </Button>
          <Button variant="danger" onClick={() => {
            setLoginUser(false)
            navigate("/")
            localStorage.removeItem("userID")
            localStorage.removeItem("login")
          }}>Sign out</Button>
        </Stack>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "1rem", alignItems: "flex-start" }}>
          {cards?.map(card => {
            return (
              < NewCard
                id={card._id}
                name={card.name}
                description={card.desc}
                onShowWords={onShowWords}
                onShowPair={onShowPair}
              />)
          })

          }
        </div>
      </Container>

      <AddCard
        show={isShow}
        handleClose={() => setIsShow(false)} />

      <ShowWords
        show={isShowWord}
        cardId={vievWordCardId}
        handleClose={() => setIsShowWord(false)}
      />

      <ShowPair
        show={isShowPair}
        cardId={vievWordCardId}
        handleClose={() => setIsShowPair(false)}
      />



    </>

  );
}

