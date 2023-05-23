import Head from 'next/head';
import React, {useState} from 'react';
import { Col, Row, Typography } from 'antd';

type Props = {
    title: string,
    components?: any,
}
const { Title } = Typography;

export const HeaderAction = ({ title, components }: Props) => {
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Row align="stretch">
                <Col span={components ? 4 : 24} >
                    <Title level={3}>{title}</Title>
                </Col>

                <Col span={14}>
                    {components && components.map((item:any) => {
                        if(item?.key === "filterSection") {
                            return (
                              <>{item.comp}</>
                            )
                        }}
                     )}
                </Col>
                <Col span={6}>
                    <Row justify="end" align="middle" gutter={[16, 16]}>
                        {components && components.map((item: any, index: any) => {
                            if(item.key !== "filterSection") {
                                return (
                                    <Col key={index}>{item.comp}</Col>
                                )
                            }
                        })}
                    </Row>
                </Col>
            </Row>
        </>
    )
}