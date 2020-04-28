import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {useAuth} from '~/context/auth';

export default function DashBoard() {
  const {SignOut} = useAuth();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          SignOut();
        }}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
