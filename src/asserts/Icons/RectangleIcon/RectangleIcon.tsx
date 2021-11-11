import React from 'react';
import { IIcon } from '../IIcon/IIcon';

export default function RectangleIcon({ width, height }: IIcon) {
  return (
    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height={height} width={width} xmlns='http://www.w3.org/2000/svg'><path d='M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V5h16 l0.001,14H4z' /></svg>
  );
}
