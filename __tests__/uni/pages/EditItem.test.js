import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import EditItem from '~/pages/EditItem';

import {updateItemTrainingRequest} from '~/store/modules/itemsTraining/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');
jest.mock('@react-navigation/native');
describe('<EditItem/> Page', () => {
  const test = {
    id: 1,
    instrument: 'Supino',
    series: 5,
    repeat: 5,
    load: 30,
    observation: null,
  };
  it('should be able to render edit item', () => {
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

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByText, getByPlaceholderText} = render(
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

  it('should be able to handle edit item', () => {
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

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const {getByText, getByPlaceholderText} = render(
      <EditItem
        route={{
          params: {
            itemId: 1,
          },
        }}
      />,
    );

    fireEvent.changeText(
      getByPlaceholderText(`Nome: ${test?.instrument}`),
      test.instrument,
    );
    fireEvent.changeText(
      getByPlaceholderText(`Se: ${test?.series}`),
      test.series,
    );
    fireEvent.changeText(
      getByPlaceholderText(`Re: ${test?.repeat}`),
      test.repeat,
    );
    fireEvent.changeText(
      getByPlaceholderText(`Peso: ${test?.load}`),
      test.load,
    );
    fireEvent.changeText(
      getByPlaceholderText(`Observações: ${test?.observation || 'Vazio'}`),
      'Devagar',
    );

    fireEvent.press(getByText('CONFIRMAR'));
    let {id, ...rest} = test;
    expect(dispatch).toHaveBeenCalledWith(
      updateItemTrainingRequest(1, 1, {...rest, observation: 'Devagar'}),
    );
  });
});
