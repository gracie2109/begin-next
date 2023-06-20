import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';
import { Button, Form , message } from "antd";
import { HeaderAction } from '@/components/common';
import { useEffect, useState } from "react";
import { SharedIcons } from "@/utils";
import Link from "next/link";
import ProductForm from "@/pages/admin/products/components/ProductForm";
import SettingForm from '../components/SettingForm';
const { ArrowLeftOutlined } = SharedIcons;

const Settings:MyPage = () => {
    return (
        <>
              <HeaderAction title={`Cài đặt nâng cao`} components={[
                {
                    key: 1,
                    comp: <Link href="/admin/products"> <Button type="dashed" icon={<ArrowLeftOutlined />}>Quay lại</Button></Link>
                },
            ]} />
            <SettingForm />
        </>
    )
}


export default Settings;
Settings.Layout = "Admin";