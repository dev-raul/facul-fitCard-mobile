import React from 'react';
import {useAuth} from '~/context/auth';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import DashBoard from '~/pages/DashBoard';
import StudantTrainig from '~/pages/StudantTrainig';
import ViewTraining from '~/pages/ViewTraining';

import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';
import {
  loadStudantRequest,
  addStudantRequest,
} from '~/store/modules/studant/actions';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');
jest.mock('@react-navigation/native');
jest.mock('react-redux');

describe('Aderir Training Integration', () => {
  it('should be able to render page', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        studant: {
          loading: true,
          data: [],
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const navigate = jest.fn();
    useNavigation.mockReturnValue({navigate});

    const {getByTestId, getByText, rerender, getByPlaceholderText} = render(
      <DashBoard />,
    );
    expect(dispatch).toHaveBeenCalledWith(loadStudantRequest());

    expect(getByTestId('loading')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        studant: {
          loading: false,
          data: [],
        },
      }),
    );

    rerender(<DashBoard />);

    expect(getByText('Adicionar Aluno')).toBeTruthy();

    fireEvent.press(getByText('Adicionar Aluno'));

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

    rerender(
      <StudantTrainig
        navigation={{navigate}}
        route={{
          params: {
            studantId: 1,
          },
        }}
      />,
    );

    expect(dispatch).toHaveBeenCalledWith(loadStudantTrainingRequest(1));
    expect(getByTestId('loading')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        itemTraining: {
          loading: true,
          data: [],
        },
      }),
    );

    rerender(
      <ViewTraining
        route={{
          params: {
            trainingId: 1,
            schedule: '09/08/2020',
          },
        }}
      />,
    );
    expect(dispatch).toHaveBeenCalled();

    expect(getByTestId('loading')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        itemTraining: {
          loading: false,
          training: {
            name: 'Raul',
            id: 1,
          },
          data: [],
        },
      }),
    );

    rerender(
      <ViewTraining
        route={{
          params: {
            trainingId: 1,
            schedule: '09/08/2020',
          },
        }}
      />,
    );

    expect(getByText('Raul')).toBeTruthy();
    expect(getByText('09/08/2020')).toBeTruthy();
    expect(getByText('Items da ficha:')).toBeTruthy();
    expect(
      getByText(
        'Essa ficha ainda não possui exercícios! Fale com o seu personal',
      ),
    ).toBeTruthy();
  });
});
