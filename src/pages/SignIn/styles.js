import styled from 'styled-components/native';
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
  font-size: 24px;
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
