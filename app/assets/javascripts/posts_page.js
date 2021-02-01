console.log("hi")

// call to API
var url = '/index_API'
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// use data to show posts on page
