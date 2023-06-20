import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Switch, Space
} from "antd";
import UploadFile from "@/components/common/UploadFile/UploadFile";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

type Props = {
    form: any,
    onFinish: any,
    onReset:any,
    setIsMaintain:any,
    isMaintain:any,
    setIsPublish:any,
    isPublish:any

}

const SettingForm = ({form,onFinish,onReset,isPublish, setIsPublish,isMaintain, setIsMaintain}: Props) => {

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={[32, 8]}>
                <Col span={12}>
                    <Form.Item name="images" label="Logo" className="no-style-form"><br/><br/>
                        <UploadFile max={3} isMultiple={true}/>
                    </Form.Item>
                    <Form.Item name="name" label="Tên cửa hàng">
                        <Input placeholder="Nhập vào tên cửa hàng" allowClear/>
                    </Form.Item>
                    <Form.Item name="email" label="email" >
                        <Input placeholder="Nhập vào email cửa hàng" allowClear/>
                    </Form.Item>
                    <Form.Item name="phone" label="phone cửa hàng">
                        <Input placeholder="Nhập vào phone cửa hàng" allowClear/>
                    </Form.Item>


                </Col>
                <Col span={12}>
                    <Row justify="space-between">
                        <Col span={12}>
                            <Form.Item name="status" label="Chọn làm setting chính" style={{width: "100%"}}>
                                <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish}/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item name="maintain" label="Bảo trì">
                                <Switch onChange={(e: any) => setIsMaintain(e)} checked={isMaintain}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="desc" label="Mô tả cửa hàng">
                        <Input.TextArea placeholder="Nhập vào mô tả" style={{height: "50px", resize: 'none'}}/>
                    </Form.Item>
                    <Form.List name="social" >
                        {(fields, {add, remove}) => (
                            <>
                                <label htmlFor="">Mạng xã hội</label>
                                {fields.map(({key, name, ...restField}) => (
                                    <Row key={key} style={{ margin: '.5rem 0', gap: 3}} >
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
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
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
                                            <Input placeholder="Nhập địa chỉ" style={{width: '97%'}}/>
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
                                        style={{width: '100%'}}
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
            <Form.Item style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                <Button type="primary" htmlType="submit" style={{width: "200px", marginRight: "10px"}}>
                    Submit
                </Button>
                <Button htmlType="button" style={{width: "100px"}} onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>

        </Form>
    )
}

export default SettingForm;

