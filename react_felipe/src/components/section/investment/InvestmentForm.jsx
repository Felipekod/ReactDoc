import React from 'react'
import Main from '../../template/Main'

//Classe pour le form
class SalaireForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {startingAmount: '', months: '', returnRate: '', monthlyContribuition: ''}

        //bind
        this.amountChange = this.amountChange.bind(this)
    }

    amountChange(event){

        this.setState({startingAmount: event.target.startingAmount})
        //Si la valeur est numerique
        if(!isNaN(this.state.value)){
            this.props.onSalaireChange(event.target.value)
        }
        else{
            this.setState({value: 0})
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Starting amount: 
                    <input type='text' value={this.state.startingAmount} onChange={this.handleChange} />
                </label>
                <label>
                    Total months: 
                    <input type='text' value={this.state.months} onChange={this.handleChange} />
                </label>
                <label>
                    Return rate(annually): 
                    <input type='text' value={this.state.returnRate} onChange={this.handleChange} />
                </label>
                <label>
                    Monthly contribuiton: 
                    <input type='text' value={this.state.monthlyContribuition} onChange={this.handleChange} />
                </label>
            </form>
        )
    }
}




export default props => <SalaireForm />