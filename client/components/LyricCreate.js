import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../hooks/useForm';
import fetchSong from '../queries/fetchSong';

const LyricCreate = ({ songId }) => { 

  const onSubmit = () => {
    addNewLyric({
      variables:{
        content: inputs.lyricContent,
        songId},
      refetchQueries: [{ query: fetchSong, variables:{id:songId}}]
    });
  };

  const [addNewLyric, {data}] = useMutation(mutation);
  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit);
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Add a lyric</label>
        <input
           type="text"
           name="lyricContent"
           value={inputs.lyricContent || ""}
           onChange={handleInputChange}
        />
      </form>
    );
  
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content:$content, songId:$songId) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;

export default LyricCreate;