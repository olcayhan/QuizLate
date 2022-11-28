import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddCard from "./components/AddCards";
import ShowWords from "./components/ShowWords";
import ShowPair from "./components/ShowPair";
import NewCard from "./components/NewCard";
import { useCards } from './contexts/CardContext'


export default function App() {
  const [isShow, setIsShow] = useState(false)
  const [isShowWord, setIsShowWord] = useState(false)
  const [isShowPair, setIsShowPair] = useState(false)


  const [vievWordCardId, setViewWordCardId] = useState()
  const { cards } = useCards()


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

