import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  ButtonNewStudant,
  Title,
  StudantList,
  ListEmptyView,
  ListEmptyText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {loadStudantRequest} from '~/store/modules/studant/actions';

import ItemListStudant from './ItemListStudant';
import ModalAddStudant from './ModalAddStudant';

export default function DashBoard() {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.studant);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadStudantRequest());
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
      <ModalAddStudant
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
      <ButtonNewStudant onPress={() => setModalVisible(true)}>
        Adicionar Aluno
      </ButtonNewStudant>

      {data.length === 0 ? (
        <ListEmptyView>
          <Icon name="user-slash" color="#e02041" size={40} />
          <ListEmptyText>Você ainda não possui alunos!</ListEmptyText>
        </ListEmptyView>
      ) : (
        <>
          <Title>Seus alunos:</Title>
          <StudantList
            data={data}
            renderItem={({item}) => <ItemListStudant studant={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}
    </Container>
  );
}
