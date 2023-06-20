import { FALL_BACK_IMG } from '@/utils';
import { Image } from 'antd';
import { useEffect, useState } from 'react';
type Props = {
    source: any,
    width?:any,
    preview?:boolean
}

export const RenderImage = ({ source , width,preview}: Props) => {
    const [path, setPath] = useState<any>(FALL_BACK_IMG);

    useEffect(() => {
        if (source) {
            const url = source?.[0]?.url || source?.[0];
            url && setPath(url)
        }
    }, [source])
    return (
        <Image
            width={width ?? "50px"}
            src={path ?? "error"}
            preview={preview}
        />
    )
}

