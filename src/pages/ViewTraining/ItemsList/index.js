import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  ItemText,
  MoreButton,
  Description,
  ButtonInfo,
  ButtonInfoText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseModal from '~/components/Modal';
const ItemsList = ({items}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <ItemText style={{flex: 5, textAlign: 'left'}}>
        {items.instrument}
      </ItemText>
      <ItemText
        style={{flex: 2}}>{`${items.series} X ${items.repeat}`}</ItemText>
      <ItemText style={{flex: 2}}>{`${items.load} kg`}</ItemText>
      <MoreButton style={{flex: 1}} onPress={() => setModalVisible(true)}>
        <Icon name="more-vert" size={22} color="#000" />
      </MoreButton>

      <BaseModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Description>
          {items.observation === null ? 'Sem observações' : items.observation}
        </Description>
        <ButtonInfo onPress={() => setModalVisible(false)}>
          <ButtonInfoText>voltar</ButtonInfoText>
        </ButtonInfo>
      </BaseModal>
    </Container>
  );
};

ItemsList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default ItemsList;
