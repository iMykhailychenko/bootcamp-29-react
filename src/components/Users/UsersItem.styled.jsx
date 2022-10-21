import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #8b8b8b;
  border-radius: 5px;
`;

export const UserName = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const UserEmail = styled.p`
  color: #777;
`;

export const OpenToWork = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;

  background-color: ${props => {
    return props.open ? 'green' : 'red';
  }};
`;

export const Paragraph = styled.p`
  font-size: 20px;

  span:nth-of-type(1) {
    color: red;
  }
`;
