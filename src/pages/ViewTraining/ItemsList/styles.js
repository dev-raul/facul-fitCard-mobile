import styled from 'styled-components/native';
import Button from '~/components/Button';
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const ItemText = styled.Text`
  margin: 0 3px;
  font-size: 18px;
  text-align: center;
`;
export const MoreButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const Description = styled.Text`
  margin: 20px 5px 5px 5px;
  align-self: stretch;
  text-align: center;
  font-size: 20px;
`;

export const ButtonInfo = styled.TouchableOpacity``;
export const ButtonInfoText = styled.Text`
  padding: 10px 30px;
  font-weight: bold;
  text-align: center;
  color: #e02041;
`;

export const Row = styled.View`
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const InfoButton = styled(Button)`
  width: 45%;
`;
