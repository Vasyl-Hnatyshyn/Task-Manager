import React from 'react';
import fire from '../../config/fire';
import './Login.css';


class Login extends React.Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            paswEror:{
                       color: "black",
                       border: "2px solid transparent"
                    }
 
        }
    }
    
logIn=(e)=>{
    e.preventDefault();
 
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{
       
    }).catch((err)=>{
       alert(err)
    })
    
};
  
        
singUp=(e)=>{
    e.preventDefault();
   
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{

    }).catch((err)=>{
        alert(err)
    })
    
};


filterEmail=(e)=>{
    if(e.target.value.includes('@')!==true){
        e.target.value= "";
        e.target.placeholder = " this is not an email "
         this.setState({
            paswEror:{
                        color: "red",
                        border: "2px solid red"
                    }
                      
        })

        
       
    }
   
}

filterPassword=(e)=>{
    if(e.target.value.length < 6) {
        e.target.value= ""
        e.target.placeholder = " too short... "
       
        this.setState({
            paswEror:{
                        color: "red",
                        border: "2px solid red"
                    }
                      
        })

   
    } 
   
}
    
    
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
               style={this.state.paswEror}
              onChange={this.inputChanges}
              onBlur={this.filterEmail} / >
                
            <input 
              name = "password"
              type = "password"  
              placeholder = "Password..."
              id="password"
              style={this.state.paswEror}
              onChange={this.inputChanges} 
              onBlur={this.filterPassword} / >
                
              <div id="logBtn_wrapper">
            <button id = "btn-singIn" onClick={this.logIn}> LogIn </button>
            <button id = "btn-singUp" onClick={this.singUp}> SingUp </button>
            </div >
        
        </form >

        </div>)

}
}


export default Login;

  