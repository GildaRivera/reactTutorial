
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Gilda',
    lastName: 'Rivera'
  };
  
  export  function Element() {
   return <>
    <h1>
      Hello, {formatName(user)}!
    </h1>
<a href="https://www.reactjs.org"> link </a>;
    
    </>}
  
  