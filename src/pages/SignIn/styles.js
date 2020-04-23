import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #e02041;
  margin: 0;
  padding: 20px;
`;
export const Logo = styled.Image`
  align-self: center;
`;
export const FormView = styled.View``;
export const Title = styled.Text`
  margin: 100px 0 20px 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const NavigateSignUpView = styled.TouchableOpacity`
  margin-top: 30px;
  align-self: center;
  flex-direction: row;
`;
export const NavigateSignUpText = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 16px;
`;
