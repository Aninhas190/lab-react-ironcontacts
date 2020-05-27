import React from 'react';

const CelebrityInfo = (props) => {
  const popularity = props.popularity;
  return (
    <tr>
      <th><img src={props.pictureUrl} alt="{celebrity.name}"/></th>
      <th>{props.name}</th>
      <th>{popularity.toFixed(2)}</th>
      <th><button onClick={props.clickToDelete}>Delete</button></th>
    </tr>
  );
}

export default CelebrityInfo;