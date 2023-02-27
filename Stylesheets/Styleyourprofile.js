import {StyleSheet,StatusBar,Dimensions} from 'react-native'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: height/8
    },
    header: {
        
         backgroundColor: '#FFC72C',
        height: height/13,

        width: '90%',
        position:'absolute',
       top:12,
       marginTop: '4%',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FFC72C'
    },
    nonheader: {
        backgroundColor: '#FFC72C',
        height: height/13,
        width: '90%',
        borderRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FFC72C'
    },
    textandmenudiv: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
    
    },
    header2: {
     //  backgroundColor: 'grey',
        height: height/1.8,
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    midd3: {
   //  backgroundColor: 'grey',
        width: '90%',
        height: '4%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    ttxt3: {
        color: "#F5B716",
        fontWeight: '500',
        fontSize: 14,
      
        paddingRight:10,
    textDecorationLine: 'underline',

    },
    inputdiv: {
        // backgroundColor: 'red',
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '80%',
        marginVertical: 4,
        height: '60%',
        fontSize: 16,
        borderBottomColor: '#0004',
        borderBottomWidth: 2,
        paddingLeft: 4,
       
    },
    icondiv: {
        width: 46,
        height: 46,
        backgroundColor: '#0001',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

    phot: {
        width: '13%',
        height: '75%',
        borderRadius: 50,
        marginLeft: 20,
    },
    headertxt: {
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    pre: {
        backgroundColor: 'black',
        width: '90%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },

    hidebar: {
        width: '100%',
        height: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
    txthide: {
        fontSize: 17,
        fontWeight: '700',
       marginRight:'40%',
      
    },
   
    header5: {
        height: '30%',
        width: '90%',
        borderWidth: 2,
        borderColor: '#0011',
        position: 'absolute',
        marginTop:'22%',
        zIndex: -1,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    dropdiv: {
        width: '80%',
        height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
    },
    droptxt: {
        fontSize: 17,
        color: 'black',
        fontWeight: '600',
        paddingLeft: 10
    },
    droptxt2: {
        fontSize: 17,
        color: 'red',
        fontWeight: '600',
        paddingLeft: 10
    },
    successmain: {
        height: '110%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sucess: {
        backgroundColor: 'green',
        width: '90%',
        height: 100,
        marginBottom: 100,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 8,
    },
    successmain2:{ 
        height: '105%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    sucess2: {
        backgroundColor: 'white',
        width: '90%',
        height: '35%',
   
        justifyContent:'space-between',
        alignItems:'center',
        
        borderRadius:10,
        shadowColor: "black",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 8,
    },
    presbtnlog:{
        width:'38%',
         justifyContent:'center',
         alignItems:'center',
         height:'75%',
         borderRadius:4
    },
    textlogout:{
        fontSize:17,
        textTransform:'uppercase',
        fontWeight:'700',
        color:'white'
    },
    input2: {
        width: '90%',
        height: '15%',
        fontSize: 16,
        borderRadius:6,
        backgroundColor:'#0001',
        paddingLeft:5
      
       
    },

  
})