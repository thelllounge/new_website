let characters = ["main character", "secondary character", "tertiary character"]
let actions = ["Kill", "Change", "Introduce", "Develop", "Give more backstory to"]
let character_pairs = [["main character", "secondary character"], ["main character", "tertiary character"], ["secondary character", "main character"], ["secondary character", "tertiary character"], ["tertiary character", "secondary character"], ["tertiary character", "main character"]]

function breaker() {
    let action = actions[Math.floor(Math.random() * actions.length)]
    if(action == "Change"){
        let character_pair = character_pairs[Math.floor(Math.random() * character_pairs.length)]
        document.getElementById("action").innerHTML = `Change ${character_pair[0]} into ${character_pair[1]}`
    }
    else{
        let character = characters[Math.floor(Math.random() * characters.length)]
        document.getElementById("action").innerHTML = `${action} a ${character}`
    }
}