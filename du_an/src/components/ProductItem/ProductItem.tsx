import React from 'react';
import { TProduct } from '~/interfaces/Product';
import style from './ProductItem.module.scss';

type Props = {
  product: TProduct | null;
  viewMode: string;
};

const ProductItem = (props: Props) => {
  const viewMode = props.viewMode;
  return (
    <div className={style['product-item']}>
      <h2>{props.product?.title}</h2>
      <img
        className={style['product-image']}
        width={viewMode === 'full' ? 300 : 160}
        src={props.product?.thumbnail}
        alt={props.product?.title}
      />
      <div className={style['product-price']}>Giá sản phẩm: {props.product?.price}</div>
    </div>
  );
};

export default ProductItem;
