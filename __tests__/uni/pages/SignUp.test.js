import React from 'react';
import {useAuth} from '~/context/auth';

import SignUp from '~/pages/SignUp';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');
describe('<SignUp/> Page', () => {
  it('should be able to render page', () => {
    const SignInFn = jest.fn();
    useAuth.mockReturnValue({SignIn: SignInFn});
    const navigate = jest.fn();

    const {getByText, getByPlaceholderText, rerender} = render(
      <SignUp navigation={{navigate}} />,
    );

    expect(
      getByText(
        'Seja um personal mais prático quando for criar fichas e mude a sua rotina.',
      ),
    ).toBeTruthy();
    expect(getByText('Informe os seus dados:')).toBeTruthy();
    expect(getByPlaceholderText('Digite a sua senha')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu username')).toBeTruthy();
    expect(getByPlaceholderText('Digite a sua senha')).toBeTruthy();
    expect(getByText('CADASTRAR')).toBeTruthy();
    expect(getByText('Já tenho cadastro')).toBeTruthy();
  });
});
