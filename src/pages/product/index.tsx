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
import { Row, Col, Typography, Collapse, Space ,Card, Checkbox, Slider , Button, Tag, Select } from "antd";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const ProductList: MyPage = () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const MAX_PRICE = 3000000;

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
        console.log(tag);
        const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    }

    const handleChangeSort = (value: string) => {
        console.log(`selected ${value}`);
      };

    return (
        <div className='w-full'>
            <div className="my-7">
                Trang chủ / Tất cả sản phẩm
            </div>
            <Card>
                <Row gutter={[32,6]}>
                    {/* left side */}
                    <Col span={6}>
                        <div className='mb-3'>
                            <Typography.Title level={3}>Bộ lọc</Typography.Title>
                        </div>
                        <div className='mb-3'>
                            <Space direction="vertical" className='w-full'>
                                <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                                    <Collapse.Panel header={<Typography.Title level={5}>Danh mục sản phẩm</Typography.Title>} key="1">
                                        {Footer_Extenal_Link.map((item, index) => (
                                            <div key={index} className="mb-3 text-gray-400"  >
                                                <p><Link href={item.url}>{item.name}</Link></p>
                                            </div>
                                        ))}
                                    </Collapse.Panel>
                                </Collapse>

                                <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                                    <Collapse.Panel header={<Typography.Title level={5}>Thương hiệu</Typography.Title>} key="1">
                                        <Checkbox.Group onChange={onGetBrands}>
                                            <Row>
                                                {ProductPage_Brands.map((item, index) => (
                                                   <Col span={24} key={index}>
                                                        <Checkbox value={item}>{item}</Checkbox>
                                                   </Col> 
                                                ))}
                                            </Row>
                                        </Checkbox.Group>
                                    </Collapse.Panel>
                                </Collapse>

                                <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                                    <Collapse.Panel header={<Typography.Title level={5}>Khoảng giá</Typography.Title>} key="1">
                                        <Slider  marks={marks} range={{ draggableTrack: true }} step={10}  onChange={onRangSlider}/>
                                    </Collapse.Panel>
                                </Collapse>

                                <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                                    <Collapse.Panel header={<Typography.Title level={5}>Màu sắc</Typography.Title>} key="1">
                                            <Row gutter={[8,8]} >
                                                    {ProductPage_Colors.map((item, index) => (
                                                        <Col key={index}>
                                                          <Tag.CheckableTag
                                                            key={item}
                                                            checked={selectedTags.includes(item)}
                                                            onChange={(checked) => handleChange(item, checked)}
                                                            className="checkableTag"
                                                        >
                                                            <Button shape="circle"  style={{backgroundColor: `${item}`}}></Button>
                                                        </Tag.CheckableTag>
                                                        </Col>
                                                    ))}
                                            </Row>
                                    </Collapse.Panel>
                                </Collapse>

                                <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                                    <Collapse.Panel header={<Typography.Title level={5}>Size</Typography.Title>} key="1">
                                        <Row gutter={[8,8]}>
                                            {ProductPage_Sizes.map((item, index) => (
                                                <Col key={index}><Button>{item}</Button></Col>
                                            ))}
                                            
                                        </Row>
                                    </Collapse.Panel>
                                </Collapse>



                            </Space>
                        </div>
                    </Col>

                    {/* right side */}
                    <Col span={18}>
                        {/* panel */}
                        <Row gutter={[16, 16]} align="middle" justify="space-around">
                            <Col span={12}>
                              <Row gutter={[16, 8]} align="middle">
                                 <Col><Typography.Title level={3} className="pt-1">Tất cả sản phẩm</Typography.Title></Col>
                                 <Col><Typography.Text strong>7 </Typography.Text>sản phẩm</Col>                   
                              </Row>                  
                            </Col>
                            <Col span={12}>
                                <Row gutter={[16, 8]} align="middle" justify="end">
                                    <Col><Typography.Text>Sắp xếp theo</Typography.Text></Col>
                                    <Col>
                                        <Select
                                            style={{width: "10rem"}}
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
                            <Row gutter={[32,  48]}>
                                {Products_data.map((item, index) => (
                                    <Col span={6} key={index}>
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
