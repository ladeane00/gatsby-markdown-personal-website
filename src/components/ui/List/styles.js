import styled from 'styled-components';
import tw from 'tailwind.macro';

export const List = styled.div`
  ${tw`flex  sm:flex-row w-full p-2 relative border-l border-blue-900`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-1/3`};
`;

export const Content = styled.div`
  ${tw`w-full sm:w-2/3 mt-4 sm:mt-0`};
`;

export const Title = styled.div`
  ${tw`font-semibold mt-0 ml-2`};
  left: -80px
`;

export const Subtitle = styled.div`
  ${tw`text-xs ml-2`};
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-blue-900 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 15px;
`;
