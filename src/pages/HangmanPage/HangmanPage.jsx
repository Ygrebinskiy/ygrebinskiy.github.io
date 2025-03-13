import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"
import { getFarewellText, getRandomWord } from "./utils"
import Confetti from "react-confetti"
import { useWindowSize } from 'react-use'
import HangmanStyle from './../../Hangman.module.css'
import Navbar from "../../components/Navbar"

export default function AssemblyEndgame() {
    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const numGuessesLeft = languages.length - 1
    const wrongGuessCount =
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon =
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= numGuessesLeft
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    const {width, height} = useWindowSize()

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }

        return (
            <span
                className={`${HangmanStyle.HangmanSpan} ${HangmanStyle.chip} ${isLanguageLost && HangmanStyle.lost}`}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        
        return (
            <span key={index} className={`${HangmanStyle.HangmanSpan} ${isGameLost && !guessedLetters.includes(letter) && HangmanStyle.missedLetter}`}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        return (
            <button
                className={`${isCorrect && HangmanStyle.correct} ${isWrong && HangmanStyle.wrong}`}
                key={letter}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("gameStatus", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className={HangmanStyle.farewellMessage}>
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }

        return null
    }

    return (
        <>
            <Navbar />
            <main className={HangmanStyle.HangmanBody}>
                <header className={HangmanStyle.HangmanHeader}>
                    <h1>Assembly: Endgame</h1>
                    <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!</p>
                </header>
                
                <section className={HangmanStyle.HangmanSection}>
                    {isGameWon &&
                    <Confetti width={width} height={height}
                    /> }
                </section>
                
                <section
                    className={`${HangmanStyle.HangmanSection} ${HangmanStyle.gameStatus} ${isGameWon && HangmanStyle.won} ${isGameLost && HangmanStyle.lost} ${!isGameOver && isLastGuessIncorrect && HangmanStyle.farewell   }`}
                >
                    {renderGameStatus()}
                </section>

                <section className={`${HangmanStyle.HangmanSection} ${HangmanStyle.languageChips}`}>
                    {languageElements}
                </section>

                <section className={`${HangmanStyle.HangmanSection} ${HangmanStyle.word}`}>
                    {letterElements}
                </section>

                <section className={`${HangmanStyle.HangmanSection} ${HangmanStyle.keyboard}`}>
                    {keyboardElements}
                </section>

                {isGameOver &&
                    <button
                        className={`${HangmanStyle.HangmanButton} ${HangmanStyle.newGame}`}
                        onClick={startNewGame}
                    >New Game</button>}
            </main>
        </>
    )
}
