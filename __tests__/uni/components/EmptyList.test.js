import React from 'react';

import EmptyList from '~/components/EmptyList';

import {render, fireEvent} from '@testing-library/react-native';

describe('EmptyList component', () => {
  it('should be able to emptly list rende', () => {
    let {getByText} = render(<EmptyList>Lista vazia</EmptyList>);

    expect(getByText('Lista vazia')).toBeTruthy();
  });
});
