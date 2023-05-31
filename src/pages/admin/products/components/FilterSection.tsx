import {Button,  DatePicker, Row, Col, Typography, Form, Card, Input,Space, AutoComplete } from 'antd';
import {FilterOutlined } from "@ant-design/icons";
import {useState} from "react";
import type { DatePickerProps } from 'antd';



type Props = {
    openFilter: boolean;
    setOpenFilter :any;
    form?:any;
    onFinish?:any;
    onReset?:any
}

const FilterSection = ({openFilter, setOpenFilter, form, onFinish, onReset}: Props) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const handleSearch = (value: string) => {
        let res: { value: string; label: string }[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
                value,
                label: `${value}@${domain}`,
            }));
        }
        setOptions(res);
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <Button type="default" onClick={() => setOpenFilter(!openFilter)} icon={<FilterOutlined />}>Bộ lọc</Button>
            {openFilter && (
                <Card bodyStyle={{padding: 0}} style={{width: "calc(100% + 25%)", marginTop: "0.5rem", padding: "3rem"}}>
                    <Form
                        layout="horizontal"
                        onFinish={onFinish}
                        form={form}
                        labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 600 }}
                    >
                        <Row gutter={[16,0]}>
                            <Col span={12}>
                                <Form.Item label="Tên phim"  name="name">
                                    <Input placeholder="Nhập tên phim" />
                                </Form.Item>
                                <Form.Item label="Thể loại" name="category">
                                    {/*<Input name="category" placeholder="Nhập tên phim" />*/}
                                    <AutoComplete
                                        onSearch={handleSearch}
                                        placeholder="input here"
                                        options={options}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Tên diễn viên" name="actor_name">
                                    <Input  placeholder="Nhập tên diễn viên " />
                                </Form.Item>
                                <Form.Item label="Ngày khởi chiếu" name="releaseDay">
                                    <DatePicker onChange={onChange}  style={{width: "100%"}} placeholder="Ngày khởi chiếu"/>
                                </Form.Item>
                            </Col>
                            <Col span={24} push={12}>
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="submit" style={{width: "200px"}}>
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
        </>
    )
}
export default FilterSection

