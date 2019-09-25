import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MaterialUiModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';

// import ShowIf from '../ShowIf';
import useModalStyles from './style/useModalStyles';
import getModalStyle from './style/get-modal-style';

const Modal = ({
  handleClose,
  setIsOpen,
  isOpen,
  modalPosition,
  children,
}) => {
  const classes = useModalStyles();
  const [modalStyle] = useState(getModalStyle(modalPosition));

  return (
    <MaterialUiModal
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div style={modalStyle} className={classes.paper}>

        {children}
        <span onClick={() => setIsOpen(false)}>
        <Close className={classes.closeIcon} />
        </span>
      </div>
    </MaterialUiModal>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalPosition: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickConfirm: PropTypes.func,
  buttonConfirmText: PropTypes.string,
  buttonCancelText: PropTypes.string,
  isDisabledButtonConfirm: PropTypes.bool,
  isDisabledButtonCancel: PropTypes.bool,
};

Modal.defaultProps = {
  // getModalStyle already has a default param value
  modalPosition: undefined,
  text: '',
  onClickCancel: undefined,
  onClickConfirm: undefined,
  buttonConfirmText: 'Confirm',
  buttonCancelText: 'Cancel',
  isDisabledButtonConfirm: false,
  isDisabledButtonCancel: false,
};

export default Modal;