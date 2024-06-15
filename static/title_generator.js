let promptPosition1 = ["Power", "Lives", "Reign"]
let promptPosition2 = ["Dragons", "Night", "the Sea"]

function get_title() {
    document.getElementById("title").innerHTML = `The ${promptPosition1[Math.floor(Math.random() * promptPosition1.length)]} of ${promptPosition2[Math.floor(Math.random() * promptPosition2.length)]}`
}