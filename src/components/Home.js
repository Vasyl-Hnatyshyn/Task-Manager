import React from 'react';
import fire from '../config/fire';
import './Home.css';


class Home extends React.Component {
    constructor(){
        super();
        
        
        this.state={
            taskFol:[],
            author:"",
            
           
        }
    };

    
    
    
    
componentDidMount () {
    let userEmail = localStorage.getItem('name'); 
    
    const user = userEmail.slice(0, userEmail.indexOf('@'))
    
    this.setState({ 
            author: user,
        });
       this.getFromStorageTasks(); 
       this.modalWindowShow(); 
    
    }
      
    
    
modalWindowShow = () => {
    document.addEventListener("DOMContentLoaded", function () {
      var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
      console.log(scrollbar);
      document.querySelector('[href="#openModal"]').addEventListener('click', function () {
          document.getElementById('txt').value = null;
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
      });
      document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
          
      });
     document.querySelector('[href="#add"]').addEventListener('click', function () {
     document.body.style.overflow = 'visible';
     document.querySelector('#openModal').style.marginLeft = '0px';
          
      });
    });
    
};
 


    
logOut = () => {
    fire.auth().signOut().then(function() {
    

}).catch(function(err) {
     console.log(err)
});
    
 localStorage.setItem('name',"")    
};


addTask = () => {
    
    let task = document.getElementById('txt').value;
    let a ={text: task , author:`${this.state.author}`, id: +`${Math.floor(Math.random() * 1000)}` };
    
    const updateFolder = [...this.state.taskFol,a];
    task === "" ? task = "This task is empty"   : 
    
    this.setState({
         
        taskFol: updateFolder,
          
        })
       localStorage.setItem('task', JSON.stringify(updateFolder));               
}


getFromStorageTasks =()=>{
    
    let a = localStorage.getItem('task');
               
        if(a !== null) {  
            this.setState({
            taskFol:  JSON.parse(a),
                
        })  
         }
    }



edit= ed =>{
   
    let b = ed.target
    let c = b.innerHTML 
    b.innerHTML=`<textarea id="changeText" type=text   >${c}</textarea>`
    let inp =document.getElementById('changeText');
    inp.addEventListener('focus', ()=>{ inp.value= c })     
    inp.addEventListener('blur', ()=>{  inp !== "" ? b.innerHTML = `${inp.value}` : b.innerHTML = c});

    }
 
render(){

    return (
     <div  id ="container">
    
    <header>
        <p>Task Manager</p>
        <div className="userBlock">
        <img src="https://img.icons8.com/color/48/000000/reviewer-male--v1.png" alt="user icon"/>

         <button > {this.state.author}  </button>
         <button onClick={this.logOut}> LogOut  </button>

        </div>

    </header>
        
    <span id="line"> </span>  
        
  <section>
      
     <a href="#openModal" id = "taskAdd">Add new task</a>
            
     <div id="openModal" className="modal">
       <div className="modal-content">
       <a href="#close" title="Close" className="close">×</a>
        
       <textarea id="txt"  name="textarea" placeholder="Add your task..."></textarea>

        < a href="#add" onClick={this.addTask} id ="modalBtn"> add </a>
       
      </div>
    </div>


  <div id = "taskWrapper" > 
            
  {this.state.taskFol.map(task=>{
    return <div className="taskCard"    >   
  
    <div className ="editTask" onClick={this.edit} > {task.text} </div> 
        
    <span className="uathor">{task.author}</span>     
                          
                    
      <div className="btnCardBlock">
        
        <img src="https://img.icons8.com/color/48/000000/filled-message.png" alt="mail icon" />
                    
        <img src="https://img.icons8.com/color/48/000000/multiply.png" alt="close icon"   onClick={()=>{
                        
          const update=this.state.taskFol.filter(function(item){
                            
          return item.id !== task.id;
                            
            }) 
                        
          localStorage.setItem('task', JSON.stringify(update));
        
          this.setState({                          
                        taskFol:update
                          })
 
            }} />
        
        
          </div>
        
        
        
        
                          

      

     </div>
     })
    
    }
            
         </div> 

    </section >

        
     </div>)

};
    
    
}
          


export default Home;
