import styled from "styled-components";

export const InputBoxSmall = styled.input<{ error?: boolean }>`
  color: ${({ error }) => (error ? `#d9534f` : `#000000`)};
  display: flex;
  width: 40%;
  padding: 10px;
  border-radius: 5px;
`;
