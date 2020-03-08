import React, {Component} from 'react'
import {View, Image, Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import { responsiveWidth, moderateScale, responsiveHeight, responsiveFontSize } from '../utils/responsiveDimensions'
import User1Content from './User1Content'


const WIDTH = Dimensions.get('screen').width
class AdminContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //alert(this.props.index)
        return(
            <View style={{width:WIDTH, height: responsiveHeight(8),alignItems:'flex-end'}}>
               { <View style={{backgroundColor:'white', marginBottom:moderateScale(5),flexDirection:'row-reverse' ,width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(2), marginRight: this.props.CheckAdmin? moderateScale(2):0}}>
                   {
                     
                    <Image source={require('../assets/imgs/user4.png')}
                       style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                    />
                   }
                        
                    <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1),
                                  backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                        <Text //onPress={()=> alert(this.props.index)}
                        style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.msg}</Text>
                   </View>
                    

                </View>}
                <View style={{marginBottom: moderateScale(1)}}/>
            </View>
        )
    }
}

const mapStateToProps= state=>({
    chatterImg: state.chatterImg.img,
    chatterId: state.chatterImg.id,
    chatterallUsers: state.chatterImg.allUsers,
    CheckAdmin: state.CheckChatUser.isAdmin,
    CheckisUser1: state.CheckChatUser.isUser1,
    CheckisUser2: state.CheckChatUser.isUser2,
    CheckisUser3: state.CheckChatUser.isUser3,
})

const mapDispatchToProps={

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContent)
