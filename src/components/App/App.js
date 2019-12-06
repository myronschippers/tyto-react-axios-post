import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SongList from '../SongList/SongList';


class App extends Component {

  state = {
    songs: [],
    enteredData: {
      rank: '',
      artist: '',
      track: '',
      published: '',
    }
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = () => {
    axios({
      method: 'GET',
      url: '/songs'
    })
    .then((response) => {
      this.setState({
        songs: response.data
      },() => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  deleteSong = (id) => {
    axios({
      method: 'DELETE',
      url: '/songs/' + id
    })
    .then((response) => {
      console.log(response);
      this.getSongs();
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  postSong() {
    axios({
      method: 'POST',
      url: '/songs',
      data: this.state.enteredData
    })
    .then((response) => {
      console.log(response);
      this.getSongs();
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  // EVENT HANDLERS

  onAddSong = (event) => {
    // submit data to server
    this.postSong();
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

  // changeMe = (event) => {
  //   this.onChangeSongData(event, 'rank');
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Songs!</h1>
        </header>
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
          <button onClick={this.onAddSong}>Add Song</button>
        </div>
        <br/>
        <SongList songs={this.state.songs} deleteSong={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
