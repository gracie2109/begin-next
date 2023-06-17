import { useState, useEffect, useMemo, useCallback } from "react";
import {  Row, Col, Form, Select,Input  } from "antd"
import { apiGetProvinces, apiGetDistrict, apiGetWard } from "@/features/providers/actions";
import {formatWord} from "@/utils"
type Props = {
    setAddress:any
}

const Providers = ({setAddress}: Props) => {
    const [provinces, setProvinces] = useState<any>([]);
    const [province, setProvince] = useState<any>(undefined);
    
    const [districts, setDistricts] = useState<any>([]);
    const [district, setDistrict] = useState<any>(undefined);

    const [wards, setWards] = useState<any>([]);
    const [ward, setWard] = useState<any>(undefined);

    const [desc, setDesc] = useState<any>("");

    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response: any = await apiGetProvinces();
            if (response.status === 200) {
                setProvinces(response?.data.results)
            }
        }
        fetchPublicProvince();
    }, [])

    useEffect(() => {
        if (province && province !== undefined) {
            ((
                async () => {
                    const response = await apiGetDistrict(province?.value) as any;
                    if (response.status === 200) {
                        setDistricts(response?.data.results);
                    }else{
                        setDistricts([]);
                    }
                }
            ))()
        }
    }, [province])

    useEffect(() => {
        if (district && district !== undefined) {
            ((
                async () => {
                    const response = await apiGetWard(district?.value) as any;
                    if (response.status === 200) {
                        setWards(response?.data.results);
                    }else{
                        setWards([]);
                    }
                }
            ))()
        }
    }, [district])

    useEffect(() => {
        setAddress({
            province,
            district,
            ward,
            desc
        })
       
    },[province, district, ward,desc]);

    return (
        <Row gutter={[8,8]}>
            <Col xs={24} md={24}>
                <Form.Item
                    name={['addressId', 'province']}
                    noStyle
                >
                    <Select
                        placeholder="Chọn tỉnh/thành phố"
                        onChange={(_, value) => {setProvince(value)}}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input:any, option:any) => (option?.children ?? '').includes(input) }
                        filterSort={(optionA, optionB) =>
                            (optionA?.children ?? '').toLowerCase().localeCompare((optionB?.province_name ?? '').toLowerCase())
                        }
                    >
                        {provinces && provinces?.map((item: any, index: any) => (
                            <Select.Option value={item?.province_id} key={item?.province_id}>{item?.province_name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item
                    name={['addressId', 'district']}
                    noStyle
                >
                    <Select
                        showSearch
                        optionFilterProp="children2"
                        filterOption={(input:any, option:any) => (option?.children ?? '').includes(input) }
                        filterSort={(optionA, optionB) =>
                            (optionA?.children ?? '')?.toLowerCase().localeCompare((optionB?.children ?? '')?.toLowerCase())
                        }
                        placeholder="Chọn quận/huyện"
                        onChange={(_, value) => setDistrict(value)}>
                        {districts && districts !== undefined &&  districts?.map((item:any) => (
                            <Select.Option value={item?.district_id} key={item?.district_id}>{item.district_name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item
                    name={['addressId', 'ward']}
                    noStyle
                >
                    <Select
                        placeholder="Chọn phường/xã"
                        onChange={(_, value) => setWard(value)}
                        showSearch
                        optionFilterProp="children3"
                         filterOption={(input:any, option:any) => (option?.children ?? '').includes(input) }
                        filterSort={(optionA, optionB) =>
                            (optionA?.children ?? '').toLowerCase().localeCompare((optionB?.children ?? '').toLowerCase())
                        }
                    >
                        {wards && wards !== undefined &&  wards?.map((item:any) => (
                            <Select.Option value={item?.ward_id} key={item?.ward_id}>{item.ward_name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={24}>
               <Form.Item 
                noStyle
               >
                    <Input.TextArea
                        maxLength={100}
                        style={{ height: 40, resize: 'none' }}
                        placeholder="Địa chỉ chi tiết"
                         onChange={(e => setDesc(e.target.value))}
                    />
               </Form.Item>
            
            </Col>
        </Row>
    )
}

export default Providers