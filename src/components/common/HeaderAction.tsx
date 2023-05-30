import Head from 'next/head';
import React from 'react';
import {Col, Row, Typography} from 'antd';

type Props = {
    title: string,
    components?: any,
    children?: React.ReactNode | JSX.Element | undefined
}
const { Title } = Typography;

export const HeaderAction = ({ title, components, children}: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Row align="stretch">
                <Col span={components ? 5 : 24} >
                    <Title level={3}>{title}</Title>
                </Col>
                <Col span={13}>
                    {children}
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