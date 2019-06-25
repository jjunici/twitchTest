import React,{Component} from 'react';
import Chatlist from './Chatlist';
import tmi from 'tmi.js';
class App extends Component{
  state={
    chat:[
     
    ]
  }
  id=0;
  getId=()=>{
    return ++this.id;//현재 값에 1을 더한 값을 반환 
  }
  componentDidMount(){
    const options={
      options:{
        debug:false
      },
      connection:{
        cluster:'aws',
        reconnect:true,
      },
      identity:{
        username:'NightBot',
        password:'oauth:dtxixnuww4sdexx066dbayftviewtj'
      },
      channels:['sonycast_']
    }
    const client = new tmi.client(options);
    client.connect();

    client.on('chat',(channel,user,message,self)=>{
     
       const {chat}=this.state;
       let newChat={
         "display-name":user['display-name'],
         "message":message,
         "id":this.getId()
        }
       this.setState({
         "chat":[...chat,newChat]
       })
    })
  }
  render(){
    const {chat}=this.state;
 
    return(  
      <Chatlist chat={chat}/>
   

    )
  }
};
export default App;
