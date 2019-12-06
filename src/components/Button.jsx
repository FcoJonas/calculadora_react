import React, { Component } from 'react'
import './Button.css'
//import Button from './Button'

export default props =>
    <button onClick={e => props.click && props.click(props.label)} className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}>
        {props.label}</button>
