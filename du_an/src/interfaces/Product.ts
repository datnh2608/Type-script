export type TProduct = {
	id?: number;
	title: string | undefined;
	description?: string;
	price: number | undefined;
	discountPercentage?: number;
	rating?: number;
	stock?: number;
	brand?: string;
	category?: string;
	thumbnail?: string;
	images?: string[];
};
