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
import Error from '~/components/Error';

import {addStudantRequest} from '~/store/modules/studant/actions';

export default function ModalAddStudant({visible, onCancel}) {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.studant);

  const [submit, setSubmit] = useState(false);
  const [nameStudant, setNameStudant] = useState('');
  const [idStudant, setIdStudant] = useState('');
  useEffect(() => {
    if (!loading && !error) {
      handleCancelModal();
    }
  }, [loading, error]);

  const idStudantRef = useRef();

  const handleSubmitNewStudant = () => {
    setSubmit(true);
    dispatch(addStudantRequest({name: nameStudant, id_hash: idStudant}));
  };
  const handleCancelModal = () => {
    onCancel();
    setNameStudant('');
    setIdStudant('');
    setSubmit(false);
  };
  return (
    <BaseModal visible={visible} onRequestClose={handleCancelModal}>
      <ModalTitle>Informe os dados no novo aluno:</ModalTitle>
      <ModalInput
        placeholder="Nome do aluno"
        autoCorrect={false}
        autoCapitalize="words"
        returnKeyType="next"
        onSubmitEditing={() => idStudantRef.current.focus()}
        value={nameStudant}
        onChangeText={setNameStudant}
      />
      <ModalInput
        ref={idStudantRef}
        placeholder="ID de acesso"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={handleSubmitNewStudant}
        value={idStudant}
        onChangeText={setIdStudant}
      />
      {error && submit && <Error error={error} />}
      <Button
        opacity={true}
        loading={loading}
        color="#69F0AE"
        onPress={handleSubmitNewStudant}>
        CADASTRAR
      </Button>
      <ModalButtonInfo onPress={handleCancelModal}>
        <ModalButtonInfoText>Cancelar</ModalButtonInfoText>
      </ModalButtonInfo>
    </BaseModal>
  );
}

ModalAddStudant.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
