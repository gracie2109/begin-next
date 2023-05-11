import Link from 'next/link';
import ProductCard from '@/components/common/ProductCard';
import {
    Footer_Extenal_Link,
    formatCurrency,
    ProductPage_Brands,
    ProductPage_Colors,
    ProductPage_Options,
    ProductPage_Sizes,
    Products_data
    } from '@/utils';
import { MyPage } from '@/models/common';
import { SliderMarks } from 'antd/es/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Row, Col, Typography, Collapse, Space ,Card, Checkbox, Slider , Button, Tag, Select, Grid ,Drawer} from "antd";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { SearchOutlined } from '@ant-design/icons';
import ProductSortOption from "@/pages/product/components/ProductSortOption";
const {useBreakpoint} = Grid
const ProductList: MyPage = () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const MAX_PRICE = 3000000;
    const screens = useBreakpoint()
    const marks: SliderMarks = {
        0: `${formatCurrency(0)}`,
        50: `${formatCurrency(MAX_PRICE / 2)}`,
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>{formatCurrency(MAX_PRICE)}</strong>,
        },
      };
    const [openDrawer, setOpenDrawer] = useState(false);
    const onGetBrands = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        console.log("onChange__list", list)
    };
    
    const onRangSlider = (value:any) => {
        console.log("value", value)
    }
    const onColor = (value:any) => {
        console.log("onColor", value)
    }

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleChange = (tag: string, checked: boolean) => {
        console.log("checked", checked)
        const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    }
    console.log("v", selectedTags)
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
                    <Col xs={0}  md={6}>
                       <>
                           <ProductSortOption/>
                       </>
                    </Col>

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
                                        <Button type="dashed" size="middle" icon={<SearchOutlined />} onClick={() => setOpenDrawer(!openDrawer)}>Bộ lọc</Button>
                                        <Drawer
                                            title="Bộ lọc"
                                            placement="left"
                                            onClose={() => setOpenDrawer(!openDrawer)}
                                            open={openDrawer} >
                                            <ProductSortOption />
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
                            <Row>
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
