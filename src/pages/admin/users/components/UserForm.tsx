import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Switch,
    InputNumber, DatePicker, Radio, RadioChangeEvent
} from "antd";
import UploadFile from "@/components/common/UploadFile/UploadFile";
import {CkUpload} from "@/components/common";
import {RangePickerProps} from "antd/es/date-picker";
import dayjs from "dayjs";


type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode: any,
    isPublish: any,
    setIsPublish: any,
}

const UserForm = ({form, onFinish, onReset, formMode, isPublish, setIsPublish}: Props) => {
    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current > dayjs().endOf('day');
    };
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
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
                    <Form.Item name="avt" label="Ảnh" className="no-style-form"><br/><br/>
                        <UploadFile max={3} isMultiple={true}/>
                    </Form.Item>
                    <Form.Item name="name" label="Tên">
                        <Input placeholder="Nhập vào tên của sản phẩm" allowClear/>
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                        <Input placeholder="Nhập email" allowClear/>
                    </Form.Item>

                    <Form.Item name="phone" label="Số điện thoại">
                        <Input placeholder="Nhập email" allowClear/>
                    </Form.Item>

                </Col>
                <Col span={12}>
                    <Form.Item label="Giới tính" name="gender">
                        <Radio.Group onChange={onChange} value={value} name="gender">
                            <Radio value={1}>Nam</Radio>
                            <Radio value={2}>Nữ</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item name="desc" label="Mô tả ngắn">
                        <Input.TextArea placeholder="Nhập vào mô tả" style={{height: "50px", resize: 'none'}}/>
                    </Form.Item>
                    <Form.Item label="Ngày sinh">
                        <DatePicker
                            placeholder="Nhập thông tin"
                            disabledDate={disabledDate}
                            showTime={{hideDisabledOptions: true}}
                            format="DD-MM-YYYY"
                            showHour={false}
                            showToday={false}
                            style={{width: "100%"}}
                        ></DatePicker>
                    </Form.Item>
                    <Form.Item name="isPushlish" label="Trạng thái" style={{width: "100%"}}>
                        <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish}/>
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

export default UserForm;

