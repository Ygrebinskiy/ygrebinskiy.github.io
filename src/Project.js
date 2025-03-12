import TenziImage from "./assets/Tenzi.jpg"
import HangMan from "./assets/Hangman2.png"
import Heatmap from "./assets/Heatmap.jpeg"
import Wordle from "./assets/wordle.webp"
import image5 from "./assets/5.png"

export const projectsData = [
    {
        image: TenziImage,
        title: "Tenzies",
        description: "I built the game Tenzies for fun! It's a simple dice-rolling game that helped build my skills with React, including using states, conditional rendering, and arrow functions.",
        technologies: ["HTML", "CSS", "React"],
        windowURL: "tenzies"
    },
    {
        image: HangMan,
        title: "Assembly: Endgame",
        description: "Spell the word, or spell your doom! Assembly: Endgame is a hangman analogue where you need to guess the word before you are stuck coding in Assembly forever!",
        technologies: ["HTML", "CSS", "React"],
        windowURL: "endgame"
    },
    {
        image: Heatmap,
        title: "WaniKani - Learning Heatmap",
        description: "How well am I learning Japanese? This nifty tool pulls API data from WaniKani and transforms it into quantifiable knowledge at a glance. Tracking your progress has never been easier!",
        technologies: ["Python", "AWS", "React"],
        windowURL: ""
    }, 
    {
        image: Wordle,
        title: "Wordle",
        description: "Want to practice your Wordle skills in your downtime? This is the place to do it! ",
        technologies: ["HTML", "CSS", "React"],
        windowURL: ""
    },
    {
        image: image5,
        title: "Project 5",
        description: "Sample description",
        technologies: ["HTML", "CSS", "React"],
        windowURL: ""
    }
]