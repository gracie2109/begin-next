import React from "react";
import { Layout, Row, Col, Space, Input, Typography, Button } from "antd";
import Link from "next/link";
import { SharedIcons , Footer_IMG_Payment, Footer_IMG_Shipping, Footer_Extenal_Link} from "@/utils";
const { Footer } = Layout;


const { FaFacebookF,FaTwitter ,FaInstagram ,FaTiktok, FaYoutube } = SharedIcons
const FooterClient = () => {
  return (
    <Footer
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" , height: "auto"}}
    >
      <div className="container mx-auto">
        <Row align="stretch" gutter={[64, 16]}>
          <Col span={6}>
            <div className="mb-4">
              <Typography.Title level={4}>Về Mode Fashion</Typography.Title>
            </div>
            <div className="mb-4">
              <Typography.Paragraph>
                Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì
                bạn cần để xây dựng thương hiệu online, thành công trong bán lẻ
                và marketing đột phá.
              </Typography.Paragraph>
            </div>
            <div className="mb-4">
              <Row gutter={[8,8]}>
                <Col><Button icon={<FaFacebookF />}></Button></Col>
                <Col><Button icon={<FaTwitter />}></Button></Col>
                <Col><Button icon={<FaInstagram />}></Button></Col>
                <Col><Button icon={<FaTiktok />}></Button></Col>
                <Col><Button icon={<FaYoutube />}></Button></Col>
              </Row>
            </div>
            
            <div className="mb-4">
              <Typography.Title level={4}>Phương thức thanh toán</Typography.Title>
              <Row gutter={[8,8]}>
                {Footer_IMG_Payment.map((item, index) => (
                  <Col key={index}><img src={item} alt="" /></Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col span={6} >
            <div className="mb-4">
              <Typography.Title level={4}>Thông tin liên hệ</Typography.Title>
            </div>
            <div className="mb-3">
              <Typography.Text strong>Địa chỉ: </Typography.Text>
              Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
            </div>
            <div className="mb-3">
              <Typography.Text strong>Điện thoại: </Typography.Text>
                1900.636.000
            </div>
            <div className="mb-3">
              <Typography.Text strong>Fax: </Typography.Text>
                1900.636.000
            </div>
            <div className="mb-3">
              <Typography.Text strong>Email: </Typography.Text>
                 hi@modefashion.com
            </div>
            <div className="mb-3">
              <Typography.Title level={4}>Phương thức vận chuyển</Typography.Title>
              <Row gutter={[8,8]}>
                {Footer_IMG_Shipping.map((item, index) => (
                  <Col key={index}><img src={item} alt="" /></Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col span={6}>
            <div className="mb-4">
              <Typography.Title level={4}>Nhóm liên kết</Typography.Title>
            </div>
            <div className="m-4">
                  {Footer_Extenal_Link.map((item, index) => (
                    <ul key={index} className="mb-3 list-disc hover:text-gray-400"  >
                      <li><Link href={item.url}>{item.name}</Link></li>
                    </ul>
                  ))}
            </div>
          </Col>
          <Col span={6}>
          <div className="mb-4">
              <Typography.Title level={4}>Đăng ký nhận tin</Typography.Title>
            </div>
            <div className="mb-3">
              <Typography.Text>Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và thông tin giảm giá khác.</Typography.Text>
            </div>
            <div className="mb-3">
            <Space.Compact block>
              <Input style={{ width: 'calc(100%)' }}  placeholder="Nhập email của bạn"/>
              <Button type="primary">Đăng Ký</Button>
            </Space.Compact>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterClient;
