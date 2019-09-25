import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MaterialUiModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// import ShowIf from '../ShowIf';
import useModalStyles from './style/useModalStyles';
import getModalStyle from './style/get-modal-style';
import Modal from './index.js';
import GridList from './GridList';

const Projects = (props) => {
  return (
    <Modal {...props}>
      <div style={{position: 'absolute'}}> Projects</div>
      <GridList />
    </Modal>
  );
};

Projects.propTypes = {
};

Projects.defaultProps = {
};

export default Projects;