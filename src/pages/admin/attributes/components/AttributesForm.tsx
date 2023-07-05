import React from "react";
import {
    Button,
    Form,
    Card,
    Input,
    Switch,
    Select,
    Row,
    Col,
    Grid
} from "antd";
import styled from 'styled-components';


type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode?: any,
    isParent?: any,
    setIsParent?: any,
    attrOptions?: any,
    setAttrOptions?: any,
    parents?: any,
    status: any,
    setStatus?: any
}

const AttributesForm = ({
                            form,
                            onFinish,
                            onReset,
                            formMode,
                            isParent,
                            setIsParent,
                            attrOptions,
                            setAttrOptions,
                            parents,
                            status,
                            setStatus
                        }: Props) => {
    const screens = Grid.useBreakpoint()
    return (
        <div className={`${screens.xs ? "w-full mt-3" : "w-1/2 mx-auto"}`}>
            <Form
                name={formMode}
                key={formMode}
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <Card>
                    <Form.Item name="name" label="Tên">
                        <Input placeholder="Nhập vào tên của sản phẩm" allowClear/>
                    </Form.Item>

                    <Form.Item name="desc" label="Mô tả">
                        <Input.TextArea placeholder="Nhập vào mô tả" style={{height: "100px", resize: 'none'}}/>
                    </Form.Item>
                    <Form.Item name="status" label="Trạng thái">
                        <Switch onChange={(e: any) => setStatus(e)} checked={status}/>
                    </Form.Item>
                    <Row justify="space-between" align="stretch">
                        <Col>
                            <Form.Item name="isParent" label="Chọn làm thuộc tính cha">
                                <Switch onChange={(e: any) => setIsParent(e)} checked={isParent}/>
                            </Form.Item>
                        </Col>
                        <Col>
                            {!isParent && (
                                <Form.Item label="TreeSelect" name="parent">
                                    <Select
                                        style={{width: 220}}
                                        onChange={(a: any) => setAttrOptions(a)}
                                    >
                                        {parents && parents?.map((item: any, index: any) => (
                                            <Select.Option value={item?.value}
                                                           key={item?.value}>{item?.title}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            )}
                        </Col>
                    </Row>

                    <ButtonGroup>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </ButtonGroup>
                </Card>

            </Form>
        </div>
    )
}

export default AttributesForm;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 10px 0;

  button[type =submit] {
    flex: 1;
  }

  button[type =button] {
    flex: none;
  }

`
