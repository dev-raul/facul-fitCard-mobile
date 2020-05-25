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
} from './styles';

import {loadItemTrainingRequest} from '~/store/modules/itemsTraining/actions';

import ItemList from './ItemsList';
import ModalAddItem from './ModalAddItem';
import EmptyList from '~/components/EmptyList';

const ViewTraining = ({route}) => {
  const dispatch = useDispatch();
  const {data, loading, training} = useSelector((state) => state.itemTraining);
  const [isLoad, setIsLoad] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const {trainingId, schedule, write} = route.params;
  useEffect(() => {
    dispatch(loadItemTrainingRequest(trainingId));
  }, []);

  if (isLoad) {
    if (loading) {
      setIsLoad(false);
    }
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  } else if (!loading || modalVisible) {
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
        <MainText>Items da ficha:</MainText>

        {data.length === 0 ? (
          <EmptyList icon="file-alt">
            {write
              ? 'Crie os exercícios!'
              : 'Essa ficha ainda não possui exercícios! Fale com o seu personal'}
          </EmptyList>
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
  } else {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }
};

ViewTraining.defautProps = {
  write: false,
};

ViewTraining.propTYpes = {
  write: PropTypes.bool,
};

export default ViewTraining;
