import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'position',
})`
  flex: 1;
  background: #e02041;
  margin: 0;
  padding: 20px;
`;
export const Logo = styled.Image`
  align-self: center;
`;
export const FormView = styled.View`
  margin: 100px 0 20px;
`;
export const Title = styled.Text`
  margin: 10px 0 20px 0;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
export const SubTitle = styled.Text`
  margin: 10px 0 20px 0;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const NavigateSignInView = styled.TouchableOpacity`
  margin-top: 30px;
  align-self: center;
  flex-direction: row;
`;
export const NavigateSignInText = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 16px;
`;
export const ErrorView = styled.View`
  align-self: stretch;
  margin: 5px 0 10px 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const ErrorText = styled.Text`
  padding: 5px 0px;
  color: #b00020;
  margin-left: 5px;
  font-size: 15px;
  letter-spacing: 1px;
`;

export const ModalNotification = styled.Modal``;
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #333;
  opacity: 0.9;
  z-index: 100;
`;
export const ModalContent = styled.View`
  align-self: stretch;
  padding: 20px 30px;
  margin: 10px 30px;
  background: #fff;
  border-radius: 8px;
`;
export const ModalTitle = styled.Text`
  align-self: center;
  font-weight: 500;
  font-size: 18px;
`;
export const ModalDescription = styled.Text`
  align-self: center;
  font-weight: 300;
  margin-top: 10px;
  font-size: 16px;
`;
export const FooterView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-around;
`;
export const ButtonInfo = styled.TouchableOpacity``;
export const ButtonInfoText = styled.Text`
  padding: 10px 30px;
  font-weight: bold;
  color: ${(props) => props.color || 'blue'};
`;
