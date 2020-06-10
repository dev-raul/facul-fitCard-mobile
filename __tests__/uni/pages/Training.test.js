import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Training from '~/pages/Training';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');

describe('<Training/> Page', () => {
  it('should be able to render', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        training: {
          loading: true,
          data: [],
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const navigate = jest.fn();

    const {getByTestId, getByText, rerender} = render(<Training />);
    expect(dispatch).toHaveBeenCalled();

    expect(getByTestId('loading')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        training: {
          loading: false,
          data: [],
        },
      }),
    );

    rerender(<Training />);

    expect(getByText('Adicionar Ficha')).toBeTruthy();
    expect(getByText('Você ainda não possui modelos de fichas!')).toBeTruthy();
  });
});
