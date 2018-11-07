// @flow

import React from 'react';
import './loading-indicator.scss';

type Props = {
  isLoading: boolean,
};
function LoadingIndicator(props: Props) {
  const { isLoading } = props;
  const hide = isLoading ? '' : 'loading-indicator--hide';
  return <div className={`mdl-progress mdl-js-progress mdl-progress__indeterminate ${hide}`} />;
}

export default LoadingIndicator;
