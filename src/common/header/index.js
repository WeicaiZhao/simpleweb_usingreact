import React, {Component} from 'react';
import  { HeaderWrapper, Logo } from './style'
import {PageHeader} from "antd";

class Header  extends Component{
    render() {
        return(
                <HeaderWrapper>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => null}
                        title="Data Management"
                        subTitle="Input or Delete Data Below (Click the Data in the List to Delete)"
                    />
                </HeaderWrapper>
            )


    }

}

export default Header;