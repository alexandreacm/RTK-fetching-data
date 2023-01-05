import React from 'react';
import { Product } from '../../../types';

import { ButtonItem } from '../../molecules/ButtonItem';

type Props = {
  item: Product
}

export function ProductItem({ item }: Props) {

  return (
    <ButtonItem item={item} />
  );
}
