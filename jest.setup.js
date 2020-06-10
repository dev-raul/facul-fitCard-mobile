import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => ({
  ...mockAsyncStorage,
  __INTERNAL_MOCK_STORAGE__: {
    '@FC_Auth:user': "{'name': 'raul', 'id':1, 'username': 'raul'}",
  },
}));

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    const TouchableOpacity = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableOpacity',
    );

    TouchableOpacity.displayName = 'TouchableOpacity';

    return TouchableOpacity;
  },
);

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => {
    const TouchableHighlight = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableHighlight',
    );

    TouchableHighlight.displayName = 'TouchableHighlight';

    return TouchableHighlight;
  },
);

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});
