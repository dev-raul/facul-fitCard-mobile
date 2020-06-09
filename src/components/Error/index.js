import React from 'react';
import {Container, Message} from './styles';

const Error = ({error}) => {
  if (Array.isArray(error)) {
    return (
      <Container>
        {error.map((err, index) => {
          return <Message key={index}> {err.message} </Message>;
        })}
      </Container>
    );
  }
  return (
    <Container>
      <Message> {error} </Message>
    </Container>
  );
};

export default Error;
