import { CartPageProps } from '../../models/card-component-props';
import './cart-page.css';

import { data } from '../../data/catalog';
import { useEffect, useState } from 'react';
import { CatalogItemModel } from '../../models/catalog-data-model';


export const CartPage = ({ catalogItemId }: CartPageProps) => {
    const [catalogItem, setCatalogItem] = useState<CatalogItemModel>();
    useEffect(() => {
        const catalogItem = data.find((item) => {
            return catalogItemId === item.id;
        });

        setCatalogItem(catalogItem);
    }, [catalogItemId]);

    return (
        <div className="cart-page">
            <img src={catalogItem?.image} alt="" style={{ width: '600px' }} />
        </div>
    );
}