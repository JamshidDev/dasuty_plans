import chuqursoyVideUrl from "@/assets/video/chuqursoy.mp4"
import salarVideUrl from "@/assets/video/salar.mp4"
import xamzaVideUrl from "@/assets/video/xamza.mp4"
import toshkentVideUrl from "@/assets/video/toshkent.mp4"
import tuqimachiVideUrl from "@/assets/video/tuqimachi.mp4"
import axangaron  from '@/assets/video/axangaran.mp4'
import jaloir  from '@/assets/video/jaloir.mp4'
import kuchluk  from '@/assets/video/kuchluk.mp4'
import ozodlik  from '@/assets/video/ozodlik.mp4'
import sergeli  from '@/assets/video/sergeli.mp4'
import toytepa  from '@/assets/video/toytepa.mp4'

export const stationReport = [
    {
        id: 'st_720000',
        name: 'Чуқурсой стансияси',
        data: {
            du1: 22,
            removedWagon: 541,
            addingWagon: 0,
            video: chuqursoyVideUrl,
        }
    },
    {
        id: 'st_722400',
        name: 'Тошкент стансияси',
        data: {
            du1: 1,
            removedWagon: 56,
            video: toshkentVideUrl,
            addingWagon: 42,
        }
    },
    {
        id: 'st_720903',
        name: 'Салар стансияси',
        data: {
            du1: 0,
            removedWagon: 15,
            addingWagon: 20,
            video: salarVideUrl,
        }
    },
    {
        id: 'st_723600',
        name: "Тўқимачи стансияси",
        data: {
            du1: 3,
            video: tuqimachiVideUrl
        }
    },
    {
        id: 'st_722504',
        name: "Хамза стансияси",
        data: {
            video: xamzaVideUrl
        }
    },
    {
        id: 'st_723507',
        name: "Сергели станцияси",
        data: {
            du1: 2,
            removedWagon: 615,
            addingWagon: 65,
            video: sergeli
        }
    },
    {
        id: 'st_723403',
        name: "Жалоир станцияси",
        data: {
            du1: 0,
            video: jaloir
        }
    },
    {
        id: 'st_723307',
        name: "Кучлук станцияси",
        data: {
            du1: 0,
            video: kuchluk
        }
    },
    {
        id: 'st_722608',
        name: "Ангрен станцияси",
    },
    {
        id: 'st_723206',
        name: "Тўйтепа станцияси",
        data: {
            du1: 0,
            video: toytepa,
        }
    },
    {
        id: 'st_723102',
        name: "Озодлик станцияси",
        data: {
            du1: 1,
            video: ozodlik
        }
    },
    {
        id: 'st_723009',
        name: "Ахангарон станцияси",
        data: {
            removedWagon: 674,
            addingWagon: 43,
            du1: 6,
            video: axangaron
        }
    },
    {
        id: 'st_722805',
        name: "Ақча станцияси",
    },
    {
        id: 'st_722701',
        name: "Аблиқ станцияси",
    },

]
