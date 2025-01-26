import {  Pagination } from "@mui/material";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { useState, useEffect, ChangeEvent } from "react";
import client from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Product {
  _id: string;
  name: string;
  description: string;
  cover: SanityImageSource
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        name,
        description,
        cover
      }`;

      try {
        const data = await client.fetch(query);
        setProducts([...data, ...data,...data,...data, ...data,...data,...data, ...data,...data,...data, ...data,...data,...data, ...data,...data]);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (_event:ChangeEvent<unknown>, value:number) => {
    setCurrentPage(value);
  };

  return (
    <main role="main" className="h-screen overflow-auto relative">
      <Navbar />
      <Carousel />

      {/* Product Cards */}
      <div className="flex flex-wrap md:px-40 items-center gap-4 py-4">
        {currentProducts.map((product) => (
          <ProductCard
            link={product._id}
            key={product._id}
            name={product.name}
            description={product.description}
            image={product.cover}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-4">
        <Pagination
          variant="outlined"
          count={Math.ceil(products.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

     
    </main>
  );
}
