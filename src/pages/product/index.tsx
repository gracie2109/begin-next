import Link from 'next/link';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import {
    ProductPage_Options,
    Products_data
    } from '@/utils';
import { MyPage } from '@/models/common';
import { useState } from 'react';
import { Row, Col, Typography,Card, Button, Select, Grid ,Drawer} from "antd";
import { AlignCenterOutlined } from '@ant-design/icons';
import ProductSortOption from "@/pages/product/components/ProductSortOption";
const ProductList: MyPage = () => {
    const screens = Grid.useBreakpoint()
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleChangeSort = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='w-full'>
            <div className="my-7">
                Trang chủ / Tất cả sản phẩm
            </div>
            <Card bodyStyle={{padding: 10}}>
                <Row gutter={[32,6]}>
                    {/* left side */}
                    <Col xs={0}  md={6}>  <ProductSortOption />  </Col>

                    {/* right side */}
                    <Col xs={24}  md={18}>
                        {/* panel */}
                        <Row gutter={[32, 16]}  align="middle" justify="space-around" style={{paddingLeft: '1rem'}}>
                            <Col md={12} xs={24}>
                              <Row gutter={[32, 16]} align="middle">
                                 <Col ><Typography.Title level={3} className="pt-1">{screens.xs? "Trang chủ" : "Tất cả sản phẩm"}</Typography.Title></Col>
                                 <Col ><Typography.Text strong>7 </Typography.Text>sản phẩm</Col>
                              </Row>                  
                            </Col>
                            <Col md={12} xs={24}>
                                <Row align="middle">
                                    <Col xs={8} md={0} xl={0} xxl={0}>
                                        <Button type="dashed" size="middle" icon={<AlignCenterOutlined />} onClick={() => setOpenDrawer(!openDrawer)}>Bộ lọc</Button>
                                        <Drawer
                                            title="Bộ lọc"
                                            placement="left"
                                            onClose={() => setOpenDrawer(!openDrawer)}
                                            open={openDrawer} >
                                            <ProductSortOption
                                                openDrawer={openDrawer}
                                                setOpenDrawer={setOpenDrawer}
                                            />
                                        </Drawer>
                                    </Col>
                                    <Col xs={6}><Typography.Text style={{fontSize: `${screens.xs ? "11px" : "13px"}`}}>Sắp xếp theo</Typography.Text></Col>
                                    <Col xs={8}>
                                        <Select
                                            style={{width: "8rem"}}
                                            onChange={handleChangeSort}
                                            options={ProductPage_Options}
                                            size={"large"}
                                        />
                                    </Col>                   
                                </Row> 
                            </Col>
                        </Row>

                        {/* Product */}
                        <div className="my-7">
                            <Row >
                                {Products_data.map((item, index) => (
                                    <Col md={6} xs={12} key={index}>
                                        <ProductCard child={item} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ProductList
ProductList.Layout = "Main"
