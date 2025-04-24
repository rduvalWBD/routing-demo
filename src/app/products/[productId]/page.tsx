import { Metadata } from 'next';

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  }); // Simuler une opération asynchrone
  // const { productId } = await params; // Attendre params avant de l'utiliser
  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params; // Attendre params avant de l'utiliser
  return <h1>Product detail about product {productId}</h1>;
}
