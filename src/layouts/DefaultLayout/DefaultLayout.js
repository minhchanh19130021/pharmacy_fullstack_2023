import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            {/* <div className="header absolute top-0 left-0 h-20 max-w-full bg-[#072d94]">
                <Header />
            </div> */}
            <div className="">{children}</div>
            <div className="">
                <Footer />
            </div>
            {/* button scroll to top  */}
            {/* <ScrollToTop /> */}
            {/* button scroll to top  */}
        </div>
    );
}

export default DefaultLayout;
