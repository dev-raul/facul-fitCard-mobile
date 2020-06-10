import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import StudantTrainingRead from '~/pages/StudantTrainingRead';
import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');

describe('<StudantTrainingRead/> Page', () => {
  it('should be able to render', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        studant: {
          loading: false,
          data: [],
        },
        studantTraining: {
          loading: false,
          data: [],
        },
      }),
    );
    const navigate = jest.fn();
    const dispacth = jest.fn();
    useDispatch.mockReturnValue(dispacth);
    const {getByTestId, getByText, rerender} = render(
      <StudantTrainingRead
        navigation={{navigate}}
        route={{
          params: {
            studantId: 1,
          },
        }}
      />,
    );

    expect(dispacth).not.toHaveBeenCalled();
    expect(getByTestId('loading')).toBeTruthy();
  });
});
