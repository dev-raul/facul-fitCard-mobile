import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  background: #e02041;
  flex: 1;
  justify-content: space-around;
  margin: 0;
`;

export const Logo = styled.Image`
  margin-top: 50px;
  height: 120px;
  width: 120px;
  align-self: center;
`;
export const SwitchView = styled.View`
  margin: 20px;
`;
export const WellcomeText = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #fff;
`;
export const WelcomeDescriptionText = styled.Text`
  margin: 10px 0px;
  padding: 0px 20px;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const ButtonView = styled(RectButton)`
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  opacity: 0.9;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: stretch;
  box-shadow: 12px 100px 100px rgba(0, 0, 0, 0.5);
`;
export const ButtonText = styled.Text`
  width: 100%;
  text-align: center;
  color: #e02041;
  font-size: 30px;
`;
