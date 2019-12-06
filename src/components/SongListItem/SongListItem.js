import React, { Component } from 'react';
import './Expand.css';

class SongListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    clickExpand = (event) => {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        let showClass;

        if (this.state.show) {
            showClass = 'isExpanded';
        } else if (!this.state.show) {
            showClass = 'isHidden';
        }

        return (
            <div>
                <h3>{this.props.song.track}</h3>
                <button className="clickable" onClick={this.clickExpand}>click for more</button>
                <div className={showClass}>
                    <ul>
                        <li>Rank: {this.props.song.rank}</li>
                        <li>Artist: {this.props.song.artist}</li>
                    </ul>
                    <button onClick={() => this.props.deleteSong(this.props.song.id)}>X</button>
                </div>
            </div>
        )
    }
}

export default SongListItem;