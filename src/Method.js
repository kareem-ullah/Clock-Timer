import React,{Component} from 'react';


class Method extends Component{
myFacebookLink(){
    return 'https://www.facebook.com/kareemullah'
}

facebookUser(){
    return 'kareemullah'
}

    render(){
        return(
            <div>
                <p>My facebook ID is <a href={this.myFacebookLink()}>{this.facebookUser()}</a></p>
            </div>
        )
    }
}

export default Method;