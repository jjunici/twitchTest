import React,{Component} from 'react';
import Chatitem from './ChatItem';
class Chatlist extends Component{
    render(){
        const{chat}=this.props;
        const chatList=chat.map(item=>(
            <Chatitem
                nicname={item['display-name']}
                message={item['message']}
                key={item['id']}
            />

        
        ));
    return(
        <div>
            {chatList}
        </div>
    )
    }
}
export default Chatlist;
