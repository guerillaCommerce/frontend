import Link from "next/link";

const CategoryHeader = () => {
  return (
    <nav className="flex h-[46px] w-full flex-row justify-around border-b border-white bg-black px-5 py-0 leading-[46px] text-green">
      <Link href={"/"}>Home</Link>
      <Link href={"/category"}>Category</Link>
      <Link href={"#"}>Product</Link>
    </nav>
  );
};

export default CategoryHeader;
