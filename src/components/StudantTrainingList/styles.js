import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(FlatList).attrs({
  columnWrapperStyle: {justifyContent: 'space-around'},
})`
  margin-top: 15px;
`;
export const TrainingView = styled.View`
  width: 45%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px;
  background: #eee;
  border-radius: 8px;
  flex-direction: column;
`;
export const TrainingHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Data = styled.Text`
  font-size: 12px;
  text-align: center;
`;
export const Trash = styled.TouchableOpacity``;
export const TrainingImg = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
  margin: 10px 0;
`;
export const TrainingName = styled.Text`
  text-align: center;
  align-self: stretch;
  font-size: 16px;
`;
export const InfoView = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const MoreButton = styled(RectButton)`
  padding: 5px 10px;
  align-self: center;
  border: 1px solid rgba(98, 0, 238, 0.8);
  border-radius: 4px;
`;
export const MoreButtonText = styled.Text`
  color: rgba(98, 0, 238, 0.8);
  font-size: 18px;
  font-weight: 400;
`;
