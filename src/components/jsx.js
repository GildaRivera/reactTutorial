export default function GetGreeting(props) {
    if (props.user) {
      return <h1>Hello, {props.user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  