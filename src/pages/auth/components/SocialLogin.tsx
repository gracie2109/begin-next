import {Row, Col, Button} from "antd";
import {SharedIcons} from "@/utils";
import {FcGoogle} from "react-icons/fc";

const {BsFacebook} = SharedIcons;
const SocialLogin = () => {
    return (
        <Row gutter={[8, 8]}>
            <Col md={12} xs={24}>
                <Button
                    style={{width: '100%', display: "flex", justifyContent: "center"}}
                    icon={<FcGoogle size={20}/>}
                    type="default"
                >Google
                </Button>
            </Col>
            <Col md={12} xs={24}>
                <Button
                    style={{width: '100%', display: "flex", justifyContent: "center"}}
                    icon={<BsFacebook size={20} fill="#1677ff"/>}
                >Facebook
                </Button>
            </Col>
        </Row>
    )
}

export default SocialLogin