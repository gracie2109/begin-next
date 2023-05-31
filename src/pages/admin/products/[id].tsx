import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';
import { Button, Form , message } from "antd";
import { HeaderAction } from '@/components/common';
import { useEffect, useState } from "react";
import { SharedIcons } from "@/utils";
import Link from "next/link";
import ProductForm from "@/pages/admin/products/components/ProductForm";
const { SiThemoviedatabase } = SharedIcons;
const { ArrowLeftOutlined } = SharedIcons;

const ProductDetail: MyPage = () => {
    const [mode, setMode] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const route = useRouter();
    const id = route.query.id;
    const [form] = Form.useForm();
    const [isPublish, setIsPublish]= useState<any>(false);
    const [isPromotion, setIsPromotion]= useState<any>(false);
    const [discountType, setDiscountType] = useState<any>();
    const [discountValue, setDiscountValue] = useState<any>();

    useEffect(() => {
        if (id == "create" || id === undefined) {
            setMode("create");
        }else{
            setMode(`Update: ${id}`);
        }
    }, [id]);


    useEffect(() => {
        if(mode && id && (mode !== "create" && id !== "create")){
            setIsPublish(data.isPushlish);
            setIsPromotion(data.isPromotion);
            setDiscountType(data.discount.type);
            setDiscountValue(data.discount.value)
            form.setFieldsValue({
                ...data
            });
        }
    },[id, mode])



    const onFinish = (values: any) => {
        console.log("values", values);
        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 2.5,
            })
            .then(() => message.success('Loading finished', 2.5))
            // .then(() => route.push('/admin/products'))
    }

    const onReset = () => {
        form.resetFields()
    }

    return (
        <>
            {contextHolder}
            <HeaderAction title={`${mode === "create" ? "Thêm mới" : `${mode}`}`} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/products"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]} />
            <ProductForm
                form={form}
                onFinish={onFinish}
                onReset={onReset}
                formMode={mode}
                isPublish={isPublish}
                setIsPublish={setIsPublish}
                isPromotion={isPromotion}
                setIsPromotion={setIsPromotion}
                discountType ={discountType}
                setDiscountType = {setDiscountType}
                discountValue={discountValue}
                setDiscountValue={setDiscountValue}
            />
        </>
    )
}

export default ProductDetail;
ProductDetail.Layout = "Admin";

export const data =
    {
        name: "qweqweqwe",
        cost: 123000,
        quantity: "123",
        isPushlish: false,
        discount :{type: 1, value: 10},
        short_desc: "123hgrfdcxsz",
        desc: ",kmhngbfvdcsxz",
        isPromotion: true,
        price: 111000
    }
