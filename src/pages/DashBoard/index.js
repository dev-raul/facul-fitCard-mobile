import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useAuth} from '~/context/auth';

export default function DashBoard() {
  const {SignOut} = useAuth();
  return (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onPress={() => {
        SignOut();
      }}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  );
}
