import Head from 'next/head';
import React from 'react';
import {Col, Row, Typography, Grid} from 'antd';
import styled from "styled-components";


type Props = {
    title: string,
    components?: any,
    children?: React.ReactNode | JSX.Element | undefined
}
const { Title } = Typography;

export const HeaderAction = ({ title, components, children}: Props) => {
    const screens = Grid.useBreakpoint();
    return (
        <HeaderActionApp>
            <Head>
                <title>{title}</title>
            </Head>
            <Row align="stretch">
                <Col xs={24}   >
                    {screens && screens.xs ? (
                        <Typography.Title>{title}</Typography.Title>
                    ):(
                        <Title level={3}>{title}</Title>
                    )}

                </Col>
                <Col md={13} xs={24}>
                    {children}
                </Col>
                <Col md={6} xs={24}>
                    <Row justify="end" align="middle" gutter={[16, 16]}>
                        {components && components.map((item: any, index: any) => {
                            if(item.key !== "filterSection") {
                                return (
                                    <Col key={index} md={12} xs={12}>{item.comp}</Col>
                                )
                            }
                        })}
                    </Row>
                </Col>
            </Row>
        </HeaderActionApp>
    )
};

const HeaderActionApp = styled.div`





`