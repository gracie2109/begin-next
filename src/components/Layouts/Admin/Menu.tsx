import React, { useState } from "react";
import { SharedIcons } from "@/utils";
const { ClusterOutlined, UserOutlined, MdWeekend, MdMovieCreation } = SharedIcons;

import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link href="/admin/users">Người dùng</Link>,
    "user",
    <UserOutlined />
  ),
  getItem(
    <Link href="/admin/movie">Phòng chiếu</Link>,
    "room",
    <ClusterOutlined />
  ),
  getItem(<Link href="/admin/movie">Phim</Link>, "movie", <MdMovieCreation />, [
    getItem(<Link href="/admin/movie-type">Thể loại phim</Link>, "movie-type", <MdMovieCreation />),
  ]),
  getItem(<Link href="/admin/voucher">Voucher</Link>, "voucher", <MdWeekend />),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const MenuAdmin = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      theme="dark"
      items={items}
      className="shadow-lg"
    />
  );
};

export default MenuAdmin;
