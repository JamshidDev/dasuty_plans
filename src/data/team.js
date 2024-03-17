import {projectList} from "./project.js";

export const teamList = [
    {
        name: 'Aliqulov Barxayotjon', position: 'Database Developer', projects: [projectList.enakl.id],
        tasks: [
            {title: 'Yo’l xo’jaligi korxonalari profillarini o’zgartirish', deadline: '2024-04-04'}
        ]
    },
    {
        name: 'Aytmuratov Artur',
        position: 'Backend Developer',
        projects: [projectList.enakl.id, projectList.erp.id, projectList.trainLocation.id],
        tasks: [
            {title: 'SMGS ga ustunlarni qo’shish', deadline: '2024-04-04'}
        ]
    },
    {
        name: 'Bekmirzayev Ilxomjon',
        position: 'System Admin',
        projects: [projectList.enakl.id, projectList.erp.id, projectList.trainLocation.id],
        tasks: [
            {title: 'Temir yo’l kartasini optimizatsiya qilish', deadline: '2024-04-11'}
        ]
    },
    {
        name: 'Boboqulov Jobir', position: 'Backend Developer (Team Lead)', projects: [projectList.erp.id, projectList.trainLocation.id], tasks: [
            {title: 'Buyruqlarni tizimdan tasdiqlash', deadline: '2024-03-05'}
        ]
    },
    {
        name: 'Gu’lumov Bekzod',
        position: 'Project Manager',
        projects: [projectList.vOffice.id, projectList.utyFace.id, projectList.erp.id, projectList.trainLocation.id],
        tasks: [
            {title: 'Elektron bashmak qurilmasini yaratish', deadline: '2024-04-29'}
        ]
    },
    {
        name: 'Yodgorov Zafar',
        position: 'Frontend Developer',
        projects: [projectList.vOffice.id, projectList.erp.id],
        tasks: [
            {title: 'Virtual ofis yo’riqnoma modulini yaratish', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Mamatov Abduvali', position: 'Backend Developer', projects: [projectList.enakl.id], tasks: [
            {
                title: 'Platelshik tablitsasi yaratilishidan oldin, MesPlanga zayavka bera olmaslik nazorati',
                deadline: '2024-03-04'
            }
        ]
    },
    {
        name: 'Muxtorov In‘omjon', position: 'Mobile Developer', projects: [projectList.enaklM.id, projectList.erp.id],
        tasks: [
            {title: 'Enakl mobile Zayavka qismini yakunlash', deadline: '2024-04-06'}
        ]
    },
    {
        name: 'Narziyev Orzu', position: 'Backend Developer', projects: [projectList.vOffice.id, projectList.erp.id],
        tasks: [
            {title: 'Virtual ofis yo’riqnoma modulini yaratish', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Pak Valeriya',
        position: 'Backend Developer',
        projects: [projectList.utyFace.id, projectList.erp.id],
        tasks: [
            {title: 'Stream orqali xodimni aniqlash ', deadline: '2024-04-07'}
        ]
    },
    {
        name: 'Qorayev Farrux',
        position: 'Backend Developer',
        projects: [projectList.vOffice.id, projectList.erp.id],
        tasks: [
            {title: 'Virtual ofis yo’riqnoma modulini yaratish', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Qurbonov Shuxratjon', position: 'Backend Developer', projects: [projectList.enakl.id],
        tasks: [
            {title: 'GU45 pamyatkani yopishdagi nazoratlarni to’liq o’rnatish', deadline: '2024-04-05'}
        ]
    },
    {
        name: 'Raximov Jamshid', position: 'Frontend Developer', projects: [projectList.erp.id, projectList.trainLocation.id], tasks: [
            {title: 'Buyruqlarni tizimdan tasdiqlash', deadline: '2024-04-05'}
        ]
    },
    {
        name: 'Toʻlqinov Akmal', position: 'Frontend Developer', projects: [projectList.enakl.id], tasks: [
            {title: 'ENAKL Dashboardini qayta shakllantirish', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Xamdamov Jaxongir', position: 'Backend Developer', projects: [projectList.enakl.id], tasks: [
            {
                title: 'Tex Kontora va ASU profillarida DU1 soobsheniya qismini optimizatsiya qilish',
                deadline: '2024-04-05'
            }
        ]
    },
    {
        name: 'Mahmudov Ramzxon', position: 'Project Manager', projects: [projectList.enaklM.id], tasks: [
            {title: 'Enakl mobile Zayavka qismini yakunlash', deadline: '2024-04-05'}
        ]
    },
    {
        name: 'Xasanov Zaxriddin', position: 'Backend Developer', projects: [projectList.enakl.id], tasks: [
            {title: 'Tamojniy bilan integratsiya', deadline: '2024-04-04'}
        ]
    },
    {
        name: 'Xaytboyeva Mahliyo',
        position: 'UI/UX Designer',
        projects: [projectList.enaklM.id, projectList.erp.id],
        tasks: [
            {title: 'Enakl mobile Zayavka qismi dizaynini yakunlash', deadline: '2024-04-04'}
        ]
    },
    {
        name: 'Shermatova Lobar',
        position: 'UI/UX Designer',
        projects: [projectList.vOffice.id, projectList.erp.id],
        tasks: [
            {title: 'Virtual ofis yo’riqnoma modulini yaratish', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Xolmuradov Elbek',
        position: 'Backend Developer',
        projects: [projectList.enakl.id, projectList.enaklM.id, projectList.trainLocation.id],
        tasks: [
            {title: 'Enakl mobileda Zayavka qismi uchun API larni chiqarish', deadline: '2024-04-04'}
        ]
    },
    {
        name: 'Yakubov Quronboy', position: 'Backend Developer', projects: [projectList.enakl.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-07'}
        ]
    },

    {
        name: 'Begaliyev Bobur', position: 'Project Manager', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-10'}
        ]
    },
    {
        name: 'Buriyev Eldor', position: 'Project Manager', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-07'}
        ]
    },
    {
        name: 'Shamatov Sanjar', position: 'Motion grafik dizayner', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-15'}
        ]
    },
    {
        name: 'O‘taganov Sherzod', position: 'Full stack developer', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-21'}
        ]
    },
    {
        name: 'Majidov Doniyor', position: 'Full stack developer', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-30'}
        ]
    },
    {
        name: 'Zuvayitov Farrux', position: 'Project Manager', projects: [projectList.railObserver.id, projectList.onk.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-01'}
        ]
    },




    {
        name: 'Zohidov Bekzod', position: 'Backend Developer', projects: [projectList.smartDep.id, projectList.gps.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-01'}
        ]
    },
    {
        name: 'Juraboyev-Ulugbek', position: 'Backend Developer', projects: [projectList.smartDep.id, projectList.gps.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-06'}
        ]
    }, {
        name: 'Kulmatov Maruf', position: 'Backend Developer', projects: [projectList.smartDep.id, projectList.gps.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-07'}
        ]
    }, {
        name: 'Murodov Mirshod', position: 'Backend Developer', projects: [projectList.smartDep.id, projectList.gps.id], tasks: [
            {title: 'M slujba otchetlari', deadline: '2024-04-09'}
        ]
    },


]
