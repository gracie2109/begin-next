import {useState, useEffect} from "react";
import {MyPage} from "@/models/common";
import {useRouter} from "next/router";
import AuthForm from "@/pages/auth/components/AuthForm";
import { Form, message } from "antd";

type AuthMode = "login" | "register" | null

const AuthPage:MyPage = () => {
    const route = useRouter();
    const [mode,setMode] = useState<AuthMode>("login");
    const path = route.asPath.split('/');
    const [form] = Form.useForm();
    const [isLoading, setIsLoading]  = useState<boolean>(false)
    useEffect(() => {
        const tmp = path.at(-1);
        if(tmp === "login"){
            setMode("login");
        }else if(tmp === "register"){
            setMode("register");
        }else{
            setMode(null)
        }

    },[path]);

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            {mode ? (
                <AuthForm
                    form={form }
                    onFinish={onFinish}
                    isLogin={mode === "login" ? true : false}
                    title={mode === "login" ? "Đăng Nhập" : "Đăng Ký"}
                    isLoading={isLoading}
                />
            ):(
                <>Không tìm thấy trang</>
            )}
        </>
    )
}
export  default AuthPage;
AuthPage.Layout = "Auth"
