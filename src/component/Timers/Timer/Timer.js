import React from 'react';
import './Timer.css';

const timer = props => (
    <div className="Timer">
        <p className="Timer__value">{props.value < 10 ? '0' + props.value : props.value}</p>
        <p className="Timer__title title__introduct">{props.name}</p>
    </div>
)
 
export default timer;