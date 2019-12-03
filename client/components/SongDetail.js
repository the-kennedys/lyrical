import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = (props) => {
  const id = props.match.params.id;
  const { loading, error, data, refetch } = useQuery(fetchSong, {variables: { id }});

  if (loading) {
    return <div>Loadng ...</div>
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{ data.song.title }</h3>
      <LyricList lyrics={ data.song.lyrics }/>
      <LyricCreate songId={ id }/>
    </div>);

}

export default SongDetail;