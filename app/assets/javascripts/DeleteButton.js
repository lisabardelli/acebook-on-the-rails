const d = React.createElement;
class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  deletePost(event) {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    event.preventDefault();
    fetch(`/posts/delete/${this.props.id}`, {
      headers: {
        "X-CSRF-Token": csrf,
        "Content-Type": "application/json",
      },
      method: "DELETE",
      // body: JSON.stringify({ id: this.props.id }),
    }).then(() => {
      this.props.onDeleteSuccess(this.props.id);
    });
  }

  render() {
    console.log(this.props);
    return d(
      "button",
      { onClick: (event) => this.deletePost(event) },
      "Delete"
    );
  }
}
