import React, {forwardRef} from 'react'
import { useCountdown } from '@/hooks/useCountDown';


const CountDown = forwardRef(function CountDown({targetDate}:any, ref) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        // @ts-ignore
        <div  ref={ref} className="timer flex gap-3  text-white justify-center items-center [&>div]:bg-red-600  [&>div]:min-w-[47px] [&>div]:h-[39px] [&>div]:rounded-lg [&>div]:text-center ">
            <div className="day">
                <div className="text-base font-semibold">{days}</div>
                <div className="text-[8px]">Ngày</div>
            </div>
            <div className="hours">
                <div className="text-base font-semibold">{hours}</div>
                <div className="text-[8px]">Giờ</div>
            </div>
            <div className="minus">
                <div className="text-base font-semibold">{minutes}</div>
                <div className="text-[8px]">Phút</div>
            </div>
            <div className="second">
                <div className="text-base font-semibold">{seconds}</div>
                <div className="text-[8px]">Giây</div>
            </div>
        </div>


    );
});

export default CountDown;