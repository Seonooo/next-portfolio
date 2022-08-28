import Header  from "./header"
import Footer from "./footer"
// 컴포넌트 개념도 적용가능
export default function Layout({ children }){
    return (
        <>
            <Header/>
            <h1>레이아웃</h1>
            <div>{children}</div>
            <Footer/>
        </>
    )
}