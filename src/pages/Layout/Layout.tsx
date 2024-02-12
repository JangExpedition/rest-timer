import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../../components/Header/Header.tsx"
import Wrapper from "./Wrapper.tsx"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store.ts"

const Layout = () => {

    const backgroundColor = useSelector((state: RootState)=>state.backgroundColor?.color)

    console.log(backgroundColor);

    return(
        <div style={{backgroundColor}}>
            <Header></Header>
            <Wrapper className="main">
                <Outlet/>
            </Wrapper>
        </div>
    )
}

export default Layout;