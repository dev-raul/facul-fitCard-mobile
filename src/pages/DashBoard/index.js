import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {Container, ButtonNewStudant, Title, StudantList} from './styles';

import {loadStudantRequest} from '~/store/modules/studant/actions';

import ItemListStudant from './ItemListStudant';
import ModalAddStudant from './ModalAddStudant';
import EmptyList from '~/components/EmptyList';
export default function DashBoard() {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.studant);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    dispatch(loadStudantRequest());
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
        <ModalAddStudant
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
        />
        <ButtonNewStudant onPress={() => setModalVisible(true)}>
          Adicionar Aluno
        </ButtonNewStudant>

        {data.length === 0 ? (
          <EmptyList icon="user-slash">Você ainda não possui alunos!</EmptyList>
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
  } else {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }
}
