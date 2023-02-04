import {StyleSheet,StatusBar,Dimensions} from 'react-native'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
        backgroundColor: '#ffffff'
    },

    top: {

       //    backgroundColor: 'grey',
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    midd: {
        width: '100%',
        height: height / 1.8,
        //      backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    midd2: {
        //backgroundColor: 'grey',
        width: '95%',
        height: height / 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    inputdiv: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'grey',
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
        fontWeight: '700',
        fontSize: 17,

    },
    title3: {
        fontWeight: '700',
        fontSize: 22,

    },

    image: {
        width: '45%',
        height: height
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
        height: '10%',
      //  backgroundColor:'green',
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
        paddingLeft: 10,
        fontWeight: '700'
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
        height: height / 4,
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
        justifyContent: 'center',
        alignItems: 'center'


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
    radiobtn: {
        width: '90%',
        //  backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    }


})

