import React, { Component } from 'react'
import './Button.css'
//import Button from './Button'

export default props => <button className={`
button
${props.operation ? 'operation' : ''}

`}>{props.label}</button>
