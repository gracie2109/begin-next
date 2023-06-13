import React from "react";
import {
    Button,
    Form,
    Card,
    Input,
    Switch,
    Select,
    Row, Col
} from "antd";

type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode: any,
    isParent:any,
    setIsParent:any,
    attrOptions:any,
    setAttrOptions:any,
    data:any
}

const AttributesForm = ({ form, onFinish, onReset, formMode,isParent,setIsParent,attrOptions, setAttrOptions, data }: Props) => {

    return (
        <div className="w-1/2 mx-auto">
        <Form
            name={formMode}
            key={formMode}
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <Card>
                <Form.Item name="name" label="Tên" >
                    <Input placeholder="Nhập vào tên của sản phẩm" allowClear  />
                </Form.Item>

                <Form.Item name="desc" label="Mô tả">
                    <Input.TextArea  placeholder="Nhập vào mô tả" style={{ height: "100px",resize: 'none' }}/>
                </Form.Item>
                <Form.Item name="status" label="Trạng thái">
                    <Switch />
                </Form.Item>
                <Row justify="space-between" align="stretch">
                    <Col>
                        <Form.Item name="isParent" label="Chọn làm thuộc tính cha">
                            <Switch onChange={(e: any) => setIsParent(e)}  checked={isParent}/>
                        </Form.Item>
                    </Col>
                    <Col>
                        {!isParent && (
                            <Form.Item label="TreeSelect" name="parent">
                                <Select
                                    style={{ width: 220 }}
                                    onChange={(a:any) => setAttrOptions(a)}
                                >
                                    {data.map((item:any, index:any) => (
                                        <Select.Option value={item?.value} key={item?.value}>{item.title}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        )}
                    </Col>
                </Row>

                <Form.Item style={{ width: "100%", display: "flex" }} >
                    <Button type="primary" htmlType="submit" style={{ width: "400px", marginRight: "10px" }}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{ width: "200px" }}>
                        Reset
                    </Button>
                </Form.Item>
            </Card>

        </Form>
        </div>
    )
}

export default AttributesForm;
