// let data = require("/prompts.json")
// console.log(data)

let characters = ["a man", "a woman", "a dog"]
let settings = ["a house", "a forest", "a desert"]
let problems = ["is hungry", "is tired", "is bored"]
let times = ["in present day", "in the past", "in the future", "in an alternate timeline"]

function get_prompt() {
    document.getElementById("prompt").innerHTML = `Character: ${characters[Math.floor(Math.random() * characters.length)]}<br> 
    Setting: ${settings[Math.floor(Math.random() * settings.length)]}<br>
    Problem: ${problems[Math.floor(Math.random() * problems.length)]}<br>
    Time: ${times[Math.floor(Math.random() * times.length)]}`
}