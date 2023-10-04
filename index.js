// code your solution here
function saturdayFun(activity) {

    if (activity === undefined) {
        activity = "roller-skate"
    } else {let activity =  activity}
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity) {

    if (activity === undefined) {
        activity = "go to the office"
    } else {let activity =  activity}
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return (function(quality="special") {return `You are ${visualFlair}${quality}${visualFlair}!`})
}
