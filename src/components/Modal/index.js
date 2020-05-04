import React from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Content} from './styles';

export default function BaseModal({visible, children, ...rest}) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} {...rest}>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Modal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};
