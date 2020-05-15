import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator, ScrollView} from 'react-native';

import {
  Container,
  Header,
  Name,
  Date,
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

const ViewTraining = ({route}) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.itemTraining);

  const {trainingId, schedule} = route.params;
  useEffect(() => {
    dispatch(loadItemTrainingRequest(trainingId));
  }, []);

  if (loading === null || loading) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Name>{data.name}</Name>
        <Date>{schedule}</Date>
      </Header>
      <MainText>Serie de exercícios:</MainText>

      {data?.item_trainings.length === 0 ? (
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
            data={data.item_trainings}
            renderItem={({item}) => <ItemList items={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}
    </Container>
  );
};

export default ViewTraining;
