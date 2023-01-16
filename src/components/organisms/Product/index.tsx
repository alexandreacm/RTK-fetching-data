import React from 'react';
import { Product } from '../../../types';

import { ButtonItem } from '../../molecules/ButtonItem';

type Props = {
  item: Product,
  onUpdate: (id: number) => void
}

export function ProductItem({ item, onUpdate }: Props) {

  return (
    <ButtonItem id={item?.id} name={item?.name} onUpdate={onUpdate} />
  );
}
