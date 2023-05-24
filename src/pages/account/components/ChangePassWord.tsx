import React,{useState, useEffect}   from "react";
import {
    Row,
    Col,
    Typography,
    Grid, Card, Form, Input, Button,Avatar
} from "antd";
const {useBreakpoint} = Grid;

const UserOrder = () => {
    const screens = useBreakpoint();
    const [form] = Form.useForm();

    const onFinish = (newPw:any) => {
        console.log("newPw", newPw);
        form.resetFields();
    }
    return (
        <div className={`${!screens.xs ? "w-1/2 mx-auto" : "w-full"}`}>
            <Row gutter={[0, 8]}>
            <Col md={24} xs={24}>

                <div className="grid place-items-center">
                    <Typography.Title level={3}>Thay đổi mật khẩu</Typography.Title>
                </div>
            </Col>
            <Col md={24} xs={24}>
                <Card style={{width: "100%", margin: "0 auto"}}>
                    <Form
                        layout={"vertical"}
                        onFinish={onFinish}
                        style={{width: "100%", margin: "0 auto"}}
                    >
                        {/*  avatar  */}
                        <Form.Item style={{textAlign: "center"}}>
                            <Avatar size={120} src="https://fptshop.com.vn/Content/v5d/account/images/login-password.png?v=123" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item style={{marginTop: "1rem"}}>
                            <Button
                                htmlType="submit"
                                type="primary"
                                danger
                                style={{width: "100%"}}>
                                Lưu thay đổi
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
        </div>
    )
}
export default UserOrder;
