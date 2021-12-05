import React from 'react'
import Main from '../../template/Main'
import InvestmentForm from './InvestmentForm'

//Classe pour le form
export default class tableInvestment extends React.Component {
    constructor(props){
        super(props)
        this.state= { fields: ''}

        this.getFields = this.getFields.bind(this)

    }

    getFields(fields){
        
        
    }

    render(){
        return (
        <Main>
            <div className='display-4'>Investment calculator!</div>
            <hr/>
            <InvestmentForm  click={this.getFields}/>
            <hr/>
        </Main>
        )
    }
}

