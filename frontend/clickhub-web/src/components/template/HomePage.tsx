import Footer from "./Footer";
import Header from "./Header";

export default function HomePage(props: any) {
    return (
        <div className="flex flex-col h-screen bg-white ">
            <Header />
            <div className="flex-1 flex bg-white text-white">
                <main className="flex-1">{props.children}</main>
            </div>
            <Footer />
        </div>
    );
}
