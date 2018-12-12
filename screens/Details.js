import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Axios from 'axios';
import { connect } from 'react-redux'

import {API_URL} from '../constants'
import { fetcAll } from '../actions'


class Details extends Component {


componentDidMount() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId')
    Axios.get(`${API_URL}/siswa/1`).then((response) => {
        this.props.dispatch(fetcAll(response.data))
    })

}
    

    render() {
        const { data} = this.props.siswaReducer.datas
        return (
            <Container>
                <Header />
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://img.icons8.com/ios/1600/react-native-filled.png' }} />
                                <Body>
                                    <Text>Rayqiri</Text>
                                    <Text note>IT</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'https://cdn-images-1.medium.com/max/1000/1*HadCLRpPf4z_T7TKG5ZdBQ.png' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                afaefaf afafafa afafafaf
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>5</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    siswaReducer: state.siswaReducer
})
export default connect(mapStateToProps)(Details)