import React, { useEffect, useState, memo } from 'react';
import { Button, Card, Col, Form, Input, Modal, Radio, Row, Typography, Popconfirm, Space } from 'antd';
import { PlusOutlined, DeleteOutlined,UserOutlined,PhoneOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import Providers from "@/components/common/Providers";
import { v4 as uuidv4 } from 'uuid';


interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: any) => void;
    onCancel: () => void;
    setAddress:any;
    form:any
}
const CollectionCreateForm: React.FC<CollectionCreateFormProps> =
    ({
        open,
        onCreate,
        onCancel,
        setAddress,
         form
    }) => {


        return (
            <Modal
                open={open}
                title="Thêm mới địa chỉ giao hàng"
                okText="Tạo"
                cancelText="Hủy"
                onCancel={() => {
                    form.resetFields();
                    onCancel()
                }}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values:any) => {
                            form.resetFields();
                            onCreate(values);
                        })
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="name"
                        label="Tên người nhận"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        label="SDT người nhận"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon"/>} />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <Providers setAddress={setAddress}/>
                    </Form.Item>
                    <Form.Item name="isMain" className="collection-create-form_last-form-item" label="Chọn làm địa chỉ mặc định">
                        <Radio.Group>
                            <Radio value={true}>Đồng ý</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

const AddressBook = () => {
    const [form] = Form.useForm()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [addresses, setAddresses] = useState<any>([...dataAddress]);
    const [address, setAddress] = useState<any>(undefined);


    useEffect(() => {
        if (addresses && addresses.length > 0) {
            const main = addresses.find((item: any) => item.isMain === true);
            if (main) {
                setValue(main?.id)
            }
        } else {
            const firstData = addresses.at(0);
            setValue(firstData?.id)
        }
    }, [addresses]);


    const changeAddress = (e: RadioChangeEvent, dataChange: any) => {
        const value = e.target.value
        setValue(value);
    }
    const confirm = (data: any) => {
        setAddresses(addresses.filter((item:any) => item.id !== data.id))
    }

    const handleCreate = (value: any) => {
        console.log("value", value)
        value.id = uuidv4();
        value.address = address;
        delete value.addressId;
        setOpen(!open);
        setAddresses([...addresses, value]);
        
    }
    const renderAddress = (address:any) => {
        const district = address.district.children;
        const province = address.province.children;
        const ward = address.ward.children;
        const des = address.desc
      
        return (
            <>
                {district}, 
                {province}, 
                {ward}, 
                {des}
            
            </>
        )
    }

    return (
        <div className="p-5">
            <div className="grid place-items-center">
                <Typography.Title level={3}> Sổ địa chỉ </Typography.Title>
            </div>
            <Button
                type="dashed"
                onClick={() => {
                    setOpen(true);
                }}
                icon={<PlusOutlined />}
                shape="round"
            >
                Thêm địa chỉ
            </Button>
            <Typography.Title level={4} style={{ marginTop: "1rem" }}>Chọn nơi giao hàng</Typography.Title>
            <Row gutter={[8, 8]} style={{ marginTop: '1rem' }}>
                {addresses && addresses.map((data: any, index: any) => (
                    <Col md={12} xs={24} key={index}>
                        <Card  hoverable >
                            <Row gutter={[8, 8]} align="stretch">
                                <Col span={2} style={{ textAlign: "end" }}>
                                    <Radio.Group value={value} onChange={(e) => changeAddress(e, data)}>
                                        <Radio value={data?.id}></Radio>
                                    </Radio.Group>
                                </Col>
                                <Col span={18}>
                                    <Typography.Text strong style={{marginTop: "10px"}}>Chọn làm địa chỉ mặc định</Typography.Text>
                                    <Typography.Paragraph>
                                        <b>Tên</b>: {data?.name} <br />
                                        <b>SDT</b>: {data?.phoneNumber}<br />
                                        <b>Địa chỉ</b>: {renderAddress(data?.address)}
                                    </Typography.Paragraph>
                                </Col>
                                <Col span={4} style={{ textAlign: "end" }}>
                                    <Space.Compact >
                                        <Popconfirm
                                            title="Xóa địa chỉ"
                                            description="Bạn có chắc muốn xóa không?"
                                            cancelText="Hủy"
                                            onConfirm={() => confirm(data)}
                                        >
                                            <Button icon={<DeleteOutlined />} type="text"></Button>
                                        </Popconfirm>
                                    </Space.Compact>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
                {addresses.length < 1 && <p>Bạn chưa có địa chỉ nào</p>}
            </Row>

            <CollectionCreateForm
                open={open}
                form={form}
                onCreate={(values) => { handleCreate(values) }}
                onCancel={() => { setOpen(!open)}}
                setAddress= {setAddress}
            />
        </div>
    )
}

export default AddressBook


export const dataAddress = [
    {
        name: "dấd",
        phoneNumber: "ádasd",
        isMain: true,
        id: "6f7da6db-2bd9-47e4-9375-66c47ab3f438",
        address: {
            province: {
                "key": "92",
                "value": "92",
                "children": "Thành phố Cần Thơ"
            },
            district: {
                "key": "925",
                "value": "925",
                "children": "Huyện Cờ Đỏ"
            },
            ward: {
                "key": "31274",
                "value": "31274",
                "children": "Xã Đông Thắng"
            },
            desc: "sssas"
        }
    }
]