import { MyPage } from '@/models/common';
import { useRouter } from 'next/router';

const MovieDetail: MyPage = () => {
    const route = useRouter();
    const id = route.query.id;
    return (
        <>
            chung 1 page
            This Movie Page {id}
        </>
    )
}

export default MovieDetail;
MovieDetail.Layout = "Admin";