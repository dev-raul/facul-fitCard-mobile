import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {
  ModalTitle,
  ModalInput,
  ModalButtonInfo,
  ModalButtonInfoText,
  ViewGroup,
} from './styles';

import Button from '~/components/Button';
import BaseModal from '~/components/Modal';

import {addItemTrainingRequest} from '~/store/modules/itemsTraining/actions';

export default function ModalAddItem({visible, onCancel, trainingId}) {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.training);
  const [instrument, setInstrument] = useState('');
  const [series, setSeries] = useState('');
  const [repeat, setRepeat] = useState('');
  const [load, setLoad] = useState('');
  const [observation, setObservetaion] = useState('');

  const seriesRef = useRef();
  const repeatRef = useRef();
  const loadRef = useRef();
  const observationRef = useRef();

  useEffect(() => {
    if (!loading && !error) {
      handleCancelModal();
    }
  }, [loading, error]);

  const handleSubmitNewItem = () => {
    let data;
    if (observation) {
      data = {
        instrument,
        series: parseInt(series),
        repeat: parseInt(repeat),
        load: parseInt(load),
        observation,
      };
    } else {
      data = {
        instrument,
        series: parseInt(series),
        repeat: parseInt(repeat),
        load: parseInt(load),
      };
    }
    dispatch(addItemTrainingRequest(trainingId, data));
  };
  const handleCancelModal = () => {
    onCancel();
    setInstrument('');
    setSeries('');
    setRepeat('');
    setLoad('');
    setObservetaion('');
  };
  return (
    <BaseModal visible={visible} onRequestClose={handleCancelModal}>
      <ModalTitle>Informe os dados do exercício:</ModalTitle>
      <ModalInput
        placeholder="Nome do exercício"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => seriesRef.current.focus()}
        value={instrument}
        onChangeText={setInstrument}
      />
      <ViewGroup>
        <ModalInput
          ref={seriesRef}
          keyboardType="numeric"
          style={{width: '45%'}}
          placeholder="Series"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => repeatRef.current.focus()}
          value={series}
          onChangeText={setSeries}
        />
        <ModalInput
          ref={repeatRef}
          keyboardType="numeric"
          style={{width: '45%'}}
          placeholder="Repetições"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => loadRef.current.focus()}
          value={repeat}
          onChangeText={setRepeat}
        />
      </ViewGroup>

      <ModalInput
        ref={loadRef}
        keyboardType="numeric"
        placeholder="Peso"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => observationRef.current.focus()}
        value={load}
        onChangeText={setLoad}
      />

      <ModalInput
        style={{height: 70}}
        ref={observationRef}
        numberOfLines={4}
        multiline={true}
        placeholder="Observações"
        autoCorrect={false}
        autoCapitalize="none"
        value={observation}
        onChangeText={setObservetaion}
      />

      <Button
        opacity={true}
        loading={loading}
        color="#69F0AE"
        onPress={handleSubmitNewItem}>
        CRIAR
      </Button>
      <ModalButtonInfo onPress={handleCancelModal}>
        <ModalButtonInfoText>Cancelar</ModalButtonInfoText>
      </ModalButtonInfo>
    </BaseModal>
  );
}

ModalAddItem.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  trainingId: PropTypes.number.isRequired,
};
