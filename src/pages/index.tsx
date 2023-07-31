import dynamic from 'next/dynamic';
import {Products_data, SLIDERS} from '@/utils';
import {LoadingCustom} from "@/components/common";


const SliderShow = dynamic(() => import("@/components/common/SliderShow/SliderShow"),{loading: () => <LoadingCustom />});
const Category = dynamic(() => import("@/components/features/Category"),{loading: () => <div><LoadingCustom /></div>})
const HomeProductRow = dynamic(() => import("@/components/features/HomeProductRow"),{loading: () => <LoadingCustom />});

type Props = {}

const Index = (props: Props) => {
    return (
        <div style={{overflow: "hidden"}}>
            <SliderShow slideChildren={SLIDERS} type="slider"/>
            <div className='mt-[3rem]' >
                <Category/>
            </div>
            <div className="bg-[whitesmoke]">
                <HomeProductRow key={1} data={Products_data} title={"Sản phẩm khuyến mãi"} showTimer={true}
                                type={"SLIDER"}/>
            </div>
            <div>
                <HomeProductRow key={2} data={Products_data} title={"Sản phẩm bán chạy "} showTimer={false}
                                type={"LIST"}/>
            </div>
        </div>
    )
}

export default Index;