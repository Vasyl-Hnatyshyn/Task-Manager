import React from 'react';
import fire from '../../config/fire';
import './Login.css';


class Login extends React.Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            border: "2px solid transparent",
            errMessage:{
                display:"none",
                
            }
             
        }
    }
    
logIn=(e)=>{
   
    e.preventDefault();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{
       
    }).catch((err)=>{
       this.state.email="";
       this.state.password="";
        this.setState({
           errMessage:{
                display:"block",
                color:"red",
                fontSize:"18px"
           },
            border: "2px solid red"
                    
        })
    })
    }
    
        
singUp=(e)=>{
   
     e.preventDefault();

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{

    }).catch((err)=>{
       this.state.email="";
       this.state.password="";
        this.setState({
            errMessage:{
                display:"block",
                color:"red",
                fontSize:"18px"
           },
            border: "2px solid red"
                    
        })
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
                
             <p id="label">  Log In  </p>

            <input 
              name= "email"
              type = "email"  
              placeholder = " Email..."
              id="email" 
              value={this.state.email}
               style={{border:this.state.border} }
               onChange={this.inputChanges} / >
                
            <input 
              name = "password"
              type = "password"  
              placeholder = "Password..."
              id="password"
              style={{border:this.state.border} }
              onChange={this.inputChanges}
               value={this.state.password}/ >
              
              <p id ="errLogin" style={this.state.errMessage}>  Your email or password is incorect !!!</p>
                
              <div id="logBtn_wrapper">
            <button id = "btn-singIn" onClick={this.logIn}> LogIn </button>
            <button id = "btn-singUp" onClick={this.singUp}> SingUp </button>
            </div >
        
        </form >

        </div>)

}
}


export default Login;

  