import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {

    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0

}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {

        super(props)

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {

        if (operation == this.state.operation) {

            this.addDigit(eval(parseInt(this.state.current) + (this.state.operation) + parseInt(this.state.displayValue)))
            console.log(parseInt(this.state.current) + (this.state.operation) + parseInt(this.state.displayValue));

        }

        this.state.current = this.state.displayValue
        this.setState({ operation: operation })
        console.log(this.state.displayValue);
        // console.log(operation);
    }

    addDigit(n) {

        if (this.state.displayValue == '0')
            this.state.displayValue = '';

        if (this.state.operation != null)
            this.state.displayValue = '';

        this.setState({ displayValue: this.state.displayValue + n })
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.addDigit} />
            </div>
        )
    }
}