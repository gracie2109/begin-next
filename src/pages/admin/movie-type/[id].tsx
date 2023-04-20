import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieFormatDetailForm from './_form';
import { Divider, Typography, Row, Col, Button, Collapse, Radio, Space, Card } from 'antd';
import { SharedIcons } from '@/utils';
import type { RadioChangeEvent } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { SiThemoviedatabase, FaChevronDown, AiOutlineSend } = SharedIcons;
const { Panel } = Collapse;

const MovieFormatDetail: MyPage = () => {
    const route = useRouter();
    const id = route.query.id;
    console.log("id", id);

    const [value, setValue] = useState(1);
    const [action, setAction] = useState("");

    useEffect(() => {
        if(id && id === "create") setAction("create")
        else setAction("other")
    },[route])
    
    return (
        <>
            <HeaderAction title={action == "create" ? "Thêm movie format" : `Cập nhật: ${id}`}/>
            <Row justify="space-around" align="top" style={{ height: "100%", minHeight: "100vh" }}>
                <Col span={8} style={{ background: "white-smoke" }}>
                    <Card style={{ height: "auto", minHeight: "500px" }}>
                        <Radio.Group onChange={(e: RadioChangeEvent) => {setValue(e.target.value)}} value={value} defaultValue={1}>
                            <Space direction="vertical">
                                <Radio value={1}>Nhập dữ liệu tay</Radio>
                                <Radio value={2}  disabled={action!== "create" ? true : false}>
                                    <div className="flex items-center justify-start gap-4 cursor-pointer">
                                        <SiThemoviedatabase size={"30px"} />
                                        <Text>Import from TMDB</Text>
                                    </div>
                                </Radio>
                            </Space>
                        </Radio.Group>
                        <Divider type="vertical" />
                    </Card>
                </Col>

                <Col span={15} style={{ background: "#dcdcdc" }}>
                    <Card style={{ height: "auto", minHeight: "500px" }}>
                  
                        {value && value === 1 && (
                            <>
                                <Paragraph>Bạn đã chọn <Text strong>Nhập dữ liệu thủ công</Text></Paragraph>
                                <MovieFormatDetailForm />

                            </>

                        )}
                              {action && value  &&action =="create" && value === 2 && (
                            <>
                                <Paragraph>Bạn đã chọn <Text strong>Nhập dữ liệu từ nguồn TMDB</Text>, vui lòng nhấn <Text strong>Send </Text>để thực hiện</Paragraph>
                                <Button type="primary" icon={<AiOutlineSend />}>Send</Button>

                            </>
                        )}


                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default MovieFormatDetail;
MovieFormatDetail.Layout = "Admin";