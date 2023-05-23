import {useState, useEffect} from "react";
import {Row, Col, Space, Button} from "antd"
import {SharedIcons} from "@/utils"

const {FaTwitter, FaFacebookF, FaTiktok} = SharedIcons
const SocialLogin = () => {
    return (
        <Row gutter={[8,8]}>
            <Col span={8} xs={24}> <Button style={{width: '100%'}}  icon={<FaTwitter />} ></Button></Col>
            <Col span={8} xs={24}> <Button style={{width: '100%'}} icon={<FaFacebookF />}></Button></Col>
            <Col span={8} xs={24}> <Button style={{width: '100%'}} icon={<FaTiktok />}></Button></Col>
        </Row>
    )
}

export default SocialLogin