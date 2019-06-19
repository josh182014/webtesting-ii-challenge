import React from 'react'

export default class Display extends React.Component {

    render() {
        return (
            <div>
                <h3>Display</h3>
                <div>Hits: {this.props.count.hits}</div>
                <div>Strikes: {this.props.count.strikes}</div>
                <div>Fouls: {this.props.count.fouls}</div>
                <div>Balls: {this.props.count.balls}</div>
            </div>
        )
    }
}