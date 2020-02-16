import React, { Component } from 'react'
import './Timeline.css'
export default class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='container'>
                <Frame />
            </div>
        )
    }
}

class Frame extends Component {
    render() {
        return (
            <div style={styles.frame}>
                <h1></h1>
            </div>
        )
    }
}

const styles = {
    frame: {
        backgroundColor: '#eaeaea',
        height: '24px',
        width: '24px',
        borderRadius: 100
    }
}