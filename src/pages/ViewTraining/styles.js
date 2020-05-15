import styled from 'styled-components/native';
import {FlatList} from 'react-native';

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
export const MainText = styled.Text`
  margin-top: 25px;
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
export const TrainingEmptyView = styled.View`
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
`;
export const TrainingEmptyText = styled.Text`
  margin-top: 10px;
  color: #e02041;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
`;
