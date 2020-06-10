import React from 'react';
import {Text} from 'react-native';
import BaseModal from '~/components/Modal';

import {render} from '@testing-library/react-native';

describe('Base modal component', () => {
  it('should be able to base modal render', () => {
    let {getByText} = render(
      <BaseModal>
        <Text>Contain</Text>
      </BaseModal>,
    );

    expect(getByText('Contain')).toBeTruthy();
  });
});
