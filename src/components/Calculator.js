import React from "react"
import CNButton from "./CNButton"

import './calculator.css';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expression: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.clearScreen = this.clearScreen.bind(this);
        this.doCalculation = this.doCalculation.bind(this);
    }

    handleClick(val) {
        this.setState((state, props) => ({
            expression: state.expression.concat(val)
        }));
    }

    clearScreen() {
        this.setState({
            expression: ""
        });
    }

    doCalculation() {
        this.setState({
            expression: eval(this.state.expression)
        });
    }

    render() {
        return(
            <div className="calculator">
                <div className="grid1">
                    <div className="screen">
                        <label>
                            {this.state.expression}
                        </label>
                    </div>
                    <table className="keyboard-grid">
                        <tr>
                            {
                                ["1", "2" ,"3"].map(val => {
                                    return (
                                        <td key={val}>
                                            <CNButton onClick={ this.handleClick }>{val}</CNButton>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            {
                                ["4", "5", "6"].map(val => {
                                    return (
                                        <td key={val}>
                                            <CNButton onClick={ this.handleClick }>{val}</CNButton>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            {
                                ["7", "8", "9"].map(val => {
                                    return (
                                        <td key={val}>
                                            <CNButton onClick={ this.handleClick }>{val}</CNButton>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            {
                                [".", "0", "="].map(val => {
                                    return (
                                        <td key={val}>
                                            <CNButton
                                                onClick= {
                                                    val === "="
                                                    ? this.doCalculation
                                                    : this.handleClick
                                                }
                                            >{val}</CNButton>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </table>
                </div>
                <div className="grid2">
                    <table className="keyboard-verticle">
                        {
                            ["c", "+", "-", "*", "/"].map(val => {
                                return (
                                    <tr key={val}>
                                        <td>
                                            <CNButton
                                                onClick= {
                                                    val === "c"
                                                    ? this.clearScreen
                                                    : this.handleClick
                                                }
                                            >{val}</CNButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}