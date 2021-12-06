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
        //debugger
        const monthlyRate = this.monthlyRate(fields.returnRate)
        const table = [{}]
        const firstAmount = currency(fields.startingAmount)
        let startPrincipal = currency(fields.startingAmount)
        let startBalance = currency(fields.startingAmount)
        let firstInterest = startBalance.multiply((currency(monthlyRate).divide(100)))
        let totalInterest = firstInterest
        let endBalance = 0
        let endPrincipal = 0
        let monthlyContribution = currency(fields.monthlyContribution)

        for (let index = 1; index <= fields.totalMonths; index++) {
            const lastIndex = index - 1
            // if(index == 12)
            // debugger
            if(index != 1)
            {
                startPrincipal = firstAmount.add(monthlyContribution.multiply(lastIndex))
                startBalance = startPrincipal.add(table[lastIndex].totalInterest)
            }

            let interest = startBalance.multiply((currency(monthlyRate).divide(100)))

            if(index != 1)
            totalInterest = totalInterest.add(interest)
            //totalInterest = totalInterest.add(interest).subtract(table[lastIndex].totalInterest)

            endBalance = startBalance.add(monthlyContribution).add(interest)
            endPrincipal = startPrincipal.add(monthlyContribution)
                
            const row = {startPrincipal: startPrincipal, 
                         startBalance: startBalance,
                         interest: interest,
                         totalInterest: totalInterest,
                         endBalance: endBalance,
                         endPrincipal: endPrincipal}
            table.push(row)
        }
        debugger
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

