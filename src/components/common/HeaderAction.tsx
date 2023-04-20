import Head from 'next/head';
import React from 'react';
import { Col, Row, Typography } from 'antd';

type Props = {
    title: string,
    components?: any
}
const { Title } = Typography;

export const HeaderAction = ({ title, components }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Row>
                <Col span={18} push={6}>
                    <Row justify="end" align="middle" gutter={[16, 16]}>
                        <Col>
                           <></>
                        </Col>
                        {components && components.map((item: any, index: any) => (
                            <Col key={index}>{item.comp}</Col>
                        ))}

                    </Row>

                </Col>

                <Col span={6} pull={18}>
                    <Title level={3}>{title}</Title>
                </Col>
            </Row>
        </>
    )
}