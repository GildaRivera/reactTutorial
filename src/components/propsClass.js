import {React,ReactDOM} from "react";
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

  export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  

  export function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

 export  function Comment2(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          
        </div>
      </div>
    );
  }

  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img className="Avatar"
           src={props.user.avatarUrl}
           alt={props.user.name} />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
  export function Test(props){
      return <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
  }

   