//Program to findout frequency of words into given string

function wordFrequency(phrase) {
    let freq = {}
    let wordArray = phrase.split(' ')
    console.log('Array of words from phrase: ', wordArray)
    for (let word of wordArray) {
        if (word in freq){
            freq[word] = freq[word]+1
        }
        else {
            freq[word] = 1
        }
    }
    return freq
}

console.log(wordFrequency('Hello this is Hello is'))
