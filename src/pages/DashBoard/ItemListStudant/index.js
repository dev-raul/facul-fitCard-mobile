import React from 'react';
import PropTypes from 'prop-types';
import {Container, StudantText, StudantView} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemListStudant({studant: {id, name}}) {
  return (
    <Container onPress={() => {}}>
      <StudantView>
        <Icon name="user-circle" size={35} color="#000" />
        <StudantText>{name}</StudantText>
      </StudantView>
      <Icon name="angle-right" size={24} color="#000" />
    </Container>
  );
}

ItemListStudant.propTypes = {
  studant: PropTypes.object.isRequired,
};
