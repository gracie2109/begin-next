import React from 'react';
import { MyPage } from "@/models/common";
import { SliderShow } from '@/components/common';
import { SLIDERS } from "@/utils/contants"
import Category from '@/components/features/Category';
import SaleProduct from '@/components/features/SaleProduct';
type Props = {}

const Index: MyPage = (props: Props) => {
   return (
      <>
         <SliderShow slideChildren={SLIDERS} type="slider" />
         <div className='m-[3rem]'>
            <Category />
         </div>
         <SaleProduct />
      </>
   )
}

export default Index;
Index.Layout = "Main";