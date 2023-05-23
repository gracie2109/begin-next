import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Row, Col, Form, Input, Typography, Card, Divider, Grid} from 'antd';
import  Link from "next/link"
import SocialLogin from "@/pages/auth/components/SocialLogin";
import {CSSProperties} from "react";

type Props = {
    form :any,
    isLogin ?:boolean,
    onFinish:any,
    title: string,
    isLoading:boolean
}
const { useBreakpoint } = Grid
const AuthForm = ({form, isLogin, onFinish, title, isLoading}:Props) => {
    const screens = useBreakpoint();

    const style:CSSProperties = {
        margin: "0 auto",
        width: "100%"
    }
    const style2:CSSProperties = {
        padding: "10px",
        height: "100vh"
    }
   return (
      <Card bodyStyle={!screens.xs ? style : style2}>
          <Form
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              form={form}
              style={{width: `${screens.xs ? "100%" : "750px"}`}}
              layout="vertical"
          >
              <Typography.Title level={2} style={{textAlign: "center"}}>
                    <Link href="/">    {title}</Link>
              </Typography.Title>
              <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ type: 'email' , required: true}]}
              >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} />
              </Form.Item>
              <Form.Item
                  name="password"
                  hasFeedback
                  label="Password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                  <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"

                  />
              </Form.Item>
              {!isLogin && (
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
                      <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
                  </Form.Item>
              )}
              <Form.Item>
                  {isLogin ? (
                      <Row justify="end" gutter={[16,16]}>
                          <Col>
                              <Typography.Text>
                                  Chưa có tài khoản?
                              </Typography.Text>
                          </Col>
                          <Col>
                              <Link className="login-form-forgot" href="/auth/register">
                                  Đăng Ký
                              </Link>
                          </Col>
                      </Row>
                  ):(
                      <Row justify="start" gutter={[16,16]}>
                         <Col>
                             <Link href="/">
                                Quên mật khẩu ?
                            </Link>
                         </Col>
                          <Col>
                              <Link className="login-form-forgot" href="/auth/login">
                                  Đăng Nhập
                              </Link>
                          </Col>
                      </Row>
                  )}
              </Form.Item>

              <Form.Item>
                  <Button loading={isLoading} style={{width: "100%"}} type="primary" htmlType="submit">
                      {isLogin ? "Đăng nhập" : "Đăng Ký"}
                  </Button>
                  <Divider>Hoặc</Divider>
                  <SocialLogin />
              </Form.Item>
          </Form>
      </Card>
   )
}
export default AuthForm