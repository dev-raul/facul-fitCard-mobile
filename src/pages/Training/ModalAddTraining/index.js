import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {
  ModalTitle,
  ModalInput,
  ModalButtonInfo,
  ModalButtonInfoText,
} from './styles';

import Button from '~/components/Button';
import BaseModal from '~/components/Modal';

import {addTrainingRequest} from '~/store/modules/training/actions';

export default function ModalAddTraining({visible, onCancel}) {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.training);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!loading && !error) {
      handleCancelModal();
    }
  }, [loading, error]);

  const handleSubmitNewTraining = () => {
    dispatch(addTrainingRequest({name}));
  };
  const handleCancelModal = () => {
    onCancel();
    setName('');
  };
  return (
    <BaseModal visible={visible} onRequestClose={handleCancelModal}>
      <ModalTitle>Informe os dados da ficha:</ModalTitle>
      <ModalInput
        placeholder="Nome da ficha"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={handleSubmitNewTraining}
        value={name}
        onChangeText={setName}
      />

      <Button
        opacity={true}
        loading={loading}
        color="#69F0AE"
        onPress={handleSubmitNewTraining}>
        CRIAR
      </Button>
      <ModalButtonInfo onPress={handleCancelModal}>
        <ModalButtonInfoText>Cancelar</ModalButtonInfoText>
      </ModalButtonInfo>
    </BaseModal>
  );
}

ModalAddTraining.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
