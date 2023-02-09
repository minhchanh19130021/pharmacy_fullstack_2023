import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Navigation from '~/layouts/components/Navigation';

function DefaultLayout({ children }) {
    return (
        // <div className="wrapper">
        //     <div className="absolute top-0 left-0 w-full">
        //         <Header />
        //     </div>
        //     <div className="absolute top-20 left-0 w-full shadow-md">
        //         <Navigation />
        //     </div>
        //     <div className="content relative left-0 top-32">{children}</div>
        //     <div className="footer absolute bottom-0 left-0">
        //         <Footer />
        //     </div>
        //     {/* button scroll to top  */}
        //     {/* <ScrollToTop /> */}
        //     {/* button scroll to top  */}
        // </div>
        <div className="wrapper flex flex-col h-screen justify-between">
            <div className="h-28">
                <div className="h-20 bg-[#016cc9]">
                    <Header />
                </div>

                <Navigation />
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
