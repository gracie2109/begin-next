import {useState, useRef, useId, CSSProperties, useEffect} from "react";
import {Row, Col, Input, Form, Space, Button, Grid} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import useDebounce from "@/hooks/useDebounce";


const SearchHome = () => {
    const [form] = Form.useForm();
    const id = useId();
    const screens = Grid.useBreakpoint();
    const mobileStyle:CSSProperties = {
        width: "100%",
        minWidth: "70vw"
    }
    const pcStyle:CSSProperties = {
        width: "100%",
        minWidth: "50vw"
    }

    const inputRef = useRef<any>(null)
    useEffect(() => inputRef.current.focus());


    async function handleSearch(searchTerm:string) {
            console.log("searchTerm", searchTerm)
    }
    const [debounceSearch, isLoading] = useDebounce(handleSearch, 500);
    console.log("debounceSearch", debounceSearch, isLoading)

    return (
        <div className={`${!screens.xs ? "w-1/2 mx-auto":""}`}>
            <Form form={form}>
                <Space.Compact block>
                    <Form.Item>
                        <Input
                            id={id}
                            placeholder="Nhập tên sản phẩm"
                            allowClear
                            prefix={<SearchOutlined/>}
                            size={"middle"}
                            style={screens.xs ? mobileStyle : pcStyle}
                            type="search"
                            ref={inputRef}
                            onChange={(e) => debounceSearch(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Search</Button>
                    </Form.Item>
                </Space.Compact>
            </Form>
        </div>
    )
}

export default SearchHome