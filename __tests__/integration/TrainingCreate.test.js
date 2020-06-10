import React from 'react';
import {useAuth} from '~/context/auth';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import Training from '~/pages/Training';
import ViewTraining from '~/pages/ViewTraining';
import EditItem from '~/pages/EditItem';

import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';
import {
  loadStudantRequest,
  addStudantRequest,
} from '~/store/modules/studant/actions';

import {render, fireEvent} from '@testing-library/react-native';

jest.mock('~/context/auth');
jest.mock('@react-navigation/native');
jest.mock('react-redux');

describe('Training Create Integration', () => {
  const test = {
    id: 1,
    instrument: 'Supino',
    series: 5,
    repeat: 5,
    load: 30,
    observation: null,
  };
  it('should be able to render page', () => {
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

    const {getByTestId, getByText, rerender, getByPlaceholderText} = render(
      <Training />,
    );
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

    useSelector.mockImplementation((cb) =>
      cb({
        itemTraining: {
          loading: false,
          training: {
            name: 'Raul',
            id: 1,
          },
          data: [test],
        },
      }),
    );

    rerender(
      <ViewTraining
        route={{
          params: {
            trainingId: 1,
            schedule: '09/08/2020',
            write: true,
          },
        }}
      />,
    );

    expect(getByText('Adicionar Exercício')).toBeTruthy();

    fireEvent.press(getByText('Adicionar Exercício'));
    expect(getByText('Informe os dados do exercício:')).toBeTruthy();
    expect(getByPlaceholderText('Nome do exercício')).toBeTruthy();
    expect(getByPlaceholderText('Series')).toBeTruthy();
    expect(getByPlaceholderText('Repetições')).toBeTruthy();
    expect(getByPlaceholderText('Peso')).toBeTruthy();
    expect(getByPlaceholderText('Observações')).toBeTruthy();
    expect(getByText('CRIAR')).toBeTruthy();
    fireEvent.press(getByText('CRIAR'));

    useSelector.mockImplementation((cb) =>
      cb({
        itemTraining: {
          training: {
            id: 1,
          },
          error: false,
          loading: true,
          data: [test],
        },
      }),
    );

    rerender(
      <EditItem
        route={{
          params: {
            itemId: 1,
          },
        }}
      />,
    );

    expect(
      getByText('Informe os dados que você deseja atualizar:'),
    ).toBeTruthy();
    expect(getByText('Nenhum dos campos são obrigatórios')).toBeTruthy();

    expect(getByPlaceholderText(`Nome: ${test?.instrument}`)).toBeTruthy();
    expect(getByPlaceholderText(`Se: ${test?.series}`)).toBeTruthy();
    expect(getByPlaceholderText(`Re: ${test?.repeat}`)).toBeTruthy();
    expect(getByPlaceholderText(`Peso: ${test?.load}`)).toBeTruthy();
    expect(
      getByPlaceholderText(`Observações: ${test?.observation || 'Vazio'}`),
    ).toBeTruthy();

    expect(getByText('CONFIRMAR')).toBeTruthy();
  });
});
