import React from 'react'
import Main from '../../components/template/Main'

function BoilingVeredict(props){
    if(props.celcius >= 100){
        return <p>Fait bouillir l'eau</p>
    }
    else 
    return <p>Ne fait pas bouillir l'eau </p>
}

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {temperature: ''}

        //binding
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({temperature: e.target.value})
    }

    render(){
        const temperature = this.state.temperature
        return (
            <fieldset>
                <legend>Voulez saisir la temperature en celcius:</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange} />
                    <BoilingVeredict celcius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default props => 
    <Main icon="home" title="Exercices 6" subtittle="Portifolio">
    <div className='display-4'>Faire remonter l'état!</div>
    <hr/>
    <Calculator />
    </Main>
