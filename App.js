import React, { Component } from 'react';
import './App.css';
import './Logo/Logo.js';
import './Logo/logo.css';
import Input from './Input/Input';
import Ara from './Ara/Ara';
import './Ara/Ara.css';
import Over from './Over/Over';
import './Over/Over.css';
import Form from './Form/Form';
import './Form/Form.css';
   
   
class App extends Component {
  state = {
email: {
  elementType: 'input',
  elementConfig: {
  placeholder: 'Email',
  type: 'email'}
}

  }
  render () {
let form = (
  <form>
    <Input />
    <Input />
  </form>
);
      return  (
      <div id="App">
        <div className="every">
       <p id="heads">Linked <svg width="18" height="19" id="file" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.875 18H0.476562V5.32031H3.875V18ZM0.277344 2.03906C0.277344 1.53125 0.445312 1.11328 0.78125 0.785156C1.125 0.457031 1.58984 0.292969 2.17578 0.292969C2.75391 0.292969 3.21484 0.457031 3.55859 0.785156C3.90234 1.11328 4.07422 1.53125 4.07422 2.03906C4.07422 2.55469 3.89844 2.97656 3.54688 3.30469C3.20312 3.63281 2.74609 3.79688 2.17578 3.79688C1.60547 3.79688 1.14453 3.63281 0.792969 3.30469C0.449219 2.97656 0.277344 2.55469 0.277344 2.03906ZM9.79297 5.32031L9.89844 6.78516C10.8047 5.65234 12.0195 5.08594 13.543 5.08594C14.8867 5.08594 15.8867 5.48047 16.543 6.26953C17.1992 7.05859 17.5352 8.23828 17.5508 9.80859V18H14.1641V9.89062C14.1641 9.17188 14.0078 8.65234 13.6953 8.33203C13.3828 8.00391 12.8633 7.83984 12.1367 7.83984C11.1836 7.83984 10.4688 8.24609 9.99219 9.05859V18H6.60547V5.32031H9.79297Z" fill="#036EA6"/>
</svg>
</p>
<input className="ddd" type='email' placeholder="Email" required></input>
<input id="input-2" className="ddd" type='email' placeholder="Password" required></input>
<button className="ree" >Sign Up</button>  
<a href=" ">Forgot Password?</a>
</div>
<Ara className="bod" />
<Over className="over" />
<Form />
      </div>
      
      );


      

  }
}


export default App;
