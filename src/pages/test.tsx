import {useState, useEffect, useLayoutEffect} from "react";
import {Row, Col} from "antd";


const Test  = () => {
    const [listClick, setListClick] = useState<any>([]);
    const [borderStyle,setBorderStyle] = useState<any>("");


    const hanldeClick = ({value}:any) => {
            const mapList = listClick.find((item:any) => item.value === value);
            if(!mapList) {
                setListClick([...listClick,{ value }])
            }else{
                const a  = listClick.filter((item:any) => item.value !== value);
                setListClick(a)
            }
    }

    useEffect(() => {
        console.log("running in uselayouteffect")
       // if(listClick) {
       //     colors.map((item, index) => {
       //         if(listClick.includes(item)) {
       //             console.log("item", item);
       //
       //         }
       //     })
       // }
    },[listClick]);
console.log("listClick", listClick)
    return (
        <Row gutter={[8,8]}>
            {listClick.map((item:any, index:any) => (
                <p key={index}>{item.value.value}</p>
            ))}
            <br />
            {colors?.map((item, index) => (
                   <Col key={index}>
                       <div
                           style={{
                               position: "relative",
                               top: 0,
                               bottom: 0,
                               left: 30,
                               width : "50px",
                               height: "50px",
                               borderRadius: "50%",
                               cursor: "pointer"
                           }}
                           className={borderStyle}
                           onClick={() => hanldeClick(item)}
                       >
                           <button
                               onClick={() => hanldeClick(item)}
                               value={item.value}
                               style={{
                                   backgroundColor: item.value,
                                   width: "40px",
                                   height: "40px",
                                   borderRadius: "50%",
                                   border: "none",
                                   outline: "none",
                                   position: "absolute",
                                   top: "5px",
                                   left: "5px",
                                   cursor: "pointer"
                               }}
                           >
                           </button>
                       </div>

                   </Col>
            ))}

        </Row>
    )
}
export default Test;


export const colors = [
    {value: "rgb(255, 64, 0)" },
    {value: "rgb(255, 128, 0)" },
    {value: "rgb(64, 255, 0)" },
    {value: "rgb(0, 0, 255)" },

]