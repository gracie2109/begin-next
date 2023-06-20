import React, {useState} from "react";
import {SharedIcons} from "@/utils";

const {UserOutlined, MdWeekend, PieChartOutlined} = SharedIcons;

import type {MenuProps} from "antd";
import {Menu} from "antd";
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
    getItem(<Link href="/admin">Thống kê</Link>, "dashboard", <PieChartOutlined/>),
    getItem(<Link href="/admin/orders">Đơn hàng</Link>, "orders", <PieChartOutlined/>),
    getItem(<Link href="/admin/users">Người dùng</Link>, "user", <UserOutlined/>),
    getItem(<Link href="/admin/vouchers">Voucher</Link>, "vouchers", <MdWeekend/>),
    getItem(<Link href="/admin/products">Sản phẩm</Link>, "products", <MdWeekend/>),
    getItem(<Link href="/admin/attributes">Attributes</Link>, "attributes", <MdWeekend/>),
    getItem(<Link href="/admin/categories">Danh mục</Link>, "categories", <MdWeekend/>),
    getItem(<Link href="/admin/sliders">Sliders</Link>, "sliders", <MdWeekend/>),
    getItem(<Link href="/admin/settings">Cài đặt</Link>, "settings", <MdWeekend/>),
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
            theme="light"
            items={items}
            className="shadow-lg"
        />
    );
};

export default MenuAdmin;
