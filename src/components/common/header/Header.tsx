"use client";

import { usePathname } from "next/navigation";
import React from "react";
import SearchHeader from "./SearchHeader/SearchHeader";
import DefaultHeader from "./DefaultHeader";

const Header = () => {
  const pathname = usePathname();

  const isNoHeader = NO_HEADER_URL.includes(pathname);
  const isSearchHeader =
    PRODUCT_DETAIL_REGEX.test(pathname) || SEARCH_HEADER_URL.includes(pathname);

  if (isNoHeader) {
    return null;
  }
  if (isSearchHeader) {
    return <SearchHeader />;
  }
  return <DefaultHeader text={HEADER_TITLE[pathname] || ""} />;
};

export default Header;

const NO_HEADER_URL: string[] = [
  "/signup",
  "/signup/seller",
  "/signup/buyer",
  "/signin",
  "/product/search/category",
  "/search",
  "/product/search",
];
const SEARCH_HEADER_URL: string[] = ["/", "/category"];
const PRODUCT_DETAIL_REGEX = new RegExp(/\/product\/\d+/);
const HEADER_TITLE: { [key: string]: string } = {
  "/pay": "Order/Payment",
  "/new/product": "Add Products",
  "/update/product": "Update Products",
  "/mypage": "My Page",
  "/mycart": "Cart",
  "/mypage/paymoney": "ClipPay",
  "/detail": "Detail",
  "/mypage/coupon": "Coupon",
  "/mypage/purchase": "구매내역",
  "/mypage/sold": "판매된 내역",
  "/mypage/point-history": "포인트 사용 내역",
  "/mypage/selling-product": "판매중인 상품",
  "/mypage/wish": "WishList",
};
