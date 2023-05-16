import React, {useState, useEffect, useCallback} from "react";
import {Row, Col, Typography, Button, Space, Form, Card, Input, Divider, Image, Spin} from "antd";
import {SharedIcons} from "@/utils";
import UploadFile from "@/components/common/UploadFile";

type Props = {
    form: any,
    onFinish :any,
    onReset:any,
    formType: any,
    formMode:any
}


const {ArrowLeftOutlined} = SharedIcons

const MovieForm = ({form, onFinish, onReset, formType,formMode}:Props) => {
    const [searchText,setSearchText]  = useState("");
    const [openHD, setOpenHD] = useState(false);
    const [openTMDBForm, setOpenTMDBForm]= useState(false);
    const [loading, setLoading] = useState(false)
    const FormInstant = ({name}: any) => {
        return (
            <Form
                name={name}
                form={form}
                onFinish={onFinish}
            >
               <Card>
                   <Row gutter={[32,8]}>
                       <Col span={12}>

                           <Form.Item name="name" label="Ảnh" className="no-style-form"><br/><br/>
                               <UploadFile max={3} isMultiple={true}/>
                           </Form.Item>
                           <Form.Item name="category" label="Thể loại">
                               <Input placeholder="Thể loại"/>
                           </Form.Item> <Form.Item name="name" label="Tên">
                           <Input placeholder="Tên"/>
                       </Form.Item>

                           <Form.Item name="category" label="Thể loại">
                               <Input placeholder="Thể loại"/>
                           </Form.Item>
                       </Col>
                       <Col span={12}>

                           <Form.Item name="name" label="Tên">
                               <Input placeholder="Tên"/>
                           </Form.Item>
                           <Form.Item name="category" label="Thể loại">
                               <Input placeholder="Thể loại"/>
                           </Form.Item>
                           <Form.Item name="name" label="Tên">
                               <Input placeholder="Tên"/>
                           </Form.Item>
                           <Form.Item name="category" label="Thể loại">
                               <Input placeholder="Thể loại"/>
                           </Form.Item> <Form.Item name="name" label="Tên">
                           <Input placeholder="Tên"/>
                       </Form.Item>
                           <Form.Item name="category" label="Thể loại">
                               <Input placeholder="Thể loại"/>
                           </Form.Item>
                       </Col>
                   </Row>
                   <Form.Item style={{width: "100%", display: "flex" ,justifyContent: "flex-end"}} >
                       <Button type="primary" htmlType="submit" style={{width: "330px", marginRight: "10px"}}>
                           Submit
                       </Button>
                       <Button htmlType="button" onClick={onReset} style={{width: "100px"}}>
                           Reset
                       </Button>
                   </Form.Item>
               </Card>

            </Form>
        )
    }

    const renderFormTMDB = () => {
          setLoading(false)
          setTimeout(() => {
              setLoading(true)
              setOpenTMDBForm(!openTMDBForm);
          }, 3000);

    }
   useEffect(() => {renderFormTMDB()},[searchText])
    return (
           <>
               {formType === "tmdb" && formMode === "create" &&(
                    <Row>
                        <Col span={24}>

                            <Card bodyStyle={{backgroundColor: 'rgb(204, 212, 222)', padding: '10px'}}>
                              <Space onClick={() => setOpenHD(!openHD)}>
                                  <Typography.Title level={3}>  Hướng dẫn sử dụng</Typography.Title>
                                  <ArrowLeftOutlined />
                              </Space>
                                {openHD && (
                                    <Typography.Paragraph>
                                        Truy cập <Typography.Link href="https://www.themoviedb.org/" target="_blank"> đường dẫn này </Typography.Link>
                                        và tìm kiếm tên phim bạn mong muốn có trong website của mình.<br/>
                                        Sau đó copy id của phim trên url và điền vào ô tìm kiếm để lấy thông tin <br/>
                                        <Image
                                            width={200}
                                            loading="lazy"
                                            src="https://res.cloudinary.com/dta662hjr/image/upload/v1684159261/Screenshot_2023-05-15_210020_ogr8gx.png"
                                        />
                                    </Typography.Paragraph>
                                )}
                            </Card>

                        </Col>
                        <Col span={24}>
                            <Input.Search
                                placeholder="input search loading default"
                                enterButton="Search" size="large"
                                onSearch={value => setSearchText(value)}
                                style={{width: "30%", marginTop: "1rem"}}
                            />
                            {loading && <Spin />}
                            {openTMDBForm && (
                                <>
                                    <Divider>Form</Divider>
                                    <FormInstant name="form_tmdbApi" key="form_tmdbApi"/>
                                </>
                            )}
                        </Col>
                    </Row>
               )}

               {/* normal form*/}
               {formType === "normal" && (
                  <FormInstant name="form_normal" key="form_normal"/>
               )}
           </>
    )
}

export default MovieForm;