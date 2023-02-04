const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import {StyleSheet,Dimensions} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#ffffff'
    },
    top: {

     // backgroundColor: 'red',
      width: '100%',
      height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    midd: {
        width: '100%',
        height: height/1.6,
       //  backgroundColor: 'green',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    midd2: {
        // backgroundColor: 'grey',
        width: '100%',
        height: height/4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    midd3: {
        // backgroundColor: 'grey',
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    midd31: {
        //  backgroundColor: 'grey',
        width: '90%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom:10

    },
    midd4: {
        backgroundColor: 'white',
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkboxContainer: {
        width: '100%',
        // backgroundColor:'black',
        height: 40,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkbox: {
        width: 25,
        height: 25,
        margin: 10,
        borderRadius: 5
    },
    input: {

        width: '85%',
        marginVertical: 4,
        height: 36,
        fontSize: 18,
        // borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingLeft: 4
    },
    title: {
        fontWeight: '900',
        fontSize: 22,
        marginBottom: 30,
        marginLeft: 20
    },
    title2: {
        fontWeight: '700',
        fontSize: 17,

    },
    title3: {
        fontWeight: '700',
        fontSize: 22,

    },

    image: {
        width: '45%',
        
    },
    txt2: {
        color: "white",

    },
    txt3: {
        color: "#F5B716",
        width: '100%',
        fontWeight: '700',
        textDecorationLine: 'underline'
    },
    ttxt3: {
        color: "#F5B716",
        fontWeight: '900',
        fontSize: 17,
        marginHorizontal: 10,
        textDecorationLine: 'underline',
        textTransform: 'uppercase'
    },
    mediadiv: {
        width: '100%',
        height: 100,

        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
  
    presst: {
        width: 140,
        height: 40,
        backgroundColor: '#000000',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    txt1: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 20,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },

   
   
    buttonn: {
        width: '100%',
        height: height/4,
   //  backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonn2: {
        width: '100%',
        height: '40%',
    //    backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pre: {
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    texttimer: {
        fontSize: 16,
        fontWeight: '700',

    },

    camicon: {
        backgroundColor: 'white',
        width: 26,
        height: 26,
        borderRadius: 50,
        marginTop: -12,
        marginLeft: -8,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center'


    },
    txtake: {
        color: 'white',
        fontSize: 10,
        fontWeight: '900',
        paddingLeft: 14,
        paddingTop: -23
    },
    txtake2: {
        paddingLeft: 50,
    },
    textotp: {
        //  backgroundColor:'red',
        width: '50%',
        height: 46,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 14,

    },
    textotpinp: {

        height: 40,
        width: 34,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 24,
    },
    successmain:{ 
        height: '100%',
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
        backgroundColor: '#0B7B00',
        width: '90%',
        height: 100,
        borderWidth: 3,
        borderColor:'white',
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