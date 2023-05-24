import React, {useState, useEffect}   from "react";
import {Row, Col, Typography, Avatar, Input, DatePicker, Upload , Card, Form,Grid, Button,message,Radio} from "antd";
import dayjs from 'dayjs';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
const {useBreakpoint} = Grid;


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const UserInfo = () => {
    const screens = useBreakpoint();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>("https://fptshop.com.vn/Content/v5d/account/images/img-user-update.png?v=123");
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };


    const onFinish = (values:any) => {
        console.log("values",values)
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current > dayjs().endOf('day');
    };

    return (
        <div className={`${!screens.xs ? "w-1/2 mx-auto" : "w-full"}`}>
           <Row>
               <Col md={24} xs={24}>
                   {/* Avatar   */}
                   <div className="grid place-items-center">
                       <Typography.Title level={3}>  Tài khoản của bạn </Typography.Title>
                   </div>
               </Col>
               <Col md={24} xs={24}>
                   <Card>
                       <Form
                           layout={"vertical"}
                           onFinish={onFinish}
                       >
                           <Form.Item style={{textAlign: "center", verticalAlign: "middle"}}>
                               <Upload
                                   name="avatar"
                                   listType="picture-circle"
                                   className="avatar-uploader"
                                   showUploadList={false}
                                   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                   beforeUpload={beforeUpload}
                                   onChange={handleChange}
                               >
                                   {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                               </Upload>
                               <small>Chạm vào ảnh hiện tại để thay đổi</small>
                           </Form.Item>

                           {/*  name  */}
                           <Form.Item label="Họ và tên" name="username">
                               <Input placeholder="Nhập họ tên"/>
                           </Form.Item>
                           {/*  SDT   */}
                           <Form.Item label="Số điện thoại" name="phoneNumber">
                               <Input  readOnly/>
                           </Form.Item>
                           {/*  Giới tính   */}
                           <Form.Item label="Giới tính" name="gender">
                               <Radio.Group onChange={onChange} value={value} name="gender">
                                   <Radio value={1}>Nam</Radio>
                                   <Radio value={2}>Nữ</Radio>
                               </Radio.Group>

                           </Form.Item>
                           {/*  Email   */}
                           <Form.Item label="Email" name="email">
                               <Input  placeholder="johnDoe@example.com"/>
                           </Form.Item>
                           {/* Date */}
                           <Form.Item label="Ngày sinh"  >
                               <DatePicker
                                   placeholder="Nhập thông tin"
                                   disabledDate={disabledDate}
                                   showTime={{ hideDisabledOptions: true}}
                                   format="DD-MM-YYYY"
                                   showHour={false}
                                   showToday={false}
                                   style={{width: "100%"}}
                               ></DatePicker>
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
export default UserInfo;