import React from 'react'
import Main from '../../components/template/Main'

class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {value: ''}

        //bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('Un nom a été envoyé: ' + this.state.value)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom: {this.state.value}
                    <hr/>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Envoyer'/>
            </form>
        )
    }
}


export default props =>
<Main icon="home" title="Exercices 6" subtittle="Portifolio">
    <div className='display-4'>Exercices 6!</div>
    <hr/>
    <NameForm />

</Main>