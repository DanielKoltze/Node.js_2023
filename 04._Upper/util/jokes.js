import Sentiment from "sentiment"
import fetch from "node-fetch";
const sentiment = new Sentiment()

export default async function getJoke(){
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    const res = await fetch(URL)
    const data = await res.json()
    const jokeToAnalyze = data.joke || `${data.setup} ${data.delivery}`
    const { score } = sentiment.analyze(jokeToAnalyze)
    if(score < 0){
        // I don't like that joke
        return await getJoke()
    }
    return data
}
//console.log(await getJoke())






