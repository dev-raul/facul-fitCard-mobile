import React from 'react';
import {useNavigation} from '@react-navigation/native';

import SwitchAuth from '~/pages/SwitchAuth';

import {render, fireEvent, waitForElement} from '@testing-library/react-native';

jest.mock('@react-navigation/native');
describe('<SwitchAuth/> Page', () => {
  it('should be able to render page', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});
    const {getByText} = render(<SwitchAuth />);
    expect(getByText('Seja Bem-vindo!')).toBeTruthy();
    expect(getByText('Escolha o seu tipo de usuário:')).toBeTruthy();
    expect(getByText('Personal')).toBeTruthy();
    expect(getByText('Aluno')).toBeTruthy();
  });
});
