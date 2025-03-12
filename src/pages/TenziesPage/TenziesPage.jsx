import { useState } from "react"
import Die from "./../../components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import TenziesStyle from "./../../Tenzies.module.css"
import NavBar from "../../components/Navbar"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const [numRolls, setNumRolls] = useState(0)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,  
                id: nanoid()
            }))
    }
    

    function rollDice() {
        setNumRolls(numRolls + 1)
        if (gameWon) {
            setDice(() => generateAllNewDice())
        } else {
        setDice(oldDice => oldDice.map(die =>
            die.isHeld ?
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
        ))
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <>
            <NavBar />
            <main className={TenziesStyle.tenziesBody}>
                <div className={TenziesStyle.gameBox}>
                    {gameWon && <Confetti />}
                    <h1 className={TenziesStyle.title}>Tenzies</h1>
                    <p className={TenziesStyle.instructions}>{gameWon ? `You did it! And it only took you ${numRolls} rolls. Click on 'New Game' to play another one!` : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
                    <div className={TenziesStyle.diceContainer}>
                        {diceElements}
                    </div>
                    <button className={TenziesStyle.rollDice} onClick={rollDice}>
                        {gameWon ? "New Game" : "Roll"}
                    </button>
                </div>
            </main>
        </>
    )
}