import React from 'react';
import './App.css';
import fire  from './config/fire';
import Login  from './components/Login/Login';
import Home  from './components/Home/Home';


class App extends React.Component {
    constructor(){
       super();
        this.state={
            user:"",
           
        }    
    
    }
    
    componentDidMount(){
   
        this.authListener();
      };  
    
authListener = ()=>{
        
    fire.auth().onAuthStateChanged((user)=> {
            
            if(user)
                {
                    this.setState({user})
                }
            else {
                    this.setState({user: null})
                 }
        })
}    
    
    render() {
        
         
    return ( 
        
        <div className = "App">     
        
        {  this.state.user!== null ? (< Home />):(<Login/>)   }
        
        </div>
        
    );
    }
}
export default App;
