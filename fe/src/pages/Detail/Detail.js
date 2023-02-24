import Breadcrumb from '~/components/Breadcrumb';
import Comment from './Comment';
import DetailList from './DetailList';
import MainDetail from './MainDetail';
import RelatedProduct from './RelatedProduct';
import Review from './Review';

function Detail() {
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto my-0 border-b pb-8">
                <Breadcrumb />
                <MainDetail />
            </div>
            <div className="max-w-[1200px] mx-auto my-0 pt-8 pb-8">
                <DetailList />
            </div>

            {/* related products */}
            <RelatedProduct />

            {/* comment section  */}
            <Comment />

            <RelatedProduct />

            <Review />
        </div>
    );
}

export default Detail;
