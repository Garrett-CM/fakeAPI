//create new variable and add new XML obj to it
let request = new XMLHttpRequest()

//open a new connection using the GET req on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

request.onload = function(){
    //acces json data
}

//send req
request.send()

//alt, using fetch API and Async/await
// function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
// }


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response)=> response.json())
//     .then((json)=>console.log(json));