import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";
import {
    Row,
    Col,
    Button,
    Tabs,
    Form,
    Card,
    Input,
    Switch,
    Select,
    InputNumber, DatePicker
} from "antd";
import UploadFile from "@/components/common/UploadFile/UploadFile";
import {REG_FOMAT,PARSE_FOMAT, calcDiscountPrice,} from "@/utils";
import type { RangePickerProps } from 'antd/es/date-picker';
import type { TabsProps } from 'antd';
import dayjs from 'dayjs';
import { CkUpload } from "@/components/common";


type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode: any,
    isPublish:any,
    setIsPublish: any,
    isPromotion:any,
    setIsPromotion: any,
    discountType:any,
    setDiscountType:any,
    discountValue:any,
    setDiscountValue:any

}
const dicountTypeInstant = [
    {
        label: 'Giảm tiền trực tiếp',
        value: 0
    },
    {
        label: 'Giảm phần trăm',
        value: 1
    }
];
const ProductForm = ({ form, onFinish, onReset, formMode, isPublish, setIsPublish, isPromotion,setIsPromotion,discountType, setDiscountType,discountValue, setDiscountValue }: Props) => {
    const cost = Form.useWatch('cost', form);

    useEffect(() => {
        const res = calcDiscountPrice(cost, discountValue, discountType);
        form.setFieldsValue({
            price: res
        })
    },[cost,discountType,discountValue])


    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };

    const FormInstant  = () => {
        return (
            <>
                <Row gutter={[32, 8]}>
                    <Col span={12}>
                        <Form.Item name="avt" label="Ảnh" className="no-style-form"><br /><br />
                            <UploadFile max={3} isMultiple={true} />
                        </Form.Item>
                        <Form.Item name="name" label="Tên" >
                            <Input placeholder="Nhập vào tên của sản phẩm" allowClear  />
                        </Form.Item>
                        <Form.Item name="cost" label="Giá niêm yết" >
                            <InputNumber
                                min={1}
                                step={10000}
                                placeholder="Nhập vào giá của sản phẩm"
                                style={{width: "100%"}}
                                addonBefore="VND"
                                formatter={(value:any) => `${value}`.replace(REG_FOMAT, ',')}
                                //@ts-ignore
                                parser={(value:any) => value!.replace(PARSE_FOMAT, '')}
                            />

                        </Form.Item>
                        <Form.Item name="quantity" label="Số lượng" >
                            <InputNumber
                                style={{width: "100%"}}
                                placeholder="Nhập vào giá của sản phẩm"
                                formatter={(value) => `${value}`.replace(REG_FOMAT, ',')}
                                parser={(value) => value!.replace(PARSE_FOMAT, '')}
                            />
                        </Form.Item>
                        <Row justify="space-between">
                            <Col span={12}>
                                <Form.Item name="isPushlish" label="Tải sản phẩm lên" style={{width: "100%"}} >
                                    <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish} />
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item name="isPromotion" label="Chọn làm sản phẩm tiêu biểu" >
                                    <Switch  onChange={(e: any) => setIsPromotion(e)}  checked={isPromotion} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row align="bottom" gutter={[8,8]}>
                            <Col>
                                <Form.Item  name={['discount', 'type']} label="Giảm giá" >
                                    <Select
                                        style={{ width: 220 }}
                                        onChange={(e) => setDiscountType(e)}
                                    >
                                        {dicountTypeInstant.map((item, index) => (
                                            <Select.Option value={item?.value} key={item?.value}>{item.label}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name={['discount', 'value']}>
                                    <InputNumber
                                        onChange={(e:any) => setDiscountValue(e)}
                                        placeholder="Nhập số tiền giảm giá"
                                        addonBefore={discountType === 0 ? "VND " : "%"}
                                        min={1}
                                        max={cost && (discountType === 0 ? cost : 100)}
                                        style={{width: "100%"}}
                                        readOnly={(!cost || cost <= 0 )? true : false}
                                        formatter={(value) => `${value}`.replace(REG_FOMAT, ',')}
                                        parser={(value) => value!.replace(PARSE_FOMAT, '')}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="Giá sau giảm" name="price" >
                            <Input placeholder="giá sau giảm"  disabled/>
                        </Form.Item>

                        <Row align="stretch" gutter={[8, 8]}>
                            <Col>
                                <Form.Item label="Giảm từ ngày" name="discountAt" >
                                    <DatePicker
                                        placeholder="Nhập thông tin"
                                        disabledDate={disabledDate}
                                        showTime={{ hideDisabledOptions: true}}
                                        format="DD-MM-YYYY"
                                        showHour={false}
                                        showToday={false}
                                        style={{width: "100%"}}
                                    ></DatePicker>
                                </Form.Item>

                            </Col>
                            <Col>
                                <Form.Item label="Giảm đến ngày" name="discountEnd" >
                                    <DatePicker
                                        placeholder="Nhập thông tin"
                                        disabledDate={disabledDate}
                                        showTime={{ hideDisabledOptions: true}}
                                        format="DD-MM-YYYY"
                                        showHour={false}
                                        showToday={false}
                                        style={{width: "100%"}}
                                    ></DatePicker>
                                </Form.Item>

                            </Col>
                        </Row>

                        <Form.Item name="short_desc" label="Mô tả ngắn" >
                            <Input.TextArea  placeholder="Nhập vào mô tả" style={{ height: "50px",resize: 'none' }}/>
                        </Form.Item>

                        <Form.Item name="desc" label="Mô tả" >
                            <CkUpload />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ width: "100%", display: "flex", justifyContent: "flex-end" }} >
                    <Button type="primary" htmlType="submit" style={{ width: "200px", marginRight: "10px" }}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{ width: "100px" }}>
                        Reset
                    </Button>
                </Form.Item>

            </>
        )
    }

    const FormAttibute  = () => {
        return (
            <>
               <Form.Item name="color" label="Chọn thuộc tính">
                   <Input />
               </Form.Item>
            </>
        )
    }



    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Thông tin cơ bản',
            children: <FormInstant />,
        },
        {
            key: '2',
            label: 'Thuộc tính',
            children: <FormAttibute />,
        },
    ];
    return (
        <Form
            name={formMode}
            key={formMode}
            form={form}
            onFinish={onFinish}
            layout="vertical"
    >
        <Card>
            <Tabs defaultActiveKey="1" items={items} />

        </Card>

    </Form>
    )
}

export default ProductForm;

