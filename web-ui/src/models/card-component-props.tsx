import { MouseEventHandler } from "react";
import { CatalogItemModel } from "./catalog-data-model";

export type CardComponentProps = {
    data: CatalogItemModel,
    onBuyClick?: MouseEventHandler<any> | undefined;
}

export type CartPageProps = {
    catalogItemId: string;
    setIsCartPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}