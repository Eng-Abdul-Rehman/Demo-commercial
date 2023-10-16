import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { getCatagories } from "@/redux/Catagoriessclice";
import { useEffect } from "react";

// export function useAllProducts() {
//   const fetchProducts = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data;
//   };
//   return useQuery("products", fetchProducts);
// }

export function useAllProducts(Catagorie: string) {
  const fetchProducts = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/${Catagorie}`
    );
    return response?.data;
  };

  return useQuery("categorys", fetchProducts);
}
//   export function useAllProducts() {
//     const fetchProducts = async () => {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       return response.data;
//     };
//     return useQuery("products", fetchProducts);
//   }

//   export function useAllProducts() {
//     const fetchProducts = async () => {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       return response.data;
//     };
//     return useQuery("products", fetchProducts);
//   }

//   export function useAllProducts() {
//     const fetchProducts = async () => {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       return response.data;
//     };
//     return useQuery("products", fetchProducts);
//   }
