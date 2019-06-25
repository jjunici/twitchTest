import React,{Component} from 'react';

class Chatitem extends Component{
    render(){
        const {nicname,message}=this.props;
        return(
            <div>
                <div>
                <span>{nicname}</span>
                <span>:{message}</span>
                </div>
            </div>
        )
    }
}
export default Chatitem;