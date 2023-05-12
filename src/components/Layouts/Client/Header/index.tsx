import React,{ useState } from 'react'
import {Layout, Row, Col, Typography, Grid, Dropdown, Divider, Space,Input, Button, Avatar,Drawer} from 'antd';
import Link from 'next/link';
import { MENU_URL, SharedIcons } from "@/utils/contants";
import type { MenuProps } from 'antd';
const { MenuOutlined, SearchOutlined} = SharedIcons
const { useBreakpoint } = Grid;

const HeaderClient = () => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [searchText,setSearchText]  = useState("");
    const screens = useBreakpoint();
    console.log("user", user)
    return (
        <Layout.Header className='shadow-lg text-black' style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: "white" }}>
            <div className="h-[4rem] container mx-auto">
                <Row align="middle" justify="center" style={{ height: "100%" , color: "#000"}}>
                    {/***** MOBILE_MENU *****/}
                    <Col xs={4} md={0} lg={0} xl={0}>
                        <MenuOutlined onClick={() => setOpen(!open)}/>
                        <Drawer title="APP NAME"
                                placement="left"
                                onClose={() => setOpen(!open)} open={open}
                        >
                            {MENU_URL.map((item, index) => (
                                <div key={index} style={{padding: ".5rem 0"}}> <Link href="/" style={{color: "#000"}}>{item.name}</Link></div>
                            ))}
                        </Drawer>
                    </Col>

                    {/***** app name *****/}
                    <Col xs={12} md={4} lg={4} xl={4}>
                        <Typography.Title level={screens.xs ? 5: 3}  style={{ color: "#0000"}}>
                            <Link href="/" style={{ color: "#0000"}}>Mode Fashion</Link>
                        </Typography.Title>
                    </Col>

                    {/***** PC Menu *****/}
                    <Col xs={0} md={16} lg={16} xl={16}>
                        <Row align="middle" justify="space-between" className='hidden'>
                            {MENU_URL.map((item, index) => (
                                <Col key={index}><Link href="/" style={{color: "#000"}}>{item.name}</Link></Col>
                            ))}
                        </Row>
                    </Col>
                    {/**** Right Side ****/}
                    <Col xs={8} md={4} lg={4} xl={4}>
                        <Row align="middle" justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col>
                                <Button type="link" onClick={() => setOpenSearch(!openSearch)} icon={<SearchOutlined />}></Button>
                                <Drawer title="Tìm kiếm sản phẩm"
                                    placement="top"
                                    onClose={() => setOpenSearch(!openSearch)} open={openSearch}
                                >
                                    <Row justify="center" gutter={[16,16]}>
                                        <Col span={16}>
                                            <Input.Search
                                                placeholder="input search loading default"
                                                enterButton="Search" size="large"
                                                onSearch={value => setSearchText(value)}
                                            />

                                        </Col>

                                        <Col span={16}>
                                            Bạn đang tìm kiếm: <Typography.Text strong>{searchText}</Typography.Text>
                                        </Col>
                                        <Divider orientation="center" orientationMargin={50}>Có 6 kq tìm thấy</Divider>
                                        <Col span={16}>
                                            dbasdbbasdjasdaksdnk
                                        </Col>
                                    </Row>
                                </Drawer>
                            </Col>
                        
                            <Col>
                                <Dropdown menu={{ items }} placement="bottom" arrow>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Avatar size={screens.xs ? "small" : "large"}  src={"https://fptshop.com.vn/Content/v5d/account/images/img-user-update.png?v=123"} />
                                    </a>
                                </Dropdown>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
         </Layout.Header>
    )
}

export default HeaderClient;
export const items: MenuProps['items'] = [
    {
        key: '1',
        label:  <Link href="/account">Tai khoan</Link>
    },
    {
        key: '2',
        label:  <Link href="/account">Order</Link>
    },
    {
        key: '3',
        label:  <Link href="/account">Logout</Link>
    },
];

export const user:any = {
    username: "Sue",
    role: 1,
}