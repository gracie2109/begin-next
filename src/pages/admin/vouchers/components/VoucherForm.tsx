import {useEffect} from "react";
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
import {REG_FOMAT, PARSE_FOMAT, calcDiscountPrice,} from "@/utils";
import type {RangePickerProps} from 'antd/es/date-picker';
import type {TabsProps} from 'antd';
import dayjs from 'dayjs';
import {CkUpload} from "@/components/common";


type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode: any,
    isPublish: any,
    setIsPublish: any,
    isPromotion: any,
    setIsPromotion: any,
    discountType: any,
    setDiscountType: any,
    discountValue: any,
    setDiscountValue: any

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
const VoucherForm = ({
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
                         setDiscountValue
                     }: Props) => {
    const cost = Form.useWatch('cost', form);

    useEffect(() => {
        const res = calcDiscountPrice(cost, discountValue, discountType);
        form.setFieldsValue({
            price: res
        })
    }, [cost, discountType, discountValue])


    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };


    return (
        <Form
            name={formMode}
            key={formMode}
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <Row gutter={[32, 8]}>
                <Col span={12}>
                    <Form.Item name="images" label="Ảnh đại diện" className="no-style-form"><br/>
                        <UploadFile max={3} isMultiple={true}/>
                    </Form.Item>
                    <Form.Item name="name" label="Tên voucher">
                        <Input placeholder="Nhập vào tên của voucher" allowClear/>
                    </Form.Item>
                    <Form.Item name="cost" label="Giá tối thiểu của đơn hàng">
                        <InputNumber
                            min={1}
                            step={10000}
                            placeholder="Nhập vào giá tối thiểu của đơn hàng"
                            style={{width: "100%"}}
                            addonBefore="VND"
                            formatter={(value: any) => `${value}`.replace(REG_FOMAT, ',')}
                            //@ts-ignore
                            parser={(value: any) => value!.replace(PARSE_FOMAT, '')}
                        />

                    </Form.Item>
                    <Form.Item name="quantity" label="Số lượng voucher">
                        <InputNumber
                            style={{width: "100%"}}
                            placeholder="Nhập vào số lượng voucher"
                            formatter={(value) => `${value}`.replace(REG_FOMAT, ',')}
                            parser={(value) => value!.replace(PARSE_FOMAT, '')}
                        />
                    </Form.Item>

                    <Form.Item name="isPushlish" label="Tải voucher lên" style={{width: "100%"}}>
                        <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Row align="bottom" gutter={[8, 8]}>
                        <Col>
                            <Form.Item name="maxUsed" label="Tần suất sử dụng">
                                <InputNumber
                                    style={{width: "100%"}}
                                    placeholder="Nhập vào số lần được sử dụng"
                                    min={1}
                                    max={99}
                                />
                            </Form.Item>
                            <Form.Item name={['discount', 'type']} label="Giảm giá">
                                <Select
                                    style={{width: 220}}
                                    onChange={(e) => setDiscountType(e)}
                                >
                                    {dicountTypeInstant.map((item, index) => (
                                        <Select.Option value={item?.value}
                                                       key={item?.value}>{item.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
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
                    <Form.Item name="discountAt" label={`Thời gian giảm giá`}>
                        <DatePicker.RangePicker
                            showTime
                            disabledDate={disabledDate}
                            style={{width: "100%"}}
                        />
                    </Form.Item>

                    <Form.Item name="short_desc" label="Mô tả ngắn">
                        <Input.TextArea placeholder="Nhập vào mô tả" style={{height: "50px", resize: 'none'}}/>
                    </Form.Item>

                    <Form.Item name="desc" label="Mô tả">
                        <CkUpload/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                <Button type="primary" htmlType="submit" style={{width: "200px", marginRight: "10px"}}>
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset} style={{width: "100px"}}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}

export default VoucherForm;

