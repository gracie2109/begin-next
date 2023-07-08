import {HeaderAction} from '@/components/common';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import UploadFile from '@/components/common/UploadFile/UploadFile';
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Switch,
    App, Grid
} from 'antd';
import {SharedIcons} from '@/utils';

const {PlusOutlined, MinusCircleOutlined} = SharedIcons;

const Index = () => {
    const [form] = Form.useForm();
    const [isMaintain, setIsMaintain] = useState<any>(false);
    const {message, modal, notification} = App.useApp();
    const screens = Grid.useBreakpoint();

    useEffect(() => {
        resetdata()
    }, []);

    const onFinish = (values: any) => {
        modal.confirm({
            title: "Bạn có chắc muốn cập nhật dữ liệu ?",
            onOk() {
                console.log('values', values);
                setTimeout(() => {
                    message.success('Success!');
                }, 2000)
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }
    const resetdata = () => {
        setIsMaintain(data.maintain);
        form.setFieldsValue({
            ...data
        });
    }
    const onReset = () => {
        resetdata()
    }


    return (
        <>
            <HeaderAction title="Cài đặt trang web"/>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={[32, 8]} className={`${screens.xs ? "block" : ""}`}>
                    <Col xl={12} md={24}>
                        <Form.Item name="images" label="Logo" className="no-style-form">
                            <UploadFile max={1} isMultiple={false}/>
                        </Form.Item>
                        <Form.Item name="name" label="Tên cửa hàng">
                            <Input placeholder="Nhập vào tên cửa hàng" allowClear/>
                        </Form.Item>
                        <Form.Item name="email" label="email">
                            <Input placeholder="Nhập vào email cửa hàng" allowClear/>
                        </Form.Item>
                        <Form.Item name="phone" label="phone cửa hàng">
                            <Input placeholder="Nhập vào phone cửa hàng" allowClear/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={24}>
                        <Form.Item name="maintain" label="Bảo trì">
                            <Switch onChange={(e: any) => setIsMaintain(e)} checked={isMaintain}/>
                        </Form.Item>
                        <Form.Item name="desc" label="Mô tả cửa hàng">
                            <Input.TextArea placeholder="Nhập vào mô tả" style={{height: "50px", resize: 'none'}}/>
                        </Form.Item>
                        <Form.List name="social">
                            {(fields, {add, remove}) => (
                                <>
                                    <label htmlFor="">Mạng xã hội</label>
                                    {fields.map(({key, name, ...restField}) => (
                                        <Row key={key} style={{margin: '.5rem 0', gap: 3}}>
                                            <Col span={11}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'name']}
                                                    rules={[{required: true, message: 'Missing first name'}]}
                                                >
                                                    <Input placeholder="First Name" style={{width: '100%'}}/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'value']}
                                                    rules={[{required: true, message: 'Missing last name'}]}
                                                >
                                                    <Input placeholder="Last Name" style={{width: '100%'}}/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={1}>
                                                <MinusCircleOutlined onClick={() => remove(name)}/>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Form.Item>
                                        <Button style={{width: '93%'}} type="dashed" onClick={() => add()} block
                                                icon={<PlusOutlined/>}>
                                            Thêm mạng xã hội
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.List
                            name="address"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
                                            return Promise.reject(new Error('At least 1 passengers'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, {add, remove}, {errors}) => (
                                <>
                                    {fields?.map((field, index) => (
                                        <Form.Item
                                            label={index === 0 ? 'Địa chỉ' : ''}
                                            required={false}
                                            key={field.key}
                                        >
                                            <Form.Item
                                                {...field}
                                                validateTrigger={['onChange', 'onBlur']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Nhập vào địa chỉ hoặc xóa filed này.",
                                                    },
                                                ]}
                                                noStyle
                                            >
                                                <Input placeholder="Nhập địa chỉ" style={{width: '95%'}}/>
                                            </Form.Item>
                                            {fields.length > 1 ? (
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}

                                                />
                                            ) : null}
                                        </Form.Item>
                                    ))}
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => add()}
                                            style={{width: '95%'}}
                                            icon={<PlusOutlined/>}
                                        >
                                            Thêm địa chỉ
                                        </Button>
                                        <Form.ErrorList errors={errors}/>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Col>

                </Row>
                <Form.Item>
                    <Row gutter={[4, 4]}>
                        <Col>
                            <Button type="primary" htmlType="submit" style={{minWidth: "15rem", width: "17rem"}}>
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>

        </>
    )
}

export default Index;


export const data =
    {
        _id: 1,
        name: "Eccommerce",
        images: undefined,
        desc: "Website phục vụ mục đích kinh doanh,...",
        status: true,
        maintain: false,
        address: [
            "110 Yên Nghĩa, quận Hà đông, thành phố Hà Nội",
            "112 d Nghĩa, quận Hà đông, thành phố Hà Nội"
        ],
        map: undefined,
        phone: "0327072255",
        email: undefined,
        social: [
            {
                name: "Facebook",
                value: "https://www.facebook.com/"
            },
            {
                name: "Instagram",
                value: "https://www.instagram.com/"
            },

        ]
    }
