import React, { Component } from 'react';

class NewSongForm extends Component {
    state = {
        enteredData: {
            rank: '',
            artist: '',
            track: '',
            published: '',
        }
    }

    onChangeSongData = (event, inputKey) => {
      console.log(event, inputKey);
      this.setState({
        enteredData: {
          ...this.state.enteredData,
          [inputKey]: event.target.value
        }
      });
    }

    render() {
        return (
            <div>
                <h2>Add New Song</h2>
                <div>
                    <input
                        type="number"
                        placeholder="Rank"
                        onChange={(event) => this.onChangeSongData(event, 'rank')}
                    />
                    <input
                        type="text"
                        placeholder="Artist"
                        onChange={(event) => this.onChangeSongData(event, 'artist')}
                    />
                    <input
                        type="text"
                        placeholder="Track"
                        onChange={(event) => this.onChangeSongData(event, 'track')}
                    />
                    <input
                        type="text"
                        placeholder="Published Date"
                        onChange={(event) => this.onChangeSongData(event, 'published')}
                    />
                </div>
                <button onClick={(event) => this.props.onAddSong(this.state.enteredData)}>Add Song</button>
            </div>
        );
    }
}

export default NewSongForm;
