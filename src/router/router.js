import {
    createRouter,
    createWebHistory,
} from 'vue-router';






const routes = [


    {
        path: "/",
        name: "home",
        redirect:'/first-screen',
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
            },
            {
                path: "/first-screen",
                name: "first-screen",
                component: function () {
                    return import("../pages/FirstScreen/FirstPage.vue");
                },
            },
            {
                path: "/second-screen",
                name: "second-screen",
                component: function () {
                    return import("../pages/SecondScreen/SecondPage.vue");
                },
            },
            {
                path: "/third-screen",
                name: "third-screen",
                component: function () {
                    return import("../pages/ThirdScreen/ThirdScreen.vue");
                },
            },
            {
                path: "/fourth-screen",
                name: "fourth-screen",
                component: function () {
                    return import("../pages/FourthScreen/FourthScreen.vue");
                },
            },
            {
                path: "/fiveth-screen",
                name: "fiveth-screen",
                component: function () {
                    return import("../pages/FivethScreen/FivethScreen.vue");
                },
            },
            {
                path: "/sixth-screen",
                name: "sixth-screen",
                component: function () {
                    return import("../pages/SixthScreen/SixthScreen.vue");
                },
            },
            {
                path: "/seventh-screen",
                name: "seventh-screen",
                component: function () {
                    return import("../pages/SeventhScreen/SeventhScreen.vue");
                },
            },
            {
                path: "/eighth-screen",
                name: "eighth-screen",
                component: function () {
                    return import("../pages/EighthScreen/EighthScreen.vue");
                },
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

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: function () {
    //         return import("../views/NotFoundPage.vue");
    //     },
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;