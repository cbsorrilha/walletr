import styled from 'styled-components';

const InputUI = styled.input`
  font-size: 1rem;
  width: 100%;
  background-color: #fdfdfd;
  padding: 0.5rem 0.3rem;
  border: solid #6a93db 0.05rem;
  border-radius: 3px;
  ${({ error }) => (error ? 'border-color: #F99;' : '')};

  &:focus,
  &:hover {
    border-color: #2f65c4;
    outline: none;
    ${({ error }) => (error ? 'border-color: #F99;' : '')};
  }
`;

export default InputUI;
