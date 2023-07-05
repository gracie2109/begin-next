import {MyPage} from '@/models/common';
import {HeaderAction} from '@/components/common';
import  { useState, useMemo, useId} from "react";
import {SharedIcons} from "@/utils";
import Link from "next/link";
import {Checkbox, Col, Row, Button, Form, Card, App} from 'antd';
import ProductForm from "../components/ProductForm"
import {data} from "@/pages/admin/products/[id]/index";

const {ArrowLeftOutlined, PlusOutlined} = SharedIcons;

const Settings: MyPage = () => {
    const [paId, setPaId] = useState<any>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const {message, modal, notification} = App.useApp();
    const [form] = Form.useForm();
    const [isPublish, setIsPublish] = useState<any>(false);
    const [isPromotion, setIsPromotion] = useState<any>(false);
    const [discountType, setDiscountType] = useState<any>();
    const [discountValue, setDiscountValue] = useState<any>();

    const parentsAtt = useMemo(() => {
        return AttrData.filter((item) => item.status == true)
    }, []);

    const onFinish = (values: any) => {
        console.log("onFinish", values)
    }

    const handleModal = (attribute: any) => {
        const resetData = () => {
            form.setFieldsValue({...data});
        }
        modal.info({
            title: (
                <Row gutter={[8, 8]} align='middle' justify="space-between">
                    <Col>Thêm sản phẩm {attribute?.name}</Col>
                    {attribute?.children?.length > 0 ?
                        <Col><Button onClick={resetData}>Lấy giống dữ liệu origin</Button></Col> : null}
                </Row>
            ),
            width: "90vw",
            okText: "Thoát",
            bodyStyle: {padding: '0 0 10 0', height: "90vh", overflowY: "scroll"},
            content: (
                <ProductForm
                    form={form}
                    onFinish={onFinish}
                    isPublish={isPublish}
                    setIsPublish={setIsPublish}
                    isPromotion={isPromotion}
                    setIsPromotion={setIsPromotion}
                    discountType={discountType}
                    setDiscountType={setDiscountType}
                    discountValue={discountValue}
                    setDiscountValue={setDiscountValue}
                    formMode={"settings"}
                    attributesData={attribute}
                />
            ),
            onCancel: (() => setOpenModal(!openModal))
        })
    }

    return (
        <>
            <HeaderAction title={`Cài đặt biến thể`} components={[{
                key: 1,
                comp: <Link href="/admin/products"> <Button type="dashed" icon={<ArrowLeftOutlined/>}>Quay lại</Button></Link>
            }]}/>
            <Checkbox.Group style={{width: '100%'}} onChange={(checkedValues) => setPaId(checkedValues)}>
                <Row>
                    {parentsAtt && parentsAtt?.map((item, index) => (
                        <Col span={4} key={useId()}>
                            <Checkbox value={item}>{item?.name}</Checkbox>
                        </Col>
                    ))}
                </Row>
            </Checkbox.Group>
            {paId && paId.map((item: any, index: any) => (
                <Card style={{marginTop: "1rem", marginBottom: "10px"}} key={index}>
                    <Row gutter={[4, 8]}>
                        <Col span={12}>{item?.name}</Col>
                        <Col>
                            <Button type={"dashed"} icon={<PlusOutlined/>} onClick={() => handleModal(item)}>
                                Thêm sản phẩm
                            </Button>
                        </Col>
                    </Row>
                </Card>
            ))}
        </>
    )
}


export default Settings;
Settings.Layout = "Admin";

export const AttrData = [
    {
        _id: "1",
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
                _id: "1.1",
                children: [],
            },
            {
                name: "den",
                desc: "den",
                status: true,
                isParent: true,
                value: "den",
                _id: "1.2",
                children: [],
            },
        ],
    },
    {
        name: "kich thuoc",
        desc: "kich thuoc",
        status: true,
        isParent: true,
        value: "kich-thuoc",
        children: [],
        _id: "2",
    },
];