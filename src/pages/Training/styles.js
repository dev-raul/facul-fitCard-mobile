import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 40px 20px 0 20px;
  background: #fff;
`;
export const ButtonNewTraining = styled(Button).attrs({
  color: '#e02041',
})``;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
`;
export const StudantList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 10px;
  padding-right: 10px;
  margin-right: -10px;
`;

export const ListEmptyView = styled.View`
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
`;
export const ListEmptyText = styled.Text`
  margin-top: 10px;
  color: #e02041;
  font-size: 20px;
  font-weight: 400;
`;
