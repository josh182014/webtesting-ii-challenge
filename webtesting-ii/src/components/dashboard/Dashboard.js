import React from 'react'

export default class Dashboard extends React.Component {

    addHit = e => {
        this.props.addHit(e)
    }

    addStrike = e => {
        this.props.addStrike(e)
    }

    addFoul = e => {
        this.props.addFoul(e)
    }

    addBall = e => {
        this.props.addBall(e)
    }

    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                <button data-testid='hitsButton' name='hits' onClick={this.addHit}>Hit</button>
                <button data-testid='strikesButton' name='strikes' onClick={this.addStrike}>Strike</button>
                <button name='fouls' onClick={this.addFoul}>Foul</button>
                <button name='balls' onClick={this.addBall}>Ball</button>
            </div>
        )
    }
}