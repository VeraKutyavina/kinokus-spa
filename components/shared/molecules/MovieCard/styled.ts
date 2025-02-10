import Link from 'next/link';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &:hover .overlay {
    opacity: 1;
  }
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
  height: 263px;
  overflow: hidden;

  border-radius: 0.5rem;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 263px;

  background: rgb(0 0 0 / 60%);
  border-radius: 0.5rem;
  opacity: 0;

  transition: opacity 0.3s ease-in-out;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem;

  cursor: pointer;

  background: rgb(255 255 255 / 20%);
  border: none;
  border-radius: 50%;

  transition: background 0.3s;

  &:hover {
    background: rgb(255 255 255 / 40%);
  }

  svg {
    font-size: 1.25rem;
    color: white;
  }
`;
