
import React, {Fragment, Component} from 'react';
import Header from "./common/header/index";
import GlobalStyle from "./style";
import 'antd/dist/antd.css';
import { Input, Button, List, PageHeader  } from 'antd';
import OperateItem from "./OperateItem";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }


    render() {
        return(
            <div>
                <Fragment>
                    <GlobalStyle/>
                    <Header/>
                    <div>
                        <Input
                            placeholder='Input Data Here.'
                            style={{height:56, width: 300, marginTop:10, marginLeft:10, marginRight:10}}
                            className = 'insertArea'
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                        <Button type = "primary" onClick={this.handleBtnClick} style ={{height:40}}>Submit</Button>
                    </div>
                    <div>
                        <List
                            style = {{marginTop:10, marginLeft:10,  width: 300}}
                            bordered
                            dataSource = {this.state.list}
                            renderItem = {(item,index) =>(<List.Item onClick = {this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}

                        />
                    </div>
                </Fragment>
            </div>
        )
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() =>({
            inputValue: value
        }))
    }

    handleBtnClick(){
        this.setState((prevState) =>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index){
        this.setState((prevState) =>{
            const list = [...prevState.list];
            list.splice(index,1);
            return{list}
        })

    }
}

export default App;

