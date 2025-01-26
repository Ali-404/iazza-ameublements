import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client, { urlFor } from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Navbar from "./components/Navbar";

interface Product {
    _id: string;
    name: string;
    description: string;
    cover: SanityImageSource;
    images: SanityImageSource[];
}

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const query = `*[_type == "product" && _id == $id][0] {
                _id,
                name,
                description,
                cover,
                images
            }`;

            try {
                const data = await client.fetch(query, { id });
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product from Sanity:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <main>
            <Navbar />
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg mb-4">{product.description}</p>
                <div className="flex flex-col items-center">
                    <img className="w-[300px] h-[300px]  md:w-[600px] md:h-[600px] rounded-lg shadow-md mb-4" src={urlFor(product.cover).url()} alt={product.name} />
                    <div className="flex space-x-4">
                        {[product.cover, ...product.images].map((image, index) => (
                            <img
                                key={index}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                                src={urlFor(image).url()}
                                alt={`${product.name} ${index + 1}`}
                                onClick={() => setProduct({ ...product, cover: image })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
