import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator, ScrollView} from 'react-native';

import {
  Container,
  Header,
  Name,
  Date,
  AddItemButton,
  MainText,
  ItemsTraining,
  HeaderListView,
  HeaderListText,
  TrainingEmptyText,
  TrainingEmptyView,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {loadItemTrainingRequest} from '~/store/modules/itemsTraining/actions';

import ItemList from './ItemsList';
import ModalAddItem from './ModalAddItem';

const ViewTraining = ({route}) => {
  const dispatch = useDispatch();
  const {data, loading, training} = useSelector((state) => state.itemTraining);
  const [modalVisible, setModalVisible] = useState(false);

  const {trainingId, schedule, write} = route.params;
  useEffect(() => {
    dispatch(loadItemTrainingRequest(trainingId));
  }, []);

  if ((loading === null || loading) && !modalVisible) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Name>{training.name}</Name>
        <Date>{schedule}</Date>
      </Header>
      {write && (
        <>
          <AddItemButton onPress={() => setModalVisible(true)}>
            Adicionar Exercício
          </AddItemButton>
          <ModalAddItem
            trainingId={trainingId}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
          />
        </>
      )}
      <MainText>Serie de exercícios:</MainText>

      {data.length === 0 ? (
        <TrainingEmptyView>
          <Icon name="file-alt" color="#e02041" size={40} />
          <TrainingEmptyText>
            Essa ficha ainda não possui exercícios! Fale com o seu personal
          </TrainingEmptyText>
        </TrainingEmptyView>
      ) : (
        <>
          <HeaderListView>
            <HeaderListText style={{flex: 5, textAlign: 'left'}}>
              Aparelho
            </HeaderListText>
            <HeaderListText style={{flex: 2}}>S X R</HeaderListText>

            <HeaderListText style={{flex: 2}}>Pe</HeaderListText>
            <HeaderListText style={{flex: 1}}></HeaderListText>
          </HeaderListView>
          <ItemsTraining
            data={data}
            renderItem={({item}) => <ItemList write={write} items={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}
    </Container>
  );
};

ViewTraining.defautProps = {
  write: false,
};

ViewTraining.propTYpes = {
  write: PropTypes.bool,
};

export default ViewTraining;
