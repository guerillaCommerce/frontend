import Link from "next/link";
import Icon from "../../Icon";
import UserInfoIcon from "./UserInfoIcon";

const SearchHeader = () => {
  return (
    <nav className="flex h-[60px] w-full items-center justify-between bg-white px-[20px] py-0">
      <Link href={"/"}>
        <h1 className="text-h2 font-extrabold text-green">CLIP</h1>
      </Link>
      <div className="flex h-[30px] w-auto items-center gap-[10px] bg-yellow">
        <Link href={"/search"}>
          <Icon />
        </Link>
        <UserInfoIcon />
      </div>
    </nav>
  );
};

export default SearchHeader;
