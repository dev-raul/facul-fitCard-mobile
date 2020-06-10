import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ViewTraining from '~/pages/ViewTraining';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');
jest.mock('@react-navigation/native');

describe('<ViewTraining/> Page', () => {
  it('should be able to render', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        itemTraining: {
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

    const test = {
      id: 1,
      instrument: 'Supino',
      series: 5,
      repeat: 5,
      load: 30,
      observation: null,
    };
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

    fireEvent.press(getByTestId('more'));

    expect(getByText('Editar')).toBeTruthy();
    expect(getByText('Deletar')).toBeTruthy();
    fireEvent.press(getByText('Editar'));
    fireEvent.press(getByText('Deletar'));

    fireEvent.press(getByText('Cancelar'));
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
          },
        }}
      />,
    );

    expect(getByText(test.instrument)).toBeTruthy();
    expect(getByText(`${test.series} X ${test.repeat}`)).toBeTruthy();
    expect(getByText(`${test.load} kg`)).toBeTruthy();
    expect(getByTestId('more')).toBeTruthy();
    fireEvent.press(getByTestId('more'));
    expect(getByText('Sem observações')).toBeTruthy();
    fireEvent.press(getByText('voltar'));
  });
});
