import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'grupo-empresarial/list',
        icon: 'fal fa-building',
        label: 'Grupo empresarial'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Configuración',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profie',
                label: 'Perfil'
            }
        ]
    }
];