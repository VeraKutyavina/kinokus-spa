import Link from 'next/link';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Title = styled.h4`
  margin: 0;

  font-family: monospace;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;

  overflow: hidden; /* Скрыть часть изображения, если оно увеличивается */

  border-radius: 8px; /* По желанию: добавляет скругленные углы */

  img {
    transition: transform 0.3s ease-in-out; /* Плавный переход при увеличении */
  }

  &:hover img {
    transform: scale(1.1); /* Увеличение изображения */
  }
`;
