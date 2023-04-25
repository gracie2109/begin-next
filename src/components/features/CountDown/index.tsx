import React from 'react'
import { useCountdown } from '@/hooks/useCountDown';

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="timer flex gap-3  text-white justify-center items-center [&>div]:bg-red-600  [&>div]:min-w-[47px] [&>div]:h-[39px] [&>div]:rounded-lg [&>div]:text-center ">
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
};

const CountDown = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <ShowCounter
        days={0}
        hours={0}
        minutes={0}
        seconds={0}
      />);
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

export default CountDown
