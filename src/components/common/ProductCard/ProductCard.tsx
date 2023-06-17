import { Row, Col, Typography, Tooltip } from 'antd';
import React from 'react';
import { formatCurrency, formatWord, getPriceAfterSale, SharedIcons } from '@/utils';
import Link from "next/link";
import { useRouter } from 'next/router'
type Props = {
  child?: any
}
const { AiFillThunderbolt } = SharedIcons

const ProductCard = ({ child }: Props) => {
  const router = useRouter()
  return (
    <div className='h-auto mx-auto max-w-[200px]  mb-5 overflow-hidden mr-[10px] bg-white shadow rounded-lg'>
        <div 
            className="max-h-[70%] min-h-[200px] z-1 cursor-pointer"
            style={{ backgroundImage: `url(${child.images?.[0]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
        }}
            onClick={() => router.push(`/product/5`)}
           >
            <div className="p-2" >
              <Row justify="space-between" align="middle">
                  <Col span={8}>
                    {child?.sale_percent && (
                      <div className='bg-red-600 text-white p-1 rounded-full my-auto'>
                        <Row justify="center" align="middle">
                          <Col >
                            <AiFillThunderbolt fill='white' />
                          </Col>
                          <Col>{child?.sale_percent}%</Col>
                        </Row>
                      </div>
                    )}
                    
                  </Col>
                  <Col span={4} >
                    <div className="w-[30px] h-[30px] [&>img:inline-block] [&>img:mb-2]" >
                      <Tooltip title={child?.name}> <img src="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png" alt="" /></Tooltip>
                      <Tooltip title={child?.name}><img src="https://file.hstatic.net/200000592359/file/icon_video_2d253ef605b0407da214e359ac3bdea5.png" width="40px" height="40px" /></Tooltip>
                    </div>
                  </Col>
              </Row>
           </div>
        </div>

      <div className="prd_card_actions h-[20%] min-h-[96px]">
        <Row gutter={[8, 4]} className="p-2 text-left">
          <Col span={24}>
            <Row justify="space-between" className="font-thin text-gray-500" gutter={[0,0]}>
              <Col>
                {child?.colors?.length > 0 && <Typography.Text style={{fontSize: "12px"}}>+ {child?.colors?.length}Màu sắc</Typography.Text>}
              </Col>
              <Col span={12} className="text-end">
                {child?.sizes?.length > 0 && <Typography.Text style={{fontSize: "12px"}}>+ {child?.sizes?.length} Kích thước</Typography.Text>}
              </Col>
            </Row>
          </Col>
          <Col span={24} >
            <Typography.Text strong><Link href={`product/5`} >{formatWord(child.name, "title")}</Link></Typography.Text>
          </Col>
          <Col span={24}>
            <Row justify="start" align={"middle"} gutter={[16, 16]}>
              <Col >
                {child.sale_percent ? (
                  <Typography.Text type="danger" strong>{getPriceAfterSale(Number(child?.price), Number(child?.sale_percent))}</Typography.Text>
                ) : (
                  <Typography.Text strong>{formatCurrency(child.price)}</Typography.Text>
                )}
              </Col>
              <Col>
                {child.sale_percent && <Typography.Text delete>{formatCurrency(child.price)}</Typography.Text>}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductCard