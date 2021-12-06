import React from 'react'
import Main from '../../template/Main'
import InvestmentForm from './InvestmentForm'
import currency from 'currency.js'

//Classe pour le form
export default class tableInvestment extends React.Component {
    constructor(props){
        super(props)
        this.state= { table: {}}

        this.getFields = this.getFields.bind(this)

    }

    getFields(fields){
        this.calculate(fields)
    }

    calculate(fields){
        const monthlyRate = this.monthlyRate(fields.returnRate)
        const table = [{}]
        const firstAmount = currency(fields.startingAmount)
        let startPrincipal = currency(fields.startingAmount)
        let startBalance = currency(fields.startingAmount)
        let firstInterest = parseFloat(startBalance * (monthlyRate / 100))
        let totalInterest = parseFloat(firstInterest)
        let endBalance = 0
        let endPrincipal = 0
        let monthlyContribution = parseFloat(fields.monthlyContribution)


    
        for (let index = 1; index <= fields.totalMonths; index++) {
            
            const lastIndex = index - 1
            if(index == 12)
             //debugger
            if(index != 1)
            {
                startPrincipal = firstAmount + (lastIndex * monthlyContribution)
                startBalance = startPrincipal + table[lastIndex].totalInterest
                
            }

            let interest = parseFloat(startBalance * (monthlyRate / 100))

            if(index != 1)
            totalInterest = totalInterest + interest - table[lastIndex].totalInterest

            endBalance = startBalance + monthlyContribution + interest
            endPrincipal = startPrincipal + monthlyContribution
                
            const row = {startPrincipal: startPrincipal, 
                         startBalance: startBalance,
                         totalInterest: totalInterest,
                         endBalance: endBalance,
                         endPrincipal: endPrincipal}
            table.push(row)
        }
        
        console.log(table)
        
    }


    renderTable(fields){
        return(
            <table>
                <tr>
                    <th>Month</th>
                    <th>Start principal</th>
                    <th>Start Balance</th>
                    <th>Interest</th>
                    <th>End balance</th>
                    <th>End principal</th>
                </tr>
                {this.renderRow(fields)}
               
            </table>
        )
    }

    renderRow(fields){
        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )

    }

    monthlyRate(annuallyRate){
        return annuallyRate  / 12
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

