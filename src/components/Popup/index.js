// @flow
import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import Button from '../Button';
import './popup.scss';

type Props = {
  handleCancelButtonClick: Function,
  handleOkButtonClick: Function,
  showPopup: boolean,
};
const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 0,
    bottom: 0,
    border: 'none',
    overflow: 'hidden',
    height: 300,
    width: 500,
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#popup');

class Popup extends PureComponent<Props> {
  render() {
    const { handleCancelButtonClick, handleOkButtonClick, showPopup } = this.props;
    return (
      <ReactModal
        isOpen={showPopup}
        contentLabel="popup modal"
        shouldCloseOnOverlayClick
        style={customStyles}
      >
        <div className="pop-up">
          <div className="pop-up__message-wrapper">
            <h3 className="pop-up__title">Are you sure?</h3>
            <p className="pop-up__message">This idea will permanently be deleted.</p>
          </div>

          <div className="pop-up__button-wrapper">
            <Button
              text="cancel"
              className="mdl-button  pop-up__cancel-btn"
              handleClick={handleCancelButtonClick}
            />
            <Button
              text="ok"
              className="mdl-button pop-up__ok-btn"
              handleClick={handleOkButtonClick}
            />
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Popup;
