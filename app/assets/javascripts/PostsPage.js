'use strict';

// console.log("hi")

const p = React.createElement;

class PostPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    list: []
  }
}

// call to API
getData() {
  const url = '/index_API'

  fetch(url)
  .then(response => response.json())
  .then(result => {
    // grabs all data in the post array
    console.log(result)
    //grab data from 1st index in the array with the message
    console.log(result[0].message)
    console.log(result[1].message)
  })
}

render() {
  return (
    'button',
    { onClick: () => this.getData()},
    'getData'
  );
}

}

const pageContainer = document.getElementById('post-page');
ReactDOM.render(p(PostPage), pageContainer);