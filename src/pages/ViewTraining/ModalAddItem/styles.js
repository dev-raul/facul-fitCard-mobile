import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const ModalTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const ModalInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(0,0,0, 0.8)',
})`
  margin-bottom: 10px;
`;
export const ViewGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ModalButtonInfo = styled.TouchableOpacity`
  align-items: center;
`;
export const ModalButtonInfoText = styled.Text`
  padding: 10px 30px;
  font-weight: bold;
  color: #e02041;
`;
