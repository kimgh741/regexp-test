const str = `
010-1234-1234
thesecond@gamil.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
const regexp = /(?<=@).{1,}/g  //  \ 기호를 이용해서 .이라는 문자를 찾을 수 있도록 표현 할 수 있다. $앞에 있는 하나의 단어로 끝나는 부분을 찾아서 일치 시킨다.  
console.log(str.match(regexp))

