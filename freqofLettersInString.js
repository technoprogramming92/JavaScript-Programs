//Program to find out frequency of letters within string

function ltrFreq(phrase) {
    console.log('Phrase: ', phrase)
    let freq = {}
    for (const letter of phrase){
        if(letter in freq){
            freq[letter]= freq[letter]+1
        }
        else{
            freq[letter]=1
        }
    }
    return freq
}

console.log(ltrFreq('Hello World'))
