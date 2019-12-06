import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SongList from '../SongList/SongList';
import NewSongForm from '../NewSongForm/NewSongForm';


class App extends Component {

  state = {
    songs: []
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

  postSong(enteredData) {
    axios({
      method: 'POST',
      url: '/songs',
      data: enteredData
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

  onAddSong = (songData) => {
    // submit data to server
    this.postSong(songData);
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
        
        <NewSongForm onAddSong={this.onAddSong} />

        <br/>
        <SongList songs={this.state.songs} deleteSong={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
