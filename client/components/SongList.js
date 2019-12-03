import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { graphql, useQuery, useMutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSongs from '../queries/fetchSongs';
 

const SongList = () => {
  const { loading, error, data, refetch } = useQuery(fetchSongs);
  const [songList, setSongList] = useState({
    title: "Loading...", id: "00000"
  });
  const [deleteSong] = useMutation(mutation);

  const onSongDelete = (id) => {
    deleteSong({
      variables:{id},
      refetchQueries: [{query: fetchSongs}]
    });
  }

  const renderSongs = () => {
    if (loading) {
      return (
        <div>Loading...</div>
      );
    } else {
      return data.songs.map(song => {
        return (
          <li 
            key={song.id} 
            className="collection-item">
              <Link to={`/songs/${song.id}`}>{song.title}</Link>
              <i
                className="material-icons"
                onClick={() => onSongDelete(song.id)} 
              >delete</i>
          </li>
        );
      });
    };
  };
    
    return (
      <div>
      <ul className="collection">
        {renderSongs()}
      </ul>
      <Link
        to="/songs/new" 
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
      </div>
    );
  
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;


export default graphql(mutation)(graphql(fetchSongs)(SongList));