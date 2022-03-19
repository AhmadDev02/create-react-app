// import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';

const getPlaylist = async () => {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
};

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_API_SPORTIFY ;

function App() {
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    getPlaylist();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Create Playlist</h1>
      <form className="form">
        <label htmlFor="title">Title</label>
        <input placeholder="Title" type="text" name="title" id="title" />
        <label htmlFor="description">Albums</label>
        <input placeholder="Albums"
          name="Albums"
          id="description"/>
        <input type="submit" value="Create Playlist" />
        <div className="playlist-container">
          <div className="playlist-item">
            <img
              className="playlist-image"
              src="https://i1.wp.com/kucing.co.id/wp-content/uploads/2019/01/foto-anak-kucing-lucu.jpg"
              alt="playlist"
            />
            <div className="playlist-content">
              <h2 className="playlist-title">Title</h2>
              <h3 className="playlist-description">Artists ~ Albums</h3>
            </div>
            <div className="playlist-actions">
              <button className="playlist-action">Add to playlist</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;