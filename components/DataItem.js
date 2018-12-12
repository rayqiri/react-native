import React,{Component} from 'react'
import {View, Icon, SwipeRow,Button,Thumbnail,List, ListItem, Left, Right,Body,CheckBox,Text} from 'native-base'
import { StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {connect} from 'react-redux'
import Swipeable from 'react-native-swipeable'
import { API_URL } from '../constants'
import {fetcAll} from '../actions'
class DataItem extends Component{
    constructor(props) {
        super(props)
        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            isDone : false
        }
    }
    componentDidMount(){
        const {data : {isdone}} = this.props

        this.setState({isDone : Boolean(isdone)})
    }
    handleCheck(id){
        this.setState({
            isDone : !this.state.isDone

        })
        const self = this
        Axios.patch(`${API_URL}/isdone/${id}`,{isdone : !this.state.isDone})
    }
    swipeable = null;

    handleDelete(id) {
        Axios.delete(`${API_URL}/siswa/${id}`).then((response)=>{
            Axios.get(`${API_URL}/siswa`).then((result) => {
                this.props.dispatch(fetcAll(result.data))
            })
            alert(response.data);
        })
    }
    buttonPress(){
        this.props.navigation.navigate('Details', {
            itemId: code
        })
    }
    render(){
        //const { navigation } = this.props.navigation
        const { data : {name,code,department,age} } = this.props
        const rightButtons = [

            <Button style={[styles.rightSwipeItem]} danger onPress={() => this.handleDelete(code)}>
                <Icon active name="trash" />
            </Button>
        ];
        return (
            <Swipeable rightButtons={rightButtons} rightActionActivationDistance={100} rightButtonWidth={75}>
            <ListItem thumbnail 
            key={code}
            >
                <CheckBox checked={this.state.isDone} onPress={() => this.handleCheck(code)} />


                <Left>

                    <Thumbnail square source={{ uri: 'https://img.icons8.com/ios/1600/react-native-filled.png' }} />
                </Left>

                
                    <Body>
                        <Text>{name}</Text>
                        <Text note numberOfLines={1}>{department}</Text>
                        <Text note numberOfLines={2}>{age}</Text>
                    </Body>
               

                <Right>
                        <Button onPress={ 
                        this.buttonPress
                        }>
                        <Icon active name="eye" />
                    </Button>
                </Right>
                </ListItem>
                </Swipeable>
            // <SwipeRow
            //     rightOpenValue={-75}
            //     body={
            //         <ListItem thumbnail key={code}>
                  
            //         <CheckBox checked={this.state.isDone} onPress={() => this.handleCheck(code)} />
                    
                    
            //         <Left>

            //             <Thumbnail square source={{ uri: 'https://img.icons8.com/ios/1600/react-native-filled.png' }} />
            //         </Left>
                   
            //         <View>
            //         <Body>
            //             <Text>{name}</Text>
            //             <Text note numberOfLines={1}>{department}</Text>
            //             <Text note numberOfLines={2}>{age}</Text>
            //         </Body>
            //         </View>
                    
            //         <Right>
            //             <Button transparent>
            //                 <Text>View</Text>
            //             </Button>
            //         </Right>
                   
            //         </ListItem>
            //     }
            //     right={
            //         <Button danger onPress={() => alert('Trash')}>
            //             <Icon active name="trash" />
            //         </Button>
            //     }
            // />
          
            // <ListItem key={code}>
            //     <Left><CheckBox checked={true} /></Left>
            //     <Body><Text>{code}. {name}</Text></Body>
            //     <Right />
            // </ListItem>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    },

});
DataItem.propTypes ={
    data : PropTypes.object

}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(DataItem)