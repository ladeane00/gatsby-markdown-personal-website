import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-100 py-4 bg-gray-800`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-blue-100 hover:text-blue-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-blue-900 hover:text-blue-600 mx-2`};
`;
