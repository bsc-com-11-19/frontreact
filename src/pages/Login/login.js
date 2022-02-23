import React from 'react';
import{reactComponent as Logo} from '../../assets/instagram.svg'
class login extends react.Component{
    state={
        email='',
        paswd=''
    }
    handlechange=(e) =>{
        const{name,value}=e.target;
        this.state({[name]:value})
    }
    handlesubmit=(e) =>{
        e.preventDefault()
    }
    render(){
        return(
            <div>
         <div>
         <Logo/>
         </div>

         <div>
             <form onsubmit={this.handlesubmit}></form>
             <input type="email" name="email" placeholder="jexy@gmail.com" required onChange={this.handlechange}/>
             <input type="password" name="paswd" placeholder="12345" required onChange={this.handlechange}/>
                <button onSubmit={this.handlesubmit}>Login</button>
        
            </div>
            </div>
            
        )
    }
}
export default login;