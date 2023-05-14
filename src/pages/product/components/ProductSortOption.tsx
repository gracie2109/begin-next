import {useState, useEffect,Dispatch, SetStateAction}  from "react";
import {Button, Checkbox, Col, Collapse, Row, Slider, Space, Tag, Typography} from "antd";
import {Footer_Extenal_Link, formatCurrency, ProductPage_Brands, ProductPage_Colors, ProductPage_Sizes} from "@/utils";
import Link from "next/link";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {SliderMarks} from "antd/es/slider";
type Props = {
    openDrawer?: boolean,
    setOpenDrawer?: Dispatch<SetStateAction<boolean>>
}

const ProductSortOption = ({openDrawer,setOpenDrawer}:Props) => {
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
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleChange = (tag: string, checked: boolean) => {
        console.log("checked", checked)
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    }


    return (
        <>
            <div className='mb-3'>
                <Typography.Title level={3}>Bộ lọc</Typography.Title>
            </div>
            <div className='mb-3'>
                <Space direction="vertical" className='w-full'>
                    <Collapse expandIconPosition="end" bordered={false} collapsible="header" defaultActiveKey={['1']} >
                        <Collapse.Panel header={<Typography.Title level={5}>Danh mục sản phẩm</Typography.Title>} key="1">
                            {Footer_Extenal_Link.map((item, index) => (
                                <div key={index} className="mb-3 text-gray-400"  >
                                    <Link href={item.url} style={{color: "#000"}}>{item.name}</Link>
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
                            <Slider marks={marks} range={{ draggableTrack: true }} step={10}  onChange={onRangSlider}/>
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
                                            className="checkableTag "
                                        >
                                            <Button shape="circle" style={{backgroundColor: `${item}`}}></Button>
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
            <div className="mb-5">
                <Row justify="space-between" align="middle" gutter={[8,8]}>
                    <Col span={12}>
                        <button className="w-full border-none outline-none text-black cursor-pointer bg-[#f3f4f6] p-3 rounded-md"
                        onClick={() => {
                            if (setOpenDrawer) {
                                setOpenDrawer(!openDrawer)
                            }}}
                        >Hủy</button>
                    </Col>
                    <Col span={12}>
                        <button className="w-full border-none outline-none text-white cursor-pointer bg-[#333333] p-3 rounded-md">Áp dụng</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProductSortOption