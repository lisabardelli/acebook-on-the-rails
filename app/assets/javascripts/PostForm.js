'use strict';

// const p = React.createElement;

// class PostForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write your post.'
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A post was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Post:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(
//   <PostForm />,
//   document.getElementById('post-form')
// );

//   const pageContainer = document.getElementById('post-form');
// ReactDOM.render(p(PostForm), pageContainer);



class MyForm extends React.Component {
  form() {
    let textarea = React.createElement('textarea', null, `Hello ${this.props.toWhat}`)
    let submitButton = React.createElement('button', null, 'Submit Post')
    let postForm = React.createElement('div')

    postForm.appendChild(textarea)
    postForm.appendChild(submitButton)
  }
  render() {
    this.form()
  }
}
ReactDOM.render(
  React.createElement(MyForm, {toWhat: 'World'}, null),
    document.getElementById('root')
  );
