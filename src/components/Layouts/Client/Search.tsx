import { Button, Drawer, Input, Space } from 'antd';
import { ReactNode, useState } from 'react';
import { SharedIcons } from "@/utils/contants";

const {SearchOutlined} = SharedIcons
type Props = {
    setOpen: void | any,
    open: any,
    drawerChildren:Element | ReactNode | any,
    icon:any,
    placement: "top" | "left" | "right",
    id: string
}

const DrawerCommon = ({setOpen, open, drawerChildren,icon, placement, id}: Props) => {
    const [searchText, setSearchText] = useState("")
    return (
        <>
            <Space>
                <Button type="link" onClick={() => setOpen(!open)} icon={icon}></Button>
            </Space>
            <Drawer
                title="Search"
                placement={placement}
                onClose={() => setOpen(!open)}
                open={open}

            >
                {drawerChildren}
            </Drawer>

        </>
    )
}

export default DrawerCommon