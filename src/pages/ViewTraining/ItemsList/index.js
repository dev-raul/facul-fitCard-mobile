import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  Container,
  ItemText,
  MoreButton,
  Description,
  ButtonInfo,
  ButtonInfoText,
  Row,
  InfoButton,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseModal from '~/components/Modal';

import {deleteItemTrainingRequest} from '~/store/modules/itemsTraining/actions';

const ItemsList = ({items, write}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const {loading, training} = useSelector((state) => state.itemTraining);

  const handleDeleteItem = () => {
    dispatch(deleteItemTrainingRequest(training.id, items.id));
  };
  const handleEditItem = () => {
    setModalVisible(false);
    navigation.navigate('EditItem', {itemId: items.id});
  };
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
        {write && (
          <Row>
            <InfoButton
              opacity={true}
              color="rgba(255, 145, 0, 0.8)"
              onPress={handleEditItem}>
              Editar
            </InfoButton>
            <InfoButton
              opacity={true}
              color="rgba(213, 0, 0, 0.8)"
              onPress={handleDeleteItem}>
              Deletar
            </InfoButton>
          </Row>
        )}
        <ButtonInfo opacity={true} onPress={() => setModalVisible(false)}>
          <ButtonInfoText>voltar</ButtonInfoText>
        </ButtonInfo>
      </BaseModal>
    </Container>
  );
};
ItemsList.defaultProps = {
  write: false,
};
ItemsList.propTypes = {
  items: PropTypes.object.isRequired,
  write: PropTypes.bool,
};

export default ItemsList;
