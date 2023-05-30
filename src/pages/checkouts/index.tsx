import {useState, useEffect} from "react";
import { Row, Col, Typography, Space, Card, Divider, Button,Input, Form,Breadcrumb, Grid } from "antd";
import {Products_data, formatCurrency, SharedIcons} from "@/utils";
import Link from "next/link";
import 'swiper/swiper-bundle.css'
import OrderFinal from "./components/OrderFinal"
import OrderInfoForm from "@/pages/checkouts/components/OrderInfoForm";
const {  FaRegCheckCircle, AiFillCheckCircle } = SharedIcons;


const Checkouts = () => {
    const [form] = Form.useForm();
    const [cloneList, setCloneList] = useState([...Products_data]);
    const [money, setMoney] = useState(0);
    const [orderAddress,setOrderAddress]= useState<any>();
    const [openCollapse, setOpenCollapse]= useState(false)
    const screens = Grid.useBreakpoint();

    useEffect(() => {
        const money = cloneList.reduce((acc, curr) => acc + curr.price, 0);
        setMoney(money);
    }, [cloneList]);

    const handleForm = (values:any) => {
        console.log("handleForm", values)
        console.log("orderAddress", orderAddress)
    }

    const items = [
        { title: 'Giỏ hàng', href: '/cart'},
        { title: 'Thông tin giao hàng' },
        { title: 'Phương thức thanh toán' },
    ];

    return (
       <div style={{height: "auto", minHeight: "100vh"}}>
           <Card>
               <Row >
                   <Col md={12} xs={24}>
                       <div className="mb-5">
                           <Typography.Title level={4}>
                               <Link href="/" style={{color: "#000"}}>MODE FASHION</Link>
                           </Typography.Title>
                           <Breadcrumb separator=">"  items={items}  className="my-3"/>
                           <Typography.Title level={5} type="secondary">
                               Thông tin giao hàng
                           </Typography.Title>
                       </div>

                       <div>
                           <Row gutter={[0, 8]}>
                               <Col span={24}>
                                   <Typography.Text>  Bạn đã có tài khoản?  <Link href="/auth/login">Đăng nhập</Link> </Typography.Text>
                               </Col>
                               <Col span={22}>
                                   <OrderInfoForm form={form} onFinish={handleForm} setOrderAddress={setOrderAddress}/>
                               </Col>
                           </Row>
                       </div>
                   </Col>
                   <Col md={12} xs={24}>
                           <>
                               {!screens.xs ? (
                                   <OrderFinal />
                               ):(
                                   <div className="mt-3">
                                       <Row justify="start">
                                           <Col>
                                               {!openCollapse ? (
                                                   <FaRegCheckCircle size={20} onClick={() => setOpenCollapse(!openCollapse)} className="cursor-pointer" />
                                               ) : (
                                                   <AiFillCheckCircle size={20} onClick={() => setOpenCollapse(!openCollapse)} className="cursor-pointer" />
                                               )}
                                           </Col>
                                           <Col> <Typography.Text  onClick={() => setOpenCollapse(!openCollapse)} className="cursor-pointer">
                                               {!openCollapse ? "Xem" : "Thu nhỏ"} đơn hàng
                                           </Typography.Text></Col>
                                       </Row>
                                       {openCollapse && (
                                           <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="mt-3">
                                               <OrderFinal />
                                           </div>
                                       )}

                                   </div>

                               )}
                           </>
                       <Divider />
                       <Space.Compact block size="large">
                           <Input style={{ width: 'calc(100% - 20px)'}}/>
                           <Button type="primary" >Sử dụng</Button>
                       </Space.Compact>
                       <Divider />

                       <Row justify="space-between">
                           <Col span={12}><Typography.Text>Tạm tính: </Typography.Text></Col>
                           <Col span={12} style={{textAlign: "end"}}> <Typography.Text>{formatCurrency(money)}</Typography.Text></Col>
                           <Col span={12}><Typography.Text>Phí vận chuyển: </Typography.Text></Col>
                           <Col span={12} style={{textAlign: "end"}}><Typography.Text>_</Typography.Text></Col>
                       </Row>
                       <Divider />
                       <Row justify="space-between">
                           <Col span={12}><Typography.Text>Tổng cộng: </Typography.Text></Col>
                           <Col > <Typography.Title level={3}>{formatCurrency(money)}</Typography.Title></Col>
                       </Row>

                   </Col>
               </Row>
           </Card>
       </div>
    )
}

export default Checkouts;