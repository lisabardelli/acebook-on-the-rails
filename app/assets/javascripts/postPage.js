'use strict';
console.log("im in posts")
var postsDiv = document.getElementById('posts-list')
const url ='/index_Api'

fetch(url)
.then(response => response.json())
.then(data => {
 
    console.log('data')
    console.log(data)
    data.forEach(post => {
        let postDiv= document.createElement('div')
        let html= `
        <p>${post.message}</p>
        <p>added at ${post.created_at}</p>
        <p>added by ${post.username}</p>
        `
        postDiv.innerHTML = html
        postsDiv.appendChild(postDiv)
    })
}
)


