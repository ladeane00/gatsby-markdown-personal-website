import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-blue-900 bg-white`};
  }

  a {
    ${tw`text-blue-900 hover:text-blue-600`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
