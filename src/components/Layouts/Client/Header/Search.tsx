import { Button, Drawer, Space } from 'antd';
import { ReactNode } from 'react';

type Props = {
    setOpen: void | any,
    open: any,
    drawerChildren:Element | ReactNode | any,
    icon:any,
    placement: "top" | "left" | "right",
    id: string
}

const DrawerCommon = ({setOpen, open, drawerChildren,icon, placement}: Props) => {
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