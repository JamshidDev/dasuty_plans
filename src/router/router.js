import {
    createRouter,
    createWebHistory,
} from 'vue-router';


const routes = [


    {
        path: "/",
        name: "home",
        redirect:'/eighth-screen',
        component: function () {
            return import("../Layout/Layout.vue");
        },
        children:[
            {
                path: "/zero-screen",
                name: "zero-screen",
                component: function () {
                    return import("../pages/ZeroScreen/ZeroScreen.vue");
                },
                meta:{
                    pageNUmber:10,
                }
            },
            {
                path: "/first-screen",
                name: "first-screen",
                component: function () {
                    return import("../pages/FirstScreen/FirstPage.vue");
                },
                meta:{
                    pageNUmber:15,
                }
            },
            {
                path: "/second-screen",
                name: "second-screen",
                component: function () {
                    return import("../pages/SecondScreen/SecondPage.vue");
                },
                meta:{
                    pageNUmber:16
                }
            },
            {
                path: "/fourth-screen",
                name: "fourth-screen",
                component: function () {
                    return import("../pages/FourthScreen/FourthScreen.vue");
                },
                meta:{
                    pageNUmber:2,
                }
            },
            {
                path: "/fiveth-screen",
                name: "fiveth-screen",
                component: function () {
                    return import("../pages/FivethScreen/FivethScreen.vue");
                },
                meta:{
                    pageNUmber:3,
                }
            },
            {
                path: "/sixth-screen",
                name: "sixth-screen",
                component: function () {
                    return import("../pages/SixthScreen/SixthScreen.vue");
                },
                meta:{
                    pageNUmber:11,
                }
            },
            {
                path: "/seventh-screen",
                name: "seventh-screen",
                component: function () {
                    return import("../pages/SeventhScreen/SeventhScreen.vue");
                },
                meta:{
                    pageNUmber:12,
                }
            },
            {
                path: "/eighth-screen",
                name: "eighth-screen",
                component: function () {
                    return import("../pages/EighthScreen/EighthScreen.vue");
                },
                meta:{
                    pageNUmber:1,
                }
            },
            {
                path: "/tenth-screen",
                name: "tenth-screen",
                component: function () {
                    return import("../pages/TenScreen/TenthScreen.vue");
                },
                meta:{
                    pageNUmber:14,
                }
            },
            {
                path: "/min-fin-one",
                name: "min-fin-one",
                component: function () {
                    return import("../pages/MinFinPresenScreen/OneScreen.vue");
                },
                meta:{
                    pageNUmber:4,
                }
            },
            {
                path: "/min-fin-two",
                name: "min-fin-two",
                component: function () {
                    return import("../pages/MinFinPresenScreen/TwoScreen.vue");
                },
                meta:{
                    pageNUmber:5,
                }
            },
            {
                path: "/min-fin-three",
                name: "min-fin-three",
                component: function () {
                    return import("../pages/MinFinPresenScreen/ThreeScreen.vue");
                },
                meta:{
                    pageNUmber:6,
                }
            },
            {
                path: "/min-fin-four",
                name: "min-fin-four",
                component: function () {
                    return import("../pages/MinFinPresenScreen/FourScreen.vue");
                },
                meta:{
                    pageNUmber:7,
                }
            },
            {
                path: "/min-fin-five",
                name: "min-fin-five",
                component: function () {
                    return import("../pages/MinFinPresenScreen/FiveScreen.vue");
                },
                meta:{
                    pageNUmber:8,
                }
            },
            {
                path: "/min-fin-seven",
                name: "min-fin-seven",
                component: function () {
                    return import("../pages/MinFinPresenScreen/SevenScreen.vue");
                },
                meta:{
                    pageNUmber:9,
                }
            },
            {
                path: "/nst-infra",
                name: "nst-infra",
                component: function () {
                    return import("../pages/MinFinPresenScreen/SixScreen.vue");
                },
                meta:{
                    pageNUmber:17,
                }
            },
            {
                path: "/gruz",
                name: "gruz",
                component: function () {
                    return import("../pages/MinFinPresenScreen/GruzScreen.vue");
                },
                meta:{
                    pageNUmber:13,
                }
            },
            {
                path: "/vols",
                name: "vols",
                component: function () {
                    return import("../pages/MinFinPresenScreen/VolsScreen.vue");
                },
                meta:{
                    pageNUmber:18,
                }
            },
            {
                path: "/third-screen",
                name: "third-screen",
                component: function () {
                    return import("../pages/ThirdScreen/ThirdScreen.vue");
                },
                meta:{
                    pageNUmber:19,
                }
            },
            // {
            //     path: "/eticket",
            //     name: "eticket",
            //     component: function () {
            //         return import("../pages/MinFinPresenScreen/EticketScreen.vue");
            //     },
            //     meta:{
            //         pageNUmber:13,
            //     }
            // }
        ]

    },
    // {
    //     path: "/login",
    //     name: "login",
    //     component: function () {
    //         return import("../Layout/LoginPage.vue");
    //     },
    // },

    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect:'/eighth-screen',
        component: function () {
            return import("../pages/EighthScreen/EighthScreen.vue");
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;