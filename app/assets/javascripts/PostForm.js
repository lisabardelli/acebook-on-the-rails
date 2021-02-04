"use strict";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    fetch("/posts/create", {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
      method: "POST",
      body: JSON.stringify({
        message: this.state.message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("er", err);
      });
  }

  render() {
    return React.createElement(
      "form",
      {
        onSubmit: this.handleSubmit,
      },
      React.createElement(
        "label",
        null,
        "Post:",
        React.createElement("textarea", {
          message: this.state.value,
          onChange: this.handleChange,
        })
      ),
      React.createElement("input", {
        type: "submit",
        value: "Submit",
      })
    );
  }
}

ReactDOM.render(
  React.createElement(PostForm, null),
  document.getElementById("post-form")
);
