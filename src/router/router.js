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
                    pageNUmber:1,
                }
            },
            {
                path: "/first-screen",
                name: "first-screen",
                component: function () {
                    return import("../pages/FirstScreen/FirstPage.vue");
                },
                meta:{
                    pageNUmber:2,
                }
            },
            {
                path: "/second-screen",
                name: "second-screen",
                component: function () {
                    return import("../pages/SecondScreen/SecondPage.vue");
                },
                meta:{
                    pageNUmber:3,
                }
            },
            {
                path: "/third-screen",
                name: "third-screen",
                component: function () {
                    return import("../pages/ThirdScreen/ThirdScreen.vue");
                },
                meta:{
                    pageNUmber:4,
                }
            },
            {
                path: "/fourth-screen",
                name: "fourth-screen",
                component: function () {
                    return import("../pages/FourthScreen/FourthScreen.vue");
                },
                meta:{
                    pageNUmber:5,
                }
            },
            {
                path: "/fiveth-screen",
                name: "fiveth-screen",
                component: function () {
                    return import("../pages/FivethScreen/FivethScreen.vue");
                },
                meta:{
                    pageNUmber:6,
                }
            },
            {
                path: "/sixth-screen",
                name: "sixth-screen",
                component: function () {
                    return import("../pages/SixthScreen/SixthScreen.vue");
                },
                meta:{
                    pageNUmber:1,
                }
            },
            {
                path: "/seventh-screen",
                name: "seventh-screen",
                component: function () {
                    return import("../pages/SeventhScreen/SeventhScreen.vue");
                },
                meta:{
                    pageNUmber:1,
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
                    pageNUmber:1,
                }
            },



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