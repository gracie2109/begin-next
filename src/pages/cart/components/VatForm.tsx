import {Button, Col, Form, Input, Row, Grid} from "antd";
import {useEffect, useState} from "react";

type Props = {
    onFinish: any,
    form:any
}
const {useBreakpoint} = Grid
const VatForm = ({onFinish, form}:Props) => {
    const screen  = useBreakpoint();

    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <Form form={form} onFinish={onFinish}>
            <Row gutter={[16, 0]}>
                <Col md={8} xs={24}>
                    <Form.Item name="companyVatName"  rules={[{ required: true}]}>
                        <Input placeholder="Tên công ty...." />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24}>
                    <Form.Item name="companyVatCode" rules={[{ required: true}]}>
                        <Input placeholder="Mã số thuế...." />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24}>
                    <Form.Item name="companyVatEmail"  rules={[{ type: 'email' , required: true}]}>
                        <Input placeholder="Email...." />
                    </Form.Item>
                </Col>
                <Col md={24} xs={24}>
                    <Form.Item name="companyVatAdr" rules={[{ required: true}]}>
                        <Input placeholder="Địa chỉ công ty...." />
                    </Form.Item>
                </Col>
                <Col md={24} xs={24}>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{width: screen.xs ? "100%" : "200px"}}

                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }:any) => errors.length).length
                                }
                            >
                                Lưu thông tin
                            </Button>
                        )}
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}
export default VatForm