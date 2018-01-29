import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({isReady, startLoading, Child, ...props}) => {
  if (isReady) {
    return <Child {...props}/>
  } else {
    startLoading()
    return <p>Loading!</p>
  }
}

Loading.propTypes = {
  isReady: PropTypes.bool.isRequired,
  startLoading: PropTypes.func.isRequired,
  Child: PropTypes.func.isRequired
}

export default Loading;
