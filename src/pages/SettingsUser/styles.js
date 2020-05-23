import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';
export const Container = styled.View`
  flex: 1;
  padding: 40px 20px 0 20px;
  background: #fff;
  align-items: center;
`;

export const EditarButton = styled(Button)`
  margin-bottom: 40px;
  width: 50%;
`;

export const Name = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const Username = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const ExitText = styled.Text`
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #e02041;
`;

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

export const ModalButtonInfo = styled.TouchableOpacity`
  align-items: center;
`;
export const ModalButtonInfoText = styled.Text`
  padding: 10px 30px;
  font-weight: bold;
  color: #e02041;
`;

export const ExitView = styled.TouchableOpacity`
  margin: 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
`;
