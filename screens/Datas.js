import React, { Component } from 'react'
import {Root, Icon, Fab, Container, Content, List, Form } from 'native-base'
import { FlatList } from 'react-native'
import DataItem from '../components/DataItem'
import { Font, AppLoading } from "expo"
import {connect} from 'react-redux'
import axios from 'axios';
import { API_URL } from '../constants'
import {fetcAll} from '../actions'
// import Body from './components/Body'
 class Datas extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            loading: true,
            datas : []
        }
    }
    componentDidMount() {
        const self = this
        axios.get(`${API_URL}/siswa`).then((response)=>{
            this.props.dispatch(fetcAll(response.data)) 
        })
            
    //     this.props.dispatch({
    //         type:"FETCH_ALL",
    //         payload: Axios.get(`${API_URL}/siswa`).then((response) => {
    //             self.setState({
    //                 datas: response.data
    //             })
    //     })
    // })
}
    


    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false })
    }
    
    _keyExtractor = (item, index) => item.code.toString()
    handleIncData() {
        this.setState({
            count: 3
        })
    }
    // renderRow(data){
    //     return (
    //         <ListItem key={data.id}>
    //             <Left><CheckBox checked={true} /></Left>
    //             <Body><Text>{data.id}. {data.nama}</Text></Body>
    //             <Right />
    //         </ListItem>
    //     )
    // }
    render() {
        console.log(this.props.siswaReducer.datas)
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            )
        }
        return (
            <Container>
                <Content>
                    <List>
                        <FlatList
                            data={this.props.siswaReducer.datas}
                            keyExtractor={this._keyExtractor}
                            renderItem={({ item }) => <DataItem data={item} key={item.index} />}
                        />
                        {/* {this.datas.map((data)=> <DataItem data={data} key={data.id}/>)} */}


                    </List>
                </Content>
                <Fab



                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('DatasCreate')}>
                    <Icon name="add" />

                </Fab>
            </Container>
        )
    }
}
const mapStateToProps = (state)=>({
siswaReducer : state.siswaReducer
})
export default connect(mapStateToProps)(Datas)