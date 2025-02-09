import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;
