import React from 'react'
import Main from '../template/Main'

function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn)
        return <h3>Bienvenue!</h3>
    else
        return <h3>PLease sign up.</h3>
}

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }
    
    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button 
        if(isLoggedIn)
            button = <LogoutButton onClick={this.handleLogoutClick} />
        else
            button = <LoginButton onClick={this.handleLoginClick} />

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default props => 
    <Main icon="home" title="Exercices 2" subtittle="Portifolio">
        <div className='display-4'>Exercices 2!</div>
        <hr/>
        <LoginControl isLoggedIn={false}/>
    </Main>