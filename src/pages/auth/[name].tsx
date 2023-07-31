import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import AuthForm from "@/pages/auth/components/AuthForm";
import { Form, Result,Button ,Card } from "antd";
import Link from 'next/link';

type AuthMode = "login" | "register" | undefined;

const AuthPage = () => {
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
        }else {
            setMode(undefined);
            route.push("/auth/login")
        }
    },[path]);

    const onFinish = (values: any) => {
        console.log("values", values)
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
                    mode={mode}

                />
            ):(
                <Card bodyStyle={{padding: "10px 20px"}}>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button type="primary" >
                            <Link href="/">Back Home</Link>
                        </Button>}
                    />
                </Card>
            )}
        </>
    )
}
export  default AuthPage;
