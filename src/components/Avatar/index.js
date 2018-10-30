// @flow
import React, { PureComponent } from 'react';
import type { Element } from 'react';
import './avatar.scss';

type Props = {
  className?: string,
  children: Element<'img'>,
  text?: string,
};
class Avatar extends PureComponent<Props> {
  static defaultProps = {
    className: '',
    text: '',
  };

  render() {
    const { className = '', children, text } = this.props;
    return (
      <div className={`avatar ${className}`}>
        <div className="avatar__img">{children}</div>
        <span className="avatar__text">{text}</span>
      </div>
    );
  }
}

export default Avatar;
