import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

function SongDetail(props) {

  if (props.data.loading) {
    return <div>Loading...</div>
  }
  console.log(props);
  const { song } = props.data;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{ song.title }</h3>
      <LyricList lyrics={ song.lyrics }/>
      <LyricCreate songId={ props.match.params.id }/>
    </div>);

}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(SongDetail);