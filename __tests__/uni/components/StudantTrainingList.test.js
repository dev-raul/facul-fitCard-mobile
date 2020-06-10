import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import StudantTrainingList from '~/components/StudantTrainingList';

import {deleteStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('~/libs/date', () => {
  return {
    formatDate: (x) => '09/08/2020',
  };
});
jest.mock('react-redux');
jest.mock('@react-navigation/native');

describe('<StudantTrainingList/> Component', () => {
  it('should be able to render empty list studant training', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    let {getByText, rerender} = render(
      <StudantTrainingList studantId={1} trainings={[]} />,
    );

    expect(getByText('Esse aluno ainda não possui treinos!')).toBeTruthy();

    rerender(
      <StudantTrainingList
        read={true}
        studantId={1}
        trainings={[
          {
            id: 1,
            name: 'Braços',
            StudantTraining: {
              schedule: '2020-08-09T00:00:00.000Z',
            },
          },
        ]}
      />,
    );

    expect(getByText('09/08/2020')).toBeTruthy();
    expect(getByText('Braços')).toBeTruthy();
  });

  it('should be able to delete studant training', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    const dispacth = jest.fn();
    useDispatch.mockReturnValue(dispacth);

    let {getByTestId} = render(
      <StudantTrainingList
        studantId={1}
        trainings={[
          {
            id: 1,
            name: 'Braços',
            StudantTraining: {
              schedule: '2020-08-09T00:00:00.000Z',
            },
          },
        ]}
      />,
    );

    fireEvent.press(getByTestId('delete-training'));

    expect(dispacth).toHaveBeenCalledWith(deleteStudantTrainingRequest(1, 1));
  });
});
