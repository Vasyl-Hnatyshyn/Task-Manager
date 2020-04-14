import React from 'react';
import './Modal.css';

class Modal extends React.Component {
     constructor(){
        super();
        
        this.state={
              modalStyle:"none", 
              newTask:null,    
    };

    }

  showModal=()=>{
    this.setState({
        
        modalStyle:"block"
        
    })
}
  
  closeModal=()=> {
    this.setState({
        
        modalStyle:"none"
        
    })
}
   
   newTask=(e)=>{
     
     this.setState({
         
         newTask:e.target.value
     })
 }

   
 render () {

const {add} = this.props;
 
return(
  <div>
  <button id = "taskAdd"  onClick={this.showModal}>Add new task </button>      
    
    <div id="modalB_graund" style={{display:this.state.modalStyle}}>
    
    <div className="modal-content"  >
    
       <span  id="close" onClick={ this.closeModal}> x </span> 
        
       <textarea id="txt"  placeholder="Add your task..." onChange={this.newTask}></textarea>

       <a href="#add" onClick={()=> {
       
       add(this.state.newTask)
       
       this.closeModal();
      }} id ="modalBtn"> add </a>
    </div>
    
 </div>

</div>
        
)}
}

export default Modal;
