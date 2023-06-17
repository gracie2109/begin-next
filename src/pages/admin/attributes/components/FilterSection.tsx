import {Button,  DatePicker, Row, Col, Typography, Form, Card, Input,Space, AutoComplete } from 'antd';
import {FilterOutlined } from "@ant-design/icons";
import {useState} from "react";
import type { DatePickerProps } from 'antd';
import styled from "styled-components";


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
                <CardCustom bodyStyle={{padding: '10px'}}>
                    <Form
                        layout="horizontal"
                        onFinish={onFinish}
                        form={form}
                        labelAlign="left"
                        labelWrap
                        labelCol={{ flex: '110px' }}
                        wrapperCol={{ flex: 1 }}
                        colon={false}
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
                                <ButtonGroup>
                                        <Button type="primary" htmlType="submit">
                                            Tìm kiếm
                                        </Button>
                                        <Button htmlType="button" onClick={onReset}>
                                            Reset
                                        </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardCustom>
            )}
        </>
    )
}
export default FilterSection;

const CardCustom = styled(Card)`
    border: 1px solid red;
    margin-top: 1rem;
    width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    button[type=submit]{
        width: 38%;
    }
    

`