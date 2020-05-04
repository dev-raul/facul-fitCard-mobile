import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

export const ContainerRect = styled(RectButton)`
  height: 46px;
  background: ${(props) => (props.color ? props.color : '#3b9eff')};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const ContainerOpacity = styled(TouchableOpacity)`
  height: 46px;
  background: ${(props) => (props.color ? props.color : '#3b9eff')};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
