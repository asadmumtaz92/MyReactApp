import { useNavigation } from '@react-navigation/native'
const navigation = useNavigation()

import {
    asadMalick,
    shahmir,
    mohsin,
} from './images'

export const tabData = [
    {
        id: 0,
        name: 'Active',
    },
    {
        id: 1,
        name: 'Draft',
    },
    {
        id: 2,
        name: 'Completed',
    },
    {
        id: 3,
        name: 'Backlog',
    },
]

export const taskList = [
    {
        id: 0,
        type: 'IN PROGRESS',
        heading: 'The current problem of energy crisis and globle power shortage. The current problem of energy crisis and globle power shortage.',
        time: "1 day, 5 hour's remaining"
    },
    {
        id: 1,
        type: 'IN COMPLETE',
        heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        time: "3 day, 18 hour's late"
    },
    {
        id: 2,
        type: 'COMPLETE',
        heading: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        time: "Completed in 2 day, 3 hour's"
    },
    {
        id: 3,
        type: 'BACKLOG',
        heading: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
        time: ""
    },
    {
        id: 0,
        type: 'IN PROGRESS',
        heading: 'It has roots in a piece of classical Latin literature. The current problem of energy crisis and globle power shortage.',
        time: "3 day, 19 hour's remaining"
    },
    {
        id: 3,
        type: 'BACKLOG',
        heading: 'It has roots in a piece of classical Latin literature. The current problem of energy crisis and globle power shortage.',
        time: ""
    },
]

export const link = [
    {
        id: 0,
        title: 'Enable Notification',
        nav: () => { }
    },
    {
        id: 1,
        title: 'Play Notification Sound',
        nav: () => { }
    },
    {
        id: 2,
        title: 'Change Password',
        nav: () => { navigation.navigate('ChangePassword') }
    },
    {
        id: 3,
        title: 'Change Email',
        nav: () => { navigation.navigate('ChangeEmail') }
    },
    {
        id: 4,
        title: 'About App',
        nav: () => { navigation.navigate('AboutApp') }
    },
]

export const team = [
    {
        id: 0,
        image: asadMalick,
        name: 'Malick Asad',
        email: 'asadmumtaz92@outlook.com',
        desi: 'React Native Developer',
        link: 'Github | LinkedIN | Instagram',
    },
    {
        id: 1,
        image: shahmir,
        name: 'Shahmir Alam',
        email: 'sh4mi@hotmail.com',
        desi: 'Full Stack Developer',
        link: 'Github | LinkedIN | Instagram',
    },

    {
        id: 1,
        image: mohsin,
        name: 'Muhammad Mohsin',
        email: 'm.mohsin@gmail.com',
        desi: 'User Experience Designer',
        link: 'Github | LinkedIN | Instagram',
    },
]
