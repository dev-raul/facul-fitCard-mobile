import React from 'react';

import ButtonSignOut from '~/components/ButtonSignOut';
import {useAuth} from '~/context/auth';
import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');

describe('<ButtonSignOut/> Component', () => {
  it('should be able render', () => {
    const SignOut = jest.fn();
    useAuth.mockReturnValue({SignOut});

    const {getByTestId} = render(<ButtonSignOut />);

    fireEvent.press(getByTestId('sign-out'));

    expect(SignOut).toBeCalled();
  });
});
