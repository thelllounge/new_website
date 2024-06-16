let promptPosition1Options = ["Power", "Lives", "Reign", "Court", "Dance", "Night"]
let promptPosition2Options = ["Dragons", "Night", "the Sea", "Love", "Death"]
let promptPosition3Options = ["Died", "Conquered", "Won", "Lost", "Was Silenced"]

function get_prompt_items() {
    promptPosition1 = promptPosition1Options[Math.floor(Math.random() * promptPosition1Options.length)]
    promptPosition2 = promptPosition2Options[Math.floor(Math.random() * promptPosition2Options.length)]
    promptPosition3 = promptPosition3Options[Math.floor(Math.random() * promptPosition3Options.length)]
    return [promptPosition1, promptPosition2, promptPosition3]
}


function get_title() {
//    promptPosition1 = promptPosition1Options[Math.floor(Math.random() * promptPosition1Options.length)]
//    promptPosition2 = promptPosition2Options[Math.floor(Math.random() * promptPosition2Options.length)]

    let promptItems = get_prompt_items()
    Position1 = promptItems[0]
    Position2 = promptItems[1]
    Position3 = promptItems[2]

    prompts = [`The ${Position1} of ${Position2}`,
                `The ${Position1}`,
                `The ${Position2}`,
                `The Night ${Position2} ${Position3}`]

    prompt = prompts[Math.floor(Math.random() * prompts.length)]
    document.getElementById("title").innerHTML = prompt
}