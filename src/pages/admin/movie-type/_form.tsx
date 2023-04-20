import { HeaderAction } from "@/components/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Form, Input, Avatar, Row, Col, Button, Checkbox } from "antd";
const MovieFormatDetailForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      style={{ marginTop: "3rem" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="name" name="name">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: "-90%", span: 24 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieFormatDetailForm;
