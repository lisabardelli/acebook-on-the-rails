const postComp = React.createElement;

class Post extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return postComp(
      // React.createElement(
      //   type,
      //   [props],
      //   [...children]
      // )
      "div", //type of element.it can also be react component ----> call this script before PostPage
      { className: "p-3 border border-dark" }, //html tag --> attribute of the tag; react component --> props
      [
        postComp("p", undefined, this.props.message),
        postComp("p", undefined, `created at ${this.props.created_at}`),
        postComp("p", undefined, `created by ${this.props.username}`),
        postComp(DeleteButton, this.props, undefined),
        ///like button --> create another class
      ] // content of the post --> 3 p element children
    );
  }
}
