import React from 'react';

import Error from '~/components/Error';

import {render, fireEvent} from '@testing-library/react-native';

describe('Error component', () => {
  it('should be able to error renderer', () => {
    let {getByText} = render(<Error error="error" />);

    expect(getByText('error')).toBeTruthy();

    ({getByText} = render(
      <Error error={[{message: 'Error 1'}, {message: 'Error 2'}]} />,
    ));
    expect(getByText('Error 1')).toBeTruthy();
    expect(getByText('Error 2')).toBeTruthy();
  });
});
