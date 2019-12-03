import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import fetchSongs from '../queries/fetchSongs';

const SongCreate = (props) => {
  
  const onSubmit = () => {
    event.preventDefault();
    
    addNewSong({
      variables: {
        title: inputs.songTitle
      },
      refetchQueries: [{query: fetchSongs}]
    }).then(() => props.history.push('/')) ;
  };
  
  const [addNewSong, { data }] = useMutation(mutation);
  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit);
  
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input
          type="text"
          name = "songTitle"
          onChange = {handleInputChange} 
          value = {inputs.songTitle || ""}
        />
      </form>
    </div>
  );
    
};
  
const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`
  
export default SongCreate;