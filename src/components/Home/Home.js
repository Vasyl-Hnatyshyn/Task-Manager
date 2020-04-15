import React from 'react';
import Modal from './AddTaskWindow/Modal';
import Header from './Header/Header';
import Main from './Main/Main';
import './Home.css';


class Home extends React.Component {
    constructor(){
        super();
        
        this.state={
            taskFolder:[],
            author:null,
   
    };
 }

    
componentDidMount () {
    const userEmail = localStorage.getItem('name'); 
    const user = userEmail ? userEmail.slice(0, userEmail.indexOf('@')) : ''
     this.setState({ 
      author: user,
     });
    this.getFromStorageTasks();
    
    }


addTaskToFolder=val=> {
  
      let a ={text: val , author:this.state.author, id: +`${Math.floor(Math.random() * 1000)}` };
    
       const updateFolder = [...this.state.taskFolder,a];
      
       this.setState({
           
           taskFolder:updateFolder
           
       })
    
    localStorage.setItem('task', JSON.stringify(updateFolder));  
 
}


getFromStorageTasks =()=>{
    
    let a = localStorage.getItem('task');
               
        if(a !== null) {  
            this.setState({
            taskFolder:  JSON.parse(a),
                
        })  
         }
    }
             
removeTask=task=>{const update=this.state.taskFolder.filter(function(item){
                            
  return item.id !== task.id;
                            
    }) 
                        
  localStorage.setItem('task', JSON.stringify(update));
        
  this.setState({                          
                taskFolder:update
                  })
}

updateTasks=tasks=>{                        
  localStorage.setItem('task', JSON.stringify(tasks));
        
  this.setState({                          
                taskFolder:tasks
     })
}

render(){

    return (
        
     <div  id ="container">
        
      <Modal  add={this.addTaskToFolder} />
      <Header author={this.state.author} />
      <Main  taskFolder={this.state.taskFolder } updateTasks={this.updateTasks } removeTask={this.removeTask }/>
    
     </div>)

};
}

export default Home;
