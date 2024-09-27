"use client";

import Link from "next/link";
import Icon from "../../Icon";

const UserInfoIcon = () => {
  //TODO: 임시, 나중에 상태관리에서 정보 빼와야됨.
  const userInfo = {
    role: "USER",
  };

  const isLogin = userInfo.role !== "";

  return (
    <>
      <Link href={isLogin ? "/mypage" : "/signin"}>
        <Icon
        // name="IconAdd"
        // size={24}
        // style={{ cursor: "pointer" }}
        />
      </Link>
      {userInfo.role === "SELLER" ? (
        <Link href={"/new/product"}>
          <Icon
          // name="IconAdd"
          // size={24}
          // style={{ cursor: "pointer" }}
          />
        </Link>
      ) : (
        <Link href={isLogin ? "/mycart" : "/signin"}>
          <Icon
          // name="IconBag"
          // style={{ cursor: "pointer" }}
          />
        </Link>
      )}
    </>
  );
};

export default UserInfoIcon;
