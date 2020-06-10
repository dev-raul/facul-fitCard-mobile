import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AddStudantTraining from '~/pages/AddStudantTraining';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');
jest.mock('@react-navigation/native');
describe('<AddStudantTraining/> Page', () => {
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
    useNavigation.mockReturnValue({navigate});

    const {getByTestId, getByText, rerender} = render(
      <AddStudantTraining
        route={{
          params: {
            studantId: 1,
            studantName: 'Raul',
          },
        }}
      />,
    );
    expect(dispatch).toHaveBeenCalled();

    expect(getByTestId('loading')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        training: {
          loading: false,
          data: [
            {
              id: 1,
              createdAt: '2020-08-09T00:00:00.000Z',
              name: 'Braços',
            },
          ],
        },
        studantTraining: {
          loading: false,
        },
      }),
    );

    rerender(
      <AddStudantTraining
        route={{
          params: {
            studantId: 1,
            studantName: 'Raul',
          },
        }}
      />,
    );
    expect(getByText('Aluno: Raul')).toBeTruthy();
    expect(getByText('Todos os modelos de ficha:')).toBeTruthy();
  });
});
