import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const ForwardIcon = ({ ...props }) => {
  return (
    <Svg 
      style={{ width: 20, height: 20 }}
      { ...props }
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M15 10.8333C15 13.5916 12.7583 15.8333 9.99999 15.8333C7.24166 15.8333 4.99999 13.5916 4.99999 10.8333C4.99999 8.07498 7.24166 5.83331 9.99999 5.83331V9.16665L14.1667 4.99998L9.99999 0.833313V4.16665C6.31666 4.16665 3.33333 7.14998 3.33333 10.8333C3.33333 14.5166 6.31666 17.5 9.99999 17.5C13.6833 17.5 16.6667 14.5166 16.6667 10.8333H15Z" fill="white"/>
      <Path d="M9.05 13.2833V9.72498H8.975L7.5 10.25V10.825L8.34167 10.5666V13.2833H9.05Z" fill="white"/>
      <Path d="M10.2083 11.2V11.8166C10.2083 13.4 11.3 13.3333 11.4083 13.3333C11.525 13.3333 12.6083 13.4083 12.6083 11.8166V11.2C12.6083 9.61663 11.5167 9.6833 11.4083 9.6833C11.2917 9.6833 10.2083 9.6083 10.2083 11.2ZM11.9083 11.1V11.9083C11.9083 12.55 11.7333 12.7666 11.4167 12.7666C11.1 12.7666 10.9167 12.55 10.9167 11.9083V11.1C10.9167 10.475 11.1 10.2583 11.4083 10.2583C11.725 10.25 11.9083 10.475 11.9083 11.1Z" fill="white"/>
    </Svg>
  );
}


