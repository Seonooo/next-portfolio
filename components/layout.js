import Header  from "./header"
import Footer from "./footer"
// 컴포넌트 개념도 적용가능
export default function Layout({ children }){
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}