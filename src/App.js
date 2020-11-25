
import React, {Fragment, Component} from 'react';
import Header from "./common/header/index";
import GlobalStyle from "./style";

class App extends Component{
    render() {
        return(
            <div>
                <Fragment>
                    <GlobalStyle/>
                    <Header/>
                </Fragment>
            </div>
        )
    }
}

export default App;

