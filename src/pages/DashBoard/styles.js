import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 40px 20px 0 20px;
  background: #fff;
`;
export const ButtonNewStudant = styled(Button).attrs({
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
