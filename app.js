const wordObj = {
    subject: ["my", "your", "their", "his", "her"],
    object: ["dad", "mom", "dog", "cat", "teacher", "son", "daughter"],
    emotion: ["hates", "loves", "likes", "loathes", "enjoys"],
    verb: ["throwing", "eating", "watching", "jumping on", "running to", "sleeping on"],
    item: ["tacos", "video tapes", "pillows", "base balls", "trampolines", "the dinner table"]
}

const getRandomWord = (wordArr) => {
    const rand = Math.floor(Math.random() * wordArr.length)
    return wordArr[rand];
}


const makeRandomSentence = (wordObj) => {
    let getSubject = getRandomWord(wordObj.subject);
    let getObject = getRandomWord(wordObj.object);
    let getEmotion = getRandomWord(wordObj.emotion);
    let getVerb = getRandomWord(wordObj.verb);
    let getItem = getRandomWord(wordObj.item);

    return `${getSubject} ${getObject} ${getEmotion} ${getVerb} ${getItem}`
}

let randomSentence = makeRandomSentence(wordObj)

console.log(randomSentence)
