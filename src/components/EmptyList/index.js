import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EmptyList = ({icon, children}) => {
  return (
    <Container>
      {icon && <Icon name={icon} color="#e02041" size={40} />}
      {children && <Text>{children}</Text>}
    </Container>
  );
};

EmptyList.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default EmptyList;
