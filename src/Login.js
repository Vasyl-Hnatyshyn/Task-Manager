import React from 'react';
import fire from './config/fire';

import './Login.css';


class Login extends React.Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:""
            
            
        }
    }
    
logIn=(e)=>{
    e.preventDefault();
    
     
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{
        console.log(a)
    }).catch((err)=>{
        console.log(err)
    })
    
};
  
        
singUp=(e)=>{
    e.preventDefault();
   
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{
        console.log(a)
    }).catch((err)=>{
        console.log(err)
    })
    
};
    
    
inputChanges = (e) => {
    
    this.setState({
        [e.target.name]:`${e.target.value}`
    })
    
    localStorage.setItem('name',`${this.state.email}`)
   
}    
    
    


    
    
render(){
    
    return   (<div  id="box" >
    
        <form  >
                
             <p>  Log In  </p>

            <input 
              name= "email"
              type = "email"  
              placeholder = " Email..."
              id="email" 
              value= {this.state.email}
              onChange={this.inputChanges}  / >
                
            <input 
              name = "password"
              type = "password"  
              placeholder = "Password..."
              id="password" 
              value= {this.state.password}
              onChange={this.inputChanges}  / >
                
              <div id="logBtn_wrapper">
            <button id = "btn-singIn" onClick={this.logIn}> LogIn </button>
            <button id = "btn-singUp" onClick={this.singUp}> SingUp </button>
            </div >
        
        </form >

        </div>)

}
}
          


export default Login;

  