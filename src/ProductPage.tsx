import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import client, { urlFor } from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Navbar from "./components/Navbar";
import FabWhatsapp from "./components/FabWhatsapp";

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
    const bigImageRef = useRef<HTMLImageElement>(null)

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
            <div className="px-20 md:px-52 p-4 flex flex-col text-justify items-center justify-between">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex flex-col items-center">
                <img className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-lg shadow-md mb-4" src={urlFor(product.cover).url()} ref={bigImageRef} alt={product.name} />
                <div className="flex space-x-4">
                { [product.cover, ...product.images].map((image, index) => (
                    <img
                    key={index}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                    src={urlFor(image).url()}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => {
                        if (bigImageRef.current) {
                            bigImageRef.current.src = urlFor(image).url();
                        }
                    }}
                    />
                ))}
                </div>
            </div>
            </div>
            <FabWhatsapp />
        </main>
    );
};

export default ProductPage;
