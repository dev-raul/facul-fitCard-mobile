import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import TrainingList from '~/components/TrainingList';

import {deleteTrainingRequest} from '~/store/modules/training/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('~/libs/date');
jest.mock('react-redux');
jest.mock('@react-navigation/native');

describe('<TrainingList/> Component', () => {
  it('should be able to render empty list', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        studantTraining: {
          loading: false,
        },
      }),
    );
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    let {getByText, rerender} = render(<TrainingList trainings={[]} />);

    expect(getByText('Você não tem nenhum modelo de ficha!')).toBeTruthy();

    rerender(
      <TrainingList
        trainings={[
          {
            id: 1,
            createdAt: '2020-08-09T00:00:00.000Z',
            name: 'Braços',
          },
        ]}
      />,
    );

    expect(getByText('Braços')).toBeTruthy();
  });

  it('should be able to delete training', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        studantTraining: {
          loading: false,
        },
      }),
    );
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    const dispacth = jest.fn();
    useDispatch.mockReturnValue(dispacth);

    let {getByTestId} = render(
      <TrainingList
        trainings={[
          {
            id: 1,
            createdAt: '2020-08-09T00:00:00.000Z',
            name: 'Braços',
          },
        ]}
      />,
    );

    fireEvent.press(getByTestId('delete-training'));

    expect(dispacth).toHaveBeenCalledWith(deleteTrainingRequest(1));
  });

  it('should be able to adding studant training', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        studantTraining: {
          loading: false,
        },
      }),
    );
    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    const dispacth = jest.fn();

    useDispatch.mockReturnValue(dispacth);

    let {getByTestId, getByText, debug} = render(
      <TrainingList
        addStudantTraining={true}
        trainings={[
          {
            id: 1,
            createdAt: '2020-08-09T00:00:00.000Z',
            name: 'Braços',
          },
        ]}
      />,
    );

    fireEvent.press(getByText('Aderir'));

    const now = new Date();

    fireEvent.press(getByTestId('button-date-picker'));
    fireEvent.changeText(getByTestId('date-picker'), {
      event: {type: 'set'},
      selectedDate: now,
    });
    fireEvent.press(getByText('Confirmar'));

    expect(dispacth).toHaveBeenCalled();
  });
});
