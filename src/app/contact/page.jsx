"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const promiseFunction = () => {
  new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;

    const sum = a + b;

    if (sum === 4) {
      resolve("Success");
    } else {
      reject("Error");
    }
  })
    .then((value) => {
      console.log(value, "success");
    })
    .catch((error) => {
      console.log(error, "error");
    })
    .finally(() => {
      console.log("first finally");
    });
};

const calculateSum = async () => {
  const a = 1;
  const b = 2;

  const sum = a + b;

  if (sum === 3) {
    return "Success";
  } else {
    throw new Error("Error adding sum");
  }
};

const Contact = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getValue = async () => {
    try {
      const value = await calculateSum();
      console.log(value);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("FInally");
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const responseJson = await response.json();

    setProducts(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(search);
    });

    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <>
      <div className="max-w-[600px] mx-auto my-6">
        <input
          type="text"
          value={search}
          className="outline-none border border-green-600 rounded-md w-full px-4 py-4"
          placeholder="Search products"
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-11">
        {filteredProducts.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt="image"
              className="w-[100px] h-[200px]"
              width={100}
              height={200}
            />
            <p>{item.title}</p>
            <p className="mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
