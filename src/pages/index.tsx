import React from 'react';
import { MyPage } from "@/models/common";
import { SliderShow } from '@/components/common';
import { SLIDERS } from "@/utils/contants"
import Category from '@/components/features/Category';
import HomeProductRow from '../components/features/HomeProductRow';
import {  Products_data } from "@/utils";
type Props = {}

const Index: MyPage = (props: Props) => {
   return (
      <>
         <SliderShow slideChildren={SLIDERS} type="slider" />
         <div className='m-[3rem]'>
            <Category />
         </div>
          <div className="bg-[#faefec]">
            <HomeProductRow key={1}  data={Products_data}  title={"Sản phẩm khuyến mãi"} showTimer={true} type={"SLIDER"}/>
          </div>
          <HomeProductRow  key={2} data={Products_data} title={"Sản phẩm bán chạy "} showTimer={false} type={"LIST"}/>
      </>
   )
}

export default Index;
Index.Layout = "Main";