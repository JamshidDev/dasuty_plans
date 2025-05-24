import station1 from "@/assets/data/stations/1.pdf"
import station2 from "@/assets/data/stations/2.pdf"
import station3 from "@/assets/data/stations/3.pdf"
import station4 from "@/assets/data/stations/20.pdf"
import station5 from "@/assets/data/stations/21.pdf"
import station6 from "@/assets/data/stations/4.pdf"
import station7 from "@/assets/data/stations/5.pdf"
import station8 from "@/assets/data/stations/6.pdf"
import station9 from "@/assets/data/stations/7.pdf"
import station10 from "@/assets/data/stations/8.pdf"
import station11 from "@/assets/data/stations/9.pdf"
import station12 from "@/assets/data/stations/10.pdf"
import station13 from "@/assets/data/stations/11.pdf"
import station14 from "@/assets/data/stations/22.pdf"
import station15 from "@/assets/data/stations/23.pdf"
import station16 from "@/assets/data/stations/12.pdf"
import station17 from "@/assets/data/stations/24.pdf"
import station18 from "@/assets/data/stations/25.pdf"
import station19 from "@/assets/data/stations/13.pdf"
import station20 from "@/assets/data/stations/26.pdf"
import station21 from "@/assets/data/stations/14.pdf"
import station22 from "@/assets/data/stations/15.pdf"
import station23 from "@/assets/data/stations/16.pdf"
import station24 from "@/assets/data/stations/17.pdf"
import station25 from "@/assets/data/stations/27.pdf"
import station26 from "@/assets/data/stations/18.pdf"
import station27 from "@/assets/data/stations/28.pdf"
import station28 from "@/assets/data/stations/19.pdf"
import station29 from "@/assets/data/stations/29.pdf"

import schemeGraphic from "@/assets/data/scheme/11111111.png"

export const pcStation = [
    {
        id: 1,
        name: "Рахимова",
        url: station1,
        finance: {
            routeCapital: 10.37, // Yo'l xo'jaligi
            energyCapital: 2.6, // Energiya xo'jaligi
            signalCapital: 690, // Aloqa xo'jaligi
        },
    },
    {
        id: 2, name: "Ўртааул", url: station2,
        finance: {
            routeCapital: 12.6,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id:3, name: "Ўзбекистон", url: station3, finance: {
            routeCapital: 10.37,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 5, name: "Олмазор", url: station5, finance: {
            routeCapital: 10.37,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 6, name: "Пахта", url: station6, finance: {
            routeCapital: 10.37,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 8, name: "Янги Чиноз", url: station8, finance: {
            routeCapital: 12.6,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 9, name: "Сирдарё", url: station9, finance: {
            routeCapital: 10.37,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 10, name: "Бахт", url: station10, finance: {
            routeCapital: 12.6,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 11, name: "Оқ олтин", url: station11, finance: {
            routeCapital: 12.6,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 13, name: "Боявут", url: station13, finance: {
            routeCapital: 12.6,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 16, name: "Работ", url: station16,
        finance: {
            routeCapital: 2.74,
            energyCapital: 0,
            signalCapital: 0,
        },
    },
    {
        id: 19, name: "Зарбдор", url: station19,
        finance: {
            routeCapital: 9.68,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id:0,
        name:"Тортиш ним станцияси",
        url:null,
        finance: 13,
    },

    {
        id: 22, name: "Сангзор", url: station22,
        finance: {
            routeCapital: 2.74,
            energyCapital: 0,
            signalCapital: 0,
        },
    },
    {
        id: 23, name: "Ғаллаорол", url: station23, finance: {
            routeCapital: 10.37,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 24, name: "Нурли дон", url: station24, finance: {
            routeCapital: 9.68,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
    {
        id: 26, name: "Булунғур", url: station26, finance: {
            routeCapital: 2.48,
            energyCapital: 0,
            signalCapital: 0,
        },
    },
    {
        id: 27, name: "Жомбой", url: station27, finance: {
            routeCapital: 9.68,
            energyCapital: 2.6,
            signalCapital: 690,
        },
    },
]

export const MTU_One = pcStation.filter((v) => v.id < 22) // Toshkent MTU

export const MTU_Three = pcStation.filter((v) => v.id >= 22) // Buxoro MTU

export const schemeUrl = schemeGraphic

export const newProject = [
    {
        name: "Озодлик Оқ олтин Гулистон электрлаштирилган темир йўл линияси",
        finance: 2293.2,
    },
    {
        name: "Тошкент Янги Чиноз темир йўл оралиғида электрлаштирилган учинчи тез юрар темир йўл қурилиши",
        finance: 1671.87,
    },
    {
        name: "Ховос Даштобод электрлаштирилган темир йўл линияси қурилиши",
        finance: 324.8,
    },
    {
        name: "Иккита разъезд, разъезд-10 ва разъезд-19 қурилиши",
        finance: 60,
    },
]



