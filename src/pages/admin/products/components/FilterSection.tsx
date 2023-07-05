import {Button, DatePicker, Row, Col, Typography, Form, Card, Input, Space, AutoComplete} from 'antd';
import {FilterOutlined} from "@ant-design/icons";
import {useState} from "react";
import type {DatePickerProps} from 'antd';


type Props = {
    openFilter: boolean;
    setOpenFilter: any;
    form?: any;
    onFinish?: any;
    onReset?: any
}

const FilterSection = ({openFilter, setOpenFilter, form, onFinish, onReset}: Props) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const handleSearch = (value: string) => { };

    return (
        <div style={{boxSizing: "border-box"}}>
            <Button type="default" onClick={() => setOpenFilter(!openFilter)} icon={<FilterOutlined/>}>Bộ lọc</Button>
            {openFilter && (
                <Card bodyStyle={{padding: 10}}
                      style={{ marginTop: "1.5rem"}}>
                    <Form
                        layout="horizontal"
                        onFinish={onFinish}
                        form={form}
                        labelCol={{flex: '110px'}}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{flex: 1}}
                        colon={false}

                    >
                        <Row gutter={[16, 0]}>

                            <Col span={24}>
                                <Form.Item label="Tên sản phẩm" name="name">
                                    <Input placeholder="Nhập sản phẩm"/>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Thể loại" name="category">
                                    <AutoComplete
                                        onSearch={handleSearch}
                                        placeholder="input here"
                                        options={options}
                                    />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="submit" >
                                            Tìm kiếm
                                        </Button>
                                        <Button htmlType="button" onClick={onReset}>
                                            Reset
                                        </Button>
                                    </Space>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            )}
        </div>
    )
}
export default FilterSection

