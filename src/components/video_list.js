import React from 'react';

// In a functional component, props is an argument.
// In a class component, props are available anywhere as `this.props`.
// Be aware of this when refactoring! Update references from `props` to `this.props`.
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;