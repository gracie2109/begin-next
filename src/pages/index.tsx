import React from 'react';
import dynamic from 'next/dynamic';
import { MyPage } from "@/models/common";
import { SLIDERS } from "@/utils/contants";
const SliderShow = dynamic(() => import("@/components/common/SliderShow/SliderShow"));
const Category = dynamic(() => import("@/components/features/Category"),{ssr: false})
const HomeProductRow = dynamic(() => import("@/components/features/HomeProductRow"), {ssr: false});
import {  Products_data } from "@/utils";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {}

const Index: MyPage = (props: Props) => {
   const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin color='#FF0000'/>;

   if (!(SLIDERS || Products_data)) {
      return (
        <div className="h-screen flex items-center justify-center bg-black w-screen">
          <Spin indicator={antIcon} />
        </div>
      );
    }
    
   return (
      <div style={{overflow: "hidden"}}>
         <SliderShow slideChildren={SLIDERS} type="slider" />
         <div className='mt-[3rem]'>
            <Category />
         </div>
          <div className="bg-[whitesmoke]">
            <HomeProductRow key={1}  data={Products_data}  title={"Sản phẩm khuyến mãi"} showTimer={true} type={"SLIDER"}/>
          </div>
          <HomeProductRow  key={2} data={Products_data} title={"Sản phẩm bán chạy "} showTimer={false} type={"LIST"}/>
      </div>
   )
}

export default Index;
Index.Layout = "Main";