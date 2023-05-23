import React, {useState, useEffect, useCallback} from "react";
import {Row, Col, Typography, Button, Space, Form, Card, Input, Divider, Image} from "antd";
import UploadFile from "@/components/common/UploadFile";

type Props = {
    form: any,
    onFinish :any,
    onReset:any,
    formType: any,
    formMode:any
}

const MovieForm = ({form, onFinish, onReset, formType,formMode}:Props) => {
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
    return (
           <>
               {/* normal form*/}
               {formType === "normal" && (
                  <FormInstant name="form_normal" key="form_normal"/>
               )}
           </>
    )
}

export default MovieForm;