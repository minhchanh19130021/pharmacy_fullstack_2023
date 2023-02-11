import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Navigation from '~/layouts/components/Navigation';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="h-[84px] bg-[#016cc9]">
                    <Header />
                </div>

                <div className="navigation">
                    <Navigation />
                </div>
            </div>
            <div className="mb-auto h-full ">{children}</div>
            <div className="h-full mt-10 ">
                <Footer />
            </div>
            {/* button scroll to top  */}
            {/* <ScrollToTop /> */}
            {/* button scroll to top  */}
        </div>
    );
}

export default DefaultLayout;
