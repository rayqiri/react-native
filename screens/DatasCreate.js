import React, {Component} from 'react'
import {Toast,Root,Container,Content, Text, Form, Item, Label, Input, Button,Textarea} from 'native-base'
import { Font,AppLoading } from "expo"
import {Alert} from 'react-native'
import Axios from 'axios';
import { API_URL } from '../constants';
import {fetcAll} from '../actions'
import {connect} from 'react-redux'
 class DatasCreate extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            loading: true,
           // showToast: false,
            name : "",
            department: "",
            age: "",
            bio: ""
         }
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
       this.setState({ loading: false })
    }
    handleSubmit(){
        const {goBack} = this.props.navigation
        const data ={
            name : this.state.name,
            department : this.state.department,
            age : this.state.age,
            bio : this.state.bio
        }
        if (data.name == "" || data.department == "" || data.age == "" || data.bio == ""){
           alert('Semua Form Harus Diisi')
       }else{
        Axios.post(`${API_URL}/siswa`, data).then((response)=>{
            Axios.get(`${API_URL}/siswa`).then((result) => {
                this.props.dispatch(fetcAll(result.data))
            })
        Alert.alert(response.data)
        goBack()
        }).catch((error)=>{
            alert('Gagal disimpan')
        })
    
       
    }
    }
    render(){
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            )
        }
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Nama Lengkap</Label>
                            <Input onChangeText={(text) => this.setState({ name:text })}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Department</Label>
                            <Input onChangeText={(text) => this.setState({ department:text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Age</Label>
                            <Input onChangeText={(text) => this.setState({ age:text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Bio</Label>
                            <Input onChangeText={(text) => this.setState({ bio:text })}/>
                        </Item>
                        <Button full primary onPress={()=> this.handleSubmit()}>
                        <Text>Simpan</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps)(DatasCreate)