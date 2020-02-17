import React, { useState } from 'react';

const styles = {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    margin: '25px 25px',
}

export default function Text(props) {
    return (
        <div style={styles}>
            {props.text}
        </div>
    )
}