import styled from 'styled-components/native';
import Input from '~/components/Input';
export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'position',
})`
  padding: 20px 20px 0 20px;
  background: #fff;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const InfoText = styled.Text`
  margin: 5px 0 20px 0;
  font-size: 16px;
  color: rgba(255, 145, 0, 1);
  font-weight: 300;
  text-align: center;
`;

export const EditInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(0,0,0, 0.8)',
})`
  margin-bottom: 10px;
`;

export const ViewGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
