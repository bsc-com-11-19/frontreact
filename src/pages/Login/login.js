import React from 'react';


//import{reactComponent as Logo} from '../../assets/instagram.svg'
class Login extends React.Component{
    state={
        email:'',
        paswd:''
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
       
         </div>

         <div id="log">
             <form onsubmit={this.handlesubmit}></form>
             <input type="email" name="email" placeholder="jexy@gmail.com" required onChange={this.handlechange}/>
             <input type="password" name="paswd" placeholder="12345@me" required onChange={this.handlechange}/>
                <button onSubmit={this.handlesubmit}>submit</button>
        
            </div>
            </div>
            
        )
    }
}
export default Login;