import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  // @media (max-width: 800px) {
  //   margin-bottom: 50px;
  // }
`;

export const Logo = styled.img`
  max-width: 148px;
  }

  // @media (max-width: 800px) {
  //     max-width: 105px;
  // }
`;

export const Icones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 40px;
  margin: 0 20px;
`;