import React from 'react';
import {useAuth} from '~/context/auth';

import SignIn from '~/pages/SignIn';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');
describe('<SignIn/> Page', () => {
  it('should be able to render page', () => {
    const SignInFn = jest.fn();
    useAuth.mockReturnValue({SignIn: SignInFn});
    const navigate = jest.fn();

    const {getByText, getByPlaceholderText, rerender} = render(
      <SignIn
        navigation={{navigate}}
        route={{
          params: {
            provider: true,
          },
        }}
      />,
    );

    expect(getByText('Personal Treiner')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu username')).toBeTruthy();
    expect(getByPlaceholderText('Digite a sua senha')).toBeTruthy();
    expect(getByText('ENTRAR')).toBeTruthy();

    rerender(
      <SignIn
        navigation={{navigate}}
        route={{
          params: {
            provider: false,
          },
        }}
      />,
    );

    expect(getByPlaceholderText('ID')).toBeTruthy();
    expect(getByText('ENTRAR')).toBeTruthy();
  });

  it('should be able to login ', async () => {
    const SignInFn = {
      SignIn: jest.fn(() => Promise.resolve()),
    };
    useAuth.mockReturnValue(SignInFn);
    const navigate = jest.fn();

    const {getByText, getByPlaceholderText} = render(
      <SignIn
        navigation={{navigate}}
        route={{
          params: {
            provider: true,
          },
        }}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('Digite seu username'), 'raul');
    fireEvent.changeText(getByPlaceholderText('Digite seu username'), 'raul');
    fireEvent.press(getByText('ENTRAR'));
  });
});
