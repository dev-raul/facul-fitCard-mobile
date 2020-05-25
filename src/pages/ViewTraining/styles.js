import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px 20px 0 20px;
  background: #fff;
  flex: 1;
`;
export const Header = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const Name = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
export const Date = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
export const AddItemButton = styled(Button).attrs({
  color: '#e02041',
})`
  margin-top: 10px;
`;
export const MainText = styled.Text`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 400;
`;
export const ItemsTraining = styled(FlatList)``;

export const HeaderListView = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin: 5px 0;
`;

export const HeaderListText = styled.Text`
  margin: 0 3px;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`;
