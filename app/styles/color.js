import { Platform } from 'react-native'

export const Colors = {
    primery: '#72063c', 
    buttonColor: '#72063c',
    smallButtonColor: '#4E0329',
    bgColor: '#d8c072',
    lightgray: '#E3E3E355',

    foodBG: '#24180f',
    inputBG: '#30303022',
    inputplaceholder: '#30303088',
    selectionColor: Platform.select({
        android: '#55555E80',
        ios: '#55555E',
    }),

    // Slack card
    inProgress: '#58b7f1',
    inComplete: '#ffd039',
    complete: '#65be1e',
    backLog: '#55555E88',
    time: '#22222288',


    black: '#000000',
    white: '#FFFFFF',
    white90: '#FFFFFF90',
    red: '#D22222',
    green: '#00FF00',
    gray: '#c2c2c2',


    loginBtn: '#00b241',
    inputLabel: '#127bb2',
    inputColor: '#505050',
    orange: '#ffa300',
    cardcolor: '#424242',
    PU_time_color: '#b01c19',
    job_title_color: '#f79c00',
    job_des_color: '#dbdbdb',
    job_mob_color: '#0099fa',
    btn_yellow: '#ffea00',
    btn_redish: '#ff2725',
    btn_orange: '#ffbd00',
    btn_late_dri: '#aa14b6',
    btn_late_pax: '#0099fa',
    modal_late: '#424242',

    darkgray: '#1A1A1A',
    buttonDisabled: '#646462',

    divider: '#D8D8D8',
    lineColor: "rgba(255,255,255,0.5)",
    inputText: '#55555E',
}
