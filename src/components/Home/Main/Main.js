import React from 'react';
import './Main.css';


class Main extends React.Component {
     constructor(props){
        super(props);
        
        this.state={
           
             editingElementId: null,
             newName: null,
        };
 }

    
    
 
    
    
    
changeName = e => {
 this.setState({ newName: e.target.value})
 }
 
 startEditing = ({ id, name }) => {
    this.setState({ newName: name, editingElementId: id})
 }
 
 finishEditing = () => {
    this.setState((prevState) => ({ newName: null, editingElementId: null, taskFolder: prevState.taskFolder.map((task) => (
    task.id === prevState.editingElementId ? { ...task, name: prevState.newName} : task
    ))}))
 }    
    
render(){

const {taskFolder,removeTask}=this.props;
    
    return (
<section>
   
     
<div id = "taskWrapper" > 
            
  {taskFolder.map(task=>{
    return <div className="taskCard" key={task.id}>   
  
   <div> { this.state.editingElementId ? (
      <textarea id="changeText" onBlur={this.finishEditing} onChange={this.changeName}>{this.state.newName}</textarea>
    ) : (
       <div className ="editTask" onClick={() => this.startEditing(task)} > {task.text} </div>
    )} </div>
        
    <span className="uathor">{task.author}</span>     
                          
                    
      <div className="btnCardBlock">
        
        <img src="https://img.icons8.com/color/48/000000/filled-message.png" alt="mail icon" />
                    
        <img src="https://img.icons8.com/color/48/000000/multiply.png" alt="close icon"   onClick={()=>{  
        removeTask(task)
        }} />
          
          </div>
  
     </div>
     })
    
    }
            
         </div> 

    </section >

)}
}


export default Main;