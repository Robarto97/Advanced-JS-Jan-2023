function wordsUpper(str){
    const regex = /[A-z0-9]+/g;
    let result = str.match(regex);
    console.log(result.join(', ').toUpperCase());
}


wordsUpper('Hi, how are you?')
wordsUpper('hello')