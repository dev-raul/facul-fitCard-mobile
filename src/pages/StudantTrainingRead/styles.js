import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Button from '~/components/Button';
export const Container = styled.View`
  padding: 20px 20px 0 20px;
  background: #fff;
  flex: 1;
`;
export const Title = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const OpView = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
`;
export const OpButton = styled(Button)`
  width: 45%;
`;

export const InfoText = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;
export const TrainingList = styled(FlatList)`
  margin-top: 15px;
`;
