import React from 'react';
import fire  from '../../../config/fire';
import './Header.css';

class Header extends React.Component {
    
    
logOut = () => {
    
    fire.auth().signOut().then(function() {  }).catch(function(err) {
         console.log(err)
    });
    
 localStorage.setItem('name',null)    
};
    
 render () {

const {author} = this.props;
 
return(<div>
   <header>
        <p>Task Manager</p>
        <div className="userBlock">
        <img src="https://img.icons8.com/color/48/000000/reviewer-male--v1.png" alt="user icon"/>

         <button > {author}  </button>
         <button onClick={this.logOut}> LogOut  </button>

        </div>

    </header>
    <span id="line"> </span> 
    </div>
)}
}

export default Header;
