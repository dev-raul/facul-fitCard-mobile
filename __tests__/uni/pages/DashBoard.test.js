import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import DashBoard from '~/pages/DashBoard';
import Modal from '~/pages/DashBoard/ModalAddStudant';
import ItemList from '~/pages/DashBoard/ItemListStudant';

import {
  loadStudantRequest,
  addStudantRequest,
} from '~/store/modules/studant/actions';

import {render, fireEvent} from '@testing-library/react-native';
jest.mock('react-redux');
jest.mock('@react-navigation/native');
describe('<DashBoard/> Page', () => {
  it('should be able to render load', () => {
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

    const {getByTestId, getByText, rerender} = render(<DashBoard />);
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
    expect(getByText('Você ainda não possui alunos!')).toBeTruthy();

    useSelector.mockImplementation((cb) =>
      cb({
        studant: {
          loading: false,
          data: [
            {
              name: 'raul',
            },
          ],
        },
      }),
    );

    rerender(<DashBoard />);
    expect(getByText('Seus alunos:')).toBeTruthy();
    expect(getByTestId('studant-list')).toBeTruthy();
  });

  it('should be able to adding studant', () => {
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
          error: false,
          loading: false,
          data: [],
        },
      }),
    );

    rerender(<DashBoard />);

    expect(getByText('Adicionar Aluno')).toBeTruthy();

    fireEvent.press(getByText('Adicionar Aluno'));

    expect(getByText('Informe os dados no novo aluno:')).toBeTruthy();

    const onCancel = jest.fn();

    rerender(<Modal visible={true} onCancel={onCancel} />);
    expect(getByText('Informe os dados no novo aluno:')).toBeTruthy();
    expect(getByPlaceholderText('Nome do aluno')).toBeTruthy();
    expect(getByPlaceholderText('ID de acesso')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('Nome do aluno'), 'Helano');
    fireEvent.changeText(getByPlaceholderText('ID de acesso'), 'fit_helano');
    fireEvent.press(getByText('CADASTRAR'));

    expect(dispatch).toHaveBeenCalledWith(
      addStudantRequest({name: 'Helano', id_hash: 'fit_helano'}),
    );
  });

  it('should be able to adding studant error', () => {
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

    const onCancel = jest.fn();
    const {getByTestId, getByText, rerender} = render(
      <Modal visible={true} onCancel={onCancel} />,
    );

    useSelector.mockImplementation((cb) =>
      cb({
        studant: {
          error: 'error',
          loading: false,
          data: [],
        },
      }),
    );
    rerender(<Modal visible={true} onCancel={onCancel} />);
    fireEvent.press(getByText('CADASTRAR'));
    expect(dispatch).toHaveBeenCalled();

    expect(getByText('error')).toBeTruthy();
  });

  it('should be able to render studant list', () => {
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
          error: false,
          loading: false,
          data: [
            {
              id: 1,
              name: 'Raul',
            },
          ],
        },
      }),
    );

    rerender(<DashBoard />);

    expect(getByText('Adicionar Aluno')).toBeTruthy();

    expect(getByText('Raul')).toBeTruthy();

    fireEvent.press(getByTestId('button-view-studant'));
    expect(navigate).toHaveBeenCalled();
  });
});
