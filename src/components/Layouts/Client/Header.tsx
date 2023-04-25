import { useState } from 'react'
import { Layout, Row, Col, Typography, Input, Divider } from 'antd';
import Link from 'next/link';
import { MENU_URL, SharedIcons } from "@/utils/contants"
import DrawerCommon from './Search';

const {SearchOutlined, MdWeekend} = SharedIcons
const { Header } = Layout;
const HeaderClient = () => {
    const [open, setOpen] = useState(false);
    const [searchText,setSearchText]  = useState("")
    return (
        <Header className='shadow-lg' style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: "white" }}>
            <div className="h-[4rem] container mx-auto">
                <Row align="middle" justify="center" style={{ height: "100%" , color: "#fff"}}>
                    <Col span={4}>
                        <Typography.Title level={3}  >
                            <Link href="/" style={{color: "#000"}}>Mode Fashion</Link>
                        </Typography.Title>
                    </Col>
                    <Col span={16} >
                        <Row align="middle" justify="space-between">
                            {MENU_URL.map((item, index) => (
                                <Col key={index}><Link href="/">{item.name}</Link></Col>
                            ))}
                        </Row>

                    </Col>
                    <Col span={4}>
                        <Row align="middle" justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col>
                                <DrawerCommon placement="top" icon={<SearchOutlined />} id="search" setOpen={setOpen} open={open} drawerChildren={<>
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
                                        <Divider orientation="right" orientationMargin={50}>Có 6 kq tìm thấy</Divider>
                                        <Col span={16}>
                                           dbasdbbasdjasdaksdnk
                                        </Col>                              
                                    </Row>
                                </>} />
                            </Col>
                        
                            <Col><Link href="/"><MdWeekend /></Link></Col>
                        </Row>
                    </Col>
                </Row>

            </div>
         </Header>
    )
}

export default HeaderClient