import React, {useEffect} from "react";
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Switch,
    Select,
    InputNumber,
    DatePicker,
    Grid,
    Layout
} from "antd";
import UploadFile from "@/components/common/UploadFile/UploadFile";
import {REG_FOMAT, PARSE_FOMAT, calcDiscountPrice, formatCurrency,} from "@/utils";
import type {RangePickerProps} from 'antd/es/date-picker';
import dayjs from 'dayjs';
import {CkUpload} from "@/components/common";


type Props = {
    form: any,
    onFinish: any,
    onReset?: any,
    formMode: any,
    isPublish: any,
    setIsPublish: any,
    isPromotion: any,
    setIsPromotion: any,
    discountType: any,
    setDiscountType: any,
    discountValue: any,
    setDiscountValue: any,
    attributesData?: any

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
const ProductForm = ({
                         form,
                         onFinish,
                         onReset,
                         formMode,
                         isPublish,
                         setIsPublish,
                         isPromotion,
                         setIsPromotion,
                         discountType,
                         setDiscountType,
                         discountValue,
                         setDiscountValue,
                         attributesData
                     }: Props) => {
    const cost = Form.useWatch('cost', form);

    useEffect(() => {
        if (cost && discountValue) {
            const res: number = calcDiscountPrice(cost, discountValue, discountType);
            console.log("res", res, cost, discountValue, discountType)
            form.setFieldsValue({
                price: formatCurrency(res)
            })
        }

    }, [cost, discountType, discountValue])


    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };

    const children = attributesData?.children;


    if(formMode=== "settings" && children.length  < 1) {
        return <p>Attribute này chưa có giá trị</p>
    }
    const screens = Grid.useBreakpoint();
    return (
        <>
                <>
                    <Form
                        name={formMode}
                        key={formMode}
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Row className={`${screens.xs ? "block" : ""}`}  gutter={[32, 8]}>
                            <Col xl={12} md={24}>
                                {formMode !== "settings" ?
                                    <Form.Item name="images" label="Ảnh" className="no-style-form"><br/><br/>
                                           <UploadFile max={125} isMultiple={true}/>
                                    </Form.Item> : null}

                                {formMode === "settings" ? (
                                    <>
                                        <Form.Item name="attribute" label="attribute">
                                            {attributesData && attributesData?.children && attributesData?.children?.length > 0 ? (
                                                <>
                                                    <Select>
                                                        {children?.map((item: any, index: any) => (
                                                            <Select.Option value={item?.value} key={index}>
                                                                {item?.name}
                                                            </Select.Option>
                                                        ))}
                                                    </Select>
                                                </>
                                            ) : null}
                                        </Form.Item>
                                    </>
                                ) : null}
                                <Form.Item name="name" label="Tên">
                                    <Input placeholder="Nhập vào tên của sản phẩm" allowClear/>
                                </Form.Item>
                                <Form.Item name="cost" label="Giá niêm yết">
                                    <InputNumber
                                        min={1}
                                        step={10000}
                                        placeholder="Nhập vào giá của sản phẩm"
                                        style={{width: "100%"}}
                                        addonBefore="VND"
                                        formatter={(value: any) => `${value}`.replace(REG_FOMAT, ',')}
                                        //@ts-ignore
                                        parser={(value: any) => value!.replace(PARSE_FOMAT, '')}
                                    />
                                </Form.Item>
                                <Form.Item name="quantity" label="Số lượng">
                                    <InputNumber
                                        style={{width: "100%"}}
                                        placeholder="Nhập vào giá của sản phẩm"
                                        formatter={(value) => `${value}`.replace(REG_FOMAT, ',')}
                                        parser={(value) => value!.replace(PARSE_FOMAT, '')}
                                    />
                                </Form.Item>

                                {formMode !== "settings" ? (
                                    <Row justify="space-between">
                                        <Col span={12}>
                                            <Form.Item name="status" label="Tải sản phẩm lên" style={{width: "100%"}}>
                                                <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish}/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item name="isPromotion" label="Chọn làm sản phẩm tiêu biểu">
                                                <Switch onChange={(e: any) => setIsPromotion(e)} checked={isPromotion}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                ) : null}


                            </Col>
                            <Col xl={12} md={24}>
                                <Row align="bottom" gutter={[8, 8]}>
                                    <Col span={12}>
                                        <Form.Item name={['discount', 'type']} label="Giảm giá">
                                            <Select
                                                onChange={(e) => setDiscountType(e)}
                                            >
                                                {dicountTypeInstant.map((item, index) => (
                                                    <Select.Option value={item?.value}
                                                                   key={item?.value}>{item.label}</Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name={['discount', 'value']}>
                                            <InputNumber
                                                onChange={(e: any) => setDiscountValue(e)}
                                                placeholder="Nhập số tiền giảm giá"
                                                addonBefore={discountType === 0 ? "VND " : "%"}
                                                min={1}
                                                max={cost && (discountType === 0 ? cost : 100)}
                                                style={{width: "100%"}}
                                                readOnly={(!cost || cost <= 0) ? true : false}
                                                formatter={(value) => `${value}`.replace(REG_FOMAT, ',')}
                                                parser={(value) => value!.replace(PARSE_FOMAT, '')}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item label="Giá sau giảm" name="price">
                                    <Input placeholder="giá sau giảm" disabled/>
                                </Form.Item>
                                <Form.Item name="discountAt" label={`Thời gian giảm giá`}>
                                    <DatePicker.RangePicker
                                        showTime
                                        disabledDate={disabledDate}
                                        style={{width: "100%"}}
                                    />
                                </Form.Item>
                                {formMode !== "settings" ? (
                                    <>
                                        <Form.Item name="short_desc" label="Mô tả ngắn">
                                            <Input.TextArea placeholder="Nhập vào mô tả"
                                                            style={{height: "50px", resize: 'none'}}/>
                                        </Form.Item>

                                        <Form.Item name="desc" label="Mô tả">
                                            <CkUpload/>
                                        </Form.Item>
                                    </>
                                ) : null}
                            </Col>
                        </Row>
                        <Form.Item>
                           <Row gutter={[4,4]}>
                               <Col>
                                   <Button type="primary" htmlType="submit" style={{minWidth: "15rem", width: "17rem"}}>
                                       Submit
                                   </Button>
                               </Col>
                               <Col>
                                   <Button htmlType="button" onClick={onReset} >
                                       Reset
                                   </Button>
                               </Col>
                           </Row>
                        </Form.Item>

                    </Form>
                </>
        </>
    )
}

export default ProductForm;

