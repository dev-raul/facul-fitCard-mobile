import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {ContainerRect, ContainerOpacity, Text} from './styles';

export default function Button({opacity, children, loading, ...rest}) {
  if (opacity) {
    return (
      <ContainerOpacity {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text>{children}</Text>
        )}
      </ContainerOpacity>
    );
  }

  return (
    <ContainerRect {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </ContainerRect>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  opacity: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  opacity: false,
};
