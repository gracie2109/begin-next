import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";
import {
    Button,
    Form,
    Input,
    Select,
    Space

} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



type Props ={}
const SettingForm = (props: Props) => {
    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
      };
    
      const handleChange = () => {
        form.setFieldsValue({ sights: [] });
      };
    return (
        <Form
        form={form}
        name="dynamic_form_complex"
        onFinish={onFinish}
      >

      </Form>
    )
}

export default SettingForm;
export const dataAttr  = [
    {
        name: "mau sac",
        desc: "mau sac",
        status: true,
        isParent: true,
        value: "mau-sac",
        children: [
            {
                name: "vang",
                desc: "vang",
                status: true,
                isParent: false,
                value: "vang",
                children: []
            },
            {
                name: "den",
                desc: "den",
                status: true,
                isParent: true,
                value: "den",
                children: []
            },
        ]
    },
    {
        name: "kich thuoc",
        desc: "kich thuoc",
        status: true,
        isParent: true,
        value: "kich-thuoc",
        children: []
    }

]


