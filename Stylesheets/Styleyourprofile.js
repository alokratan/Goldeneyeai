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
        height: 70,
        width: '90%',
        marginTop: -14,
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
        height: 70,
        width: '90%',
        marginTop: '5%',
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
     //   backgroundColor: 'grey',
        height: height/2,
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        marginBottom: 30
    },
    midd3: {
   //  backgroundColor: 'grey',
        width: '90%',
        height: 40,
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
        height: '18%',
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
        width: 50,
        height: 50,
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
        width: '90%',
        height: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    //    backgroundColor:'red'

    },
    txthide: {
        fontSize: 17,
        fontWeight: '700',
       marginRight:'40%',
      
    },
    consr: {
        width: '160%',
        position: 'absolute',
        top: 80,
        justifyContent: 'center',
        backgroundColor:'red'
    },
    header5: {
        height: '25%',
        width: '90%',
        borderWidth: 2,
        borderColor: '#0011',
        top:'-3%',
        position: 'relative',
        zIndex: -1,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '70%',
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
        fontWeight: '700',
        paddingLeft: 10
    },
    dropmenuicon: {
        backgroundColor: 'red',

    },
     successmain:{ 
        height: '120%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
  
    sucess: {
        marginTop:100,
        backgroundColor: '#FFC72C',
        width: '90%',
        height: 500,
        borderWidth: 3,
        borderColor:'black',
        justifyContent:'center',
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
    }
  
})