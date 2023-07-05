import React, {useEffect, useState} from 'react'
import {Layout, Row, Col, Typography, Grid, Dropdown, Divider,Input, Button, Avatar,Drawer,Space} from 'antd';
import Link from 'next/link';
import { MENU_URL, SharedIcons } from "@/utils/contants";
import type { MenuProps } from 'antd';
const { MenuOutlined, SearchOutlined, UserOutlined,BsFillBagFill,LogoutOutlined} = SharedIcons
const { useBreakpoint } = Grid;
import Cart from "@/pages/cart"
const HeaderClient = () => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [searchText,setSearchText]  = useState("");
    const screens = useBreakpoint();

    return (
        <Layout.Header className='shadow-lg text-black' style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: "white" }}>
            <div className="h-[4rem] container mx-auto">
                <Row align="middle"  style={{ height: "100%" , color: "#000"}}>
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
                        <Typography.Title level={screens.xs ? 5: 3} >
                            <Link href="/" >Mode Fashion</Link>
                        </Typography.Title>
                    </Col>

                    {/***** PC Menu *****/}
                    <Col xs={0} md={16} lg={16} xl={16}>
                        <Row align="middle" justify="center" gutter={[32,4]} >
                            {MENU_URL.map((item, index) => (
                                <Col key={index}><Link href="/" style={{color: "#000"}}>{item.name}</Link></Col>
                            ))}
                        </Row>

                    </Col>
                    {/**** Right Side ****/}
                    <Col xs={8} md={4} lg={4} xl={4}>
                        <Row align="stretch" justify="end" gutter={{ xs: 1, sm: 16, md: 24, lg: 32 }}>
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
                                <Button type="link" onClick={() => setOpenCart(!openCart)} icon={<BsFillBagFill fontSize={!screens.xs ? 20 : ""} color="#000"/>}></Button>
                                <Drawer title="APP_NAME"
                                        placement="right"
                                        onClose={() => setOpenCart(!openCart)} open={openCart}

                                >
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
const items: MenuProps['items'] = [
    {
        key: '1',
        label:  (
            <Space>
                <UserOutlined />
                <Link href="/account" className="text-black">Tài khoản</Link>
            </Space>
        )
    },
    {
        key: '3',
        label:  (
            <Space>
                <LogoutOutlined />
                <Link href="/account" className="text-black">Đăng xuất</Link>
            </Space>
        )
    },
];