import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../../components/Header/Header"
import Wrapper from "./Wrapper"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Footer from "../../components/Footer/Footer"

const Layout = () => {

    const backgroundColor = useSelector((state: RootState)=>state.color?.backgroundColor)
    const color = useSelector((state: RootState)=>state.color?.color)

    return(
        <div style={{backgroundColor, color}}>
            <Header></Header>
            <Wrapper className="main">
                <Outlet/>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Layout;