import { Form, Input, Button } from "antd";
const MovieFormatDetailForm = () => {
  const onFinish = (values: any) => {
    alert(`values:${values}`)
  };

  const onFinishFailed = (errorInfo: any) => {
    alert(`errorInfo:${errorInfo}`)
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
