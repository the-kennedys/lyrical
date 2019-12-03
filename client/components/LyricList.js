import React, { Component } from 'react';

const LyricList = (props) =>  {
  
  const renderLyrics = (lyrics) => {
    return lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">{ lyric.content }</li>
        );
      }
    );
      
  };
    
  return (
    <ul className="collection">
      {renderLyrics(props.lyrics)}
    </ul>
  );
      
}
    
export default LyricList;