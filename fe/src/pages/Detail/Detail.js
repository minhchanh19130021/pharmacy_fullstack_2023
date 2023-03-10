import { Animation } from 'react-animate-style';
import Breadcrumb from '~/components/Breadcrumb';
import Comment from './Comment';
import DetailList from './DetailList';
import MainDetail from './MainDetail';
import RelatedProduct from './RelatedProduct';
import Review from './Review';

function Detail() {
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto my-0 border-b pb-8 padding-responsive">
                <Breadcrumb />
                <MainDetail />
            </div>
            <div className="max-w-[1200px] mx-auto my-0 pt-8 pb-8 padding-responsive">
                <DetailList />
            </div>

            {/* related products */}
            <Animation animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration="1000" isVisible="true">
                <RelatedProduct />
            </Animation>

            {/* comment section  */}
            <div className="padding-responsive bg-[#edf2f8]">
                <Comment />
            </div>

            <RelatedProduct />

            <div className="padding-responsive bg-[#edf2f8]">
                <Review />
            </div>
        </div>
    );
}

export default Detail;
