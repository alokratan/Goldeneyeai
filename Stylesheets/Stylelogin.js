import {StyleSheet,StatusBar,Dimensions} from 'react-native'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',

    },

    top: {

  // backgroundColor: 'grey',
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    midd: {

        width: '100%',
        height: height / 1.8,
       // backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    midd2: {
      //   backgroundColor: 'grey',
        width: '90%',
        height: height/4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    midd3: {
      //  backgroundColor: 'grey',
        width: '100%',
        height: '15%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',

    },
    // midd4: {
    //     backgroundColor: 'red',
    //     width: '100%',
    //     height: '40%',
    //     justifyContent: 'center',
    //     alignItems: 'center',

    // },
    checkboxContainer: {
        width: '100%',
        // backgroundColor:'greens',
        height: '8%',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkbox: {
        width: 22,
        height: 22,
        margin: 10,
        borderRadius: 5
    },
    inputdiv: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: 2,
        marginVertical: 10
    },
    input: {
        width: '85%',
        height: 30,
        fontSize: 18,
    },
    title: {
        fontWeight: '900',
        fontSize: 22,
        marginBottom: 30,
        marginLeft: 20
    },
    title2: {
        fontWeight: '900',
        fontSize: 19,
        position:'relative',
        zIndex:1,
        left:2,
        top:0
        

    },
    title3: {
        fontWeight: '500',
        fontSize: 19,

    },

    image: {
        width: '50%',
        height: height
    },
    txt2: {
        color: "white"
        

    },
    txt3: {
        color: "#F5B716",
        width: '100%',
        paddingRight: 30,
        fontWeight: '700',
        textDecorationLine: 'underline',
        // fontStyle:'italic'
        
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
    // backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pressg: {
        width: 140,
        height: 40,
        backgroundColor: '#EA4235',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pressf: {
        width: 140,
        height: 40,
        backgroundColor: '#3664A2',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    txt1: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
        paddingLeft: 10
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    facebook: {
        width: 34,
        height: 34,
        marginHorizontal: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderRightColor: '#3664A2',
        justifyContent: 'center',
        alignItems: 'center'

    },
    face: {
        width: 26,
        height: 26
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
        // backgroundColor: 'black',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    texttimer: {
        fontSize: 16,
        fontWeight: '700'
    },
    termsdivmain: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        borderColor: 'black',
        shadowColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsdiv: {
        backgroundColor: '#fff',
        width: '80%',
        height: 500,
        borderWidth: 3,
        justifyContent:'space-between'
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