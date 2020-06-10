import React from 'react';
import {useAuth} from '~/context/auth';
import {useNavigation} from '@react-navigation/native';
import SwitchAuth from '~/pages/SwitchAuth';
import SignIn from '~/pages/SignIn';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');
jest.mock('@react-navigation/native');

describe('SignIn Integration', () => {
  it('should be able to render page', () => {
    const SignInFn = jest.fn();
    useAuth.mockReturnValue({SignIn: SignInFn});
    const navigate = jest.fn();
    useNavigation.mockReturnValue(navigate);
    const {getByText, getByPlaceholderText, rerender} = render(<SwitchAuth />);

    expect(getByText('Personal')).toBeTruthy();
    fireEvent.press(getByText('Personal'));

    rerender(
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
  });
});
