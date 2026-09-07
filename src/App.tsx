import { useState } from 'react'
import Dino from './components/Dino'
import './App.css'

const dinosauresListe = [
  {
    name: "Jojo Le Papi Dinosaure",
    image:
      "./PapiDinosaure.png",
  },
  {
    name: "Jojo Le Dinosaure Antique",
    image:
      "./DinosaureAntique.png",
  },
  {
    name: "Jojo Le Dinosaure Nugget",
    image:
      "./DinosaureNugget.png",
  },
  {
    name: "Jojo Le Dinosaure Roux",
    image:
      "./DinosaureRoux.png",
  },
  {
    name: "Jojo Le Diplodocus",
    image:
      "./DiplodocusRoux.png",
  }
];

function App() {
  const [dinosauresName, setDinosauresName] = useState("Jojo Le Papi Dinosaure");
  const dino = dinosauresListe.find((dino) => dino.name === dinosauresName);

  if (dino === undefined) {
    return <></>;
  }

  return (
    <>
      <nav>
      {dinosauresListe.map((dino) => (
        <button key={dino.name} onClick={() => setDinosauresName(dino.name)}>
          {dino.name}
        </button>
      ))}
      </nav>
      <Dino dinosaures={dino} />
    </>
  );
}

export default App