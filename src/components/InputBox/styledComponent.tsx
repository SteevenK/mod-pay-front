import styled from "styled-components";

export const InputBox = styled.div`
  margin: 10px;
  width: 95%;
`;

export const Input = styled.input<{ error?: boolean }>`
  color: ${({ error }) => (error ? `#d9534f` : `#000000`)};
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  }
`;
