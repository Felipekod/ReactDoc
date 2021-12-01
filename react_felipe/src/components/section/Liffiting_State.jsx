import React from 'react'
import Main from '../template/Main'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function BoilingVeredict(props){
    if(props.celcius >= 100){
        return <p>Fait bouillir l'eau</p>
    }
    else 
    return <p>Ne fait pas bouillir l'eau </p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value)
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Voulez saisir la temperature en: {scaleNames[scale]}</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {temperature: '', scale: 'c'}

        //binding
        this.handleCelciusChange = this.handleCelciusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelciusChange(temperature){
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }

    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange}    />
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVeredict celcius={parseFloat(celcius)} />
            </div>
        )
    }
}

export default props => 
    <Main icon="home" title="Exercices 6" subtittle="Portifolio">
    <div className='display-4'>Faire remonter l'état!</div>
    <hr/>
    <Calculator />
    </Main>
