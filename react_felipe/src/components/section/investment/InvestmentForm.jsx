import React from 'react'
import Main from '../../template/Main'

//Classe pour le form
export default class SalaireForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {startingAmount: '', totalMonths: '', returnRate: '', monthlyContribution: ''}

        //bind
        this.handleChange = this.handleChange.bind(this)
        this.printState = this.printState.bind(this)
        this.sendFields = this.sendFields.bind(this)
    }

    handleChange(event){
        //Si la valeur est numerique
        if(!isNaN(event.target.value)){
            this.setState({[event.target.name]: event.target.value})
        }
        else{
            this.setState({[event.target.name]: ''})
        }
    }
    //Print test console.log
    printState(){
        console.log('STATE = '+ this.state.monthlyContribution)
    }

    //On envoie les champs pour calculer
    sendFields(){
        const fields =  {startingAmount: this.state.startingAmount,
                         totalMonths: this.state.totalMonths,
                         returnRate: this.state.returnRate,
                         monthlyContribution: this.state.monthlyContribution}

        console.log(fields)
        this.props.click(fields)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Starting amount: 
                    <input name='startingAmount' type='text' value={this.state.startingAmount} onChange={this.handleChange} />
                </label>
                <label>
                    Total months: 
                    <input name='totalMonths' type='text' value={this.state.totalMonths} onChange={this.handleChange} />
                </label>
                <label>
                    Return rate(annually): 
                    <input name='returnRate' type='text' value={this.state.returnRate} onChange={this.handleChange} />
                </label>
                <label>
                    Monthly contribution: 
                    <input name='monthlyContribution' type='text' value={this.state.monthlyContribution} onChange={this.handleChange} />
                </label>
                <button onClick={this.sendFields}>Calculate</button>
            </form>
        )
    }
}

