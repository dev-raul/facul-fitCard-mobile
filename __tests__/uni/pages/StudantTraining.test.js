import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import StudantTrainig from '~/pages/StudantTrainig';
import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');

describe('<StudantTrainig/> Page', () => {
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
      <StudantTrainig
        navigation={{navigate}}
        route={{
          params: {
            studantId: 1,
          },
        }}
      />,
    );

    expect(dispacth).toHaveBeenCalledWith(loadStudantTrainingRequest(1));
    expect(getByTestId('loading')).toBeTruthy();
  });
});
