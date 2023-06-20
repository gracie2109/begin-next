import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Switch,
    InputNumber, DatePicker
} from "antd";
import UploadFile from "@/components/common/UploadFile/UploadFile";
import {REG_FOMAT, PARSE_FOMAT} from "@/utils";
import {CkUpload} from "@/components/common";


type Props = {
    form: any,
    onFinish: any,
    onReset: any,
    formMode: any,
    isPublish: any,
    setIsPublish: any
}

const CategoriesForm = ({
                            form,
                            onFinish,
                            onReset,
                            formMode,
                            isPublish,
                            setIsPublish
                        }: Props) => {
    return (
        <div className="w-1/2 mx-auto">
            <Form
                name={formMode}
                key={formMode}
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <Row gutter={[32, 8]}>
                    <Col span={12}>
                        <Form.Item name="avt" label="Ảnh" className="no-style-form"><br/><br/>
                            <UploadFile max={1} isMultiple={true}/>
                        </Form.Item>
                        <Form.Item name="name" label="Tên">
                            <Input placeholder="Nhập vào tên danh mục" allowClear/>
                        </Form.Item>

                        <Form.Item name="isPushlish" label="Trạng thái" style={{width: "100%"}}>
                            <Switch onChange={(e: any) => setIsPublish(e)} checked={isPublish}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: "200px", marginRight: "10px"}}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{width: "100px"}}>
                        Reset
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default CategoriesForm;

