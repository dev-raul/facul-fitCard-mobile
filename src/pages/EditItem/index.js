import React, {useState, useRef, useEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Title, InfoText, EditInput, ViewGroup} from './styles';

import Button from '~/components/Button';
import Error from '~/components/Error';

import {updateItemTrainingRequest} from '~/store/modules/itemsTraining/actions';
const EditItem = ({route}) => {
  const dispatch = useDispatch();
  const {itemId} = route.params;
  const {data, training, error} = useSelector((state) => state.itemTraining);
  const [item, setItem] = useState({});

  const [submit, setSubmit] = useState(false);
  const [instrument, setInstrument] = useState(null);
  const [series, setSeries] = useState(null);
  const [repeat, setRepeat] = useState(null);
  const [load, setLoad] = useState(null);
  const [observation, setObservetaion] = useState(null);

  const seriesRef = useRef();
  const repeatRef = useRef();
  const loadRef = useRef();
  const observationRef = useRef();

  useEffect(() => {
    const item = data.find((item) => item.id === itemId);
    setItem(item);
  }, []);

  const handleUpdateItem = () => {
    let data = {};
    if (instrument) data = {...data, instrument};
    if (series) data = {...data, series: parseInt(series)};
    if (repeat) data = {...data, repeat: parseInt(repeat)};
    if (load) data = {...data, load: parseInt(load)};
    if (observation) data = {...data, observation};
    if (Object.entries(data).length === 0) {
      Alert.alert('', 'Preencha pelo menos um dos dados!');
    } else {
      dispatch(updateItemTrainingRequest(training.id, itemId, data));
    }
    setSubmit(true);
  };

  return (
    <Container>
      <Title> Informe os dados que você deseja atualizar: </Title>
      <InfoText> Nenhum dos campos são obrigatórios </InfoText>
      <EditInput
        placeholder={`Nome: ${item?.instrument}`}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => seriesRef.current.focus()}
        value={instrument || ''}
        onChangeText={setInstrument}
      />
      <ViewGroup>
        <EditInput
          ref={seriesRef}
          keyboardType="numeric"
          style={{width: '45%'}}
          placeholder={`Se: ${item?.series}`}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => repeatRef.current.focus()}
          value={series || ''}
          onChangeText={setSeries}
        />
        <EditInput
          ref={repeatRef}
          keyboardType="numeric"
          style={{width: '45%'}}
          placeholder={`Re: ${item?.repeat}`}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => loadRef.current.focus()}
          value={repeat || ''}
          onChangeText={setRepeat}
        />
      </ViewGroup>

      <EditInput
        ref={loadRef}
        keyboardType="numeric"
        placeholder={`Peso: ${item?.load}`}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => observationRef.current.focus()}
        value={load || ''}
        onChangeText={setLoad}
      />

      <EditInput
        style={{height: 70}}
        ref={observationRef}
        numberOfLines={4}
        multiline={true}
        placeholder={`Observações: ${item?.observation || 'Vazio'}`}
        autoCorrect={false}
        autoCapitalize="none"
        value={observation || ''}
        onChangeText={setObservetaion}
      />
      {error && submit && <Error error={error} />}
      <Button opacity={true} color="#69F0AE" onPress={handleUpdateItem}>
        CONFIRMAR
      </Button>
    </Container>
  );
};

export default EditItem;
