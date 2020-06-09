import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const List = styled(FlatList).attrs({
  columnWrapperStyle: {justifyContent: 'space-around'},
})`
  margin-top: 15px;
`;
export const TrainingView = styled.View`
  width: 45%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px 10px;
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
  align-self: stretch;
  border: 1px solid rgba(98, 0, 238, 0.8);
  border-radius: 4px;
`;
export const MoreButtonText = styled.Text`
  color: rgba(98, 0, 238, 0.8);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const AddStudantTrainingButton = styled(RectButton)`
  align-self: stretch;
  background: #e02041;
  height: 30px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const AddStudantTrainingText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const ModalTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ModalDate = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const ModalDateText = styled.Text`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
`;

export const ModalButtonInfo = styled.TouchableOpacity`
  align-items: center;
`;
export const ModalButtonInfoText = styled.Text`
  padding: 10px 30px;
  font-weight: bold;
  color: #e02041;
`;
