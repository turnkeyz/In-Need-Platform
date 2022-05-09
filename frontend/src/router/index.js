import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientView.vue'
import EventView from '../views/EventView.vue'
import OrganizationView from '../views/OrganizationView.vue'
import WorkerView from '../views/WorkerView.vue'
import GraphView from '../views/GraphView.vue'
import ClientDocView from '../views/ClientDocView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createorganization',
      name: 'createorganization',
      component: () => import("../components/CreateOrganization.vue"),
    },
    {
      path: '/editorganizations/:id',
      name: 'editorganizations',
      component: () => import("../components/EditOrganization.vue"),
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: OrganizationView
    },
    {
      path: '/createevent',
      name: 'createevent',
      component: () => import("../components/CreateEvent.vue"),
    },
    {
      path: '/editevent/:id',
      name: 'editevent',
      component: () => import("../components/EditEvent.vue"),
    },
    {
      path: "/addclient",
      name: "addclient",
      component: () => import("../components/CreateClient.vue"),
    },
    {
      path: '/graphs',
      name: 'graphs',
      component: GraphView
    },
    {
      path: '/events',
      name: 'events',
      component: EventView
    },
    {
      path: '/createworker',
      name: 'createworker',
      component: () => import("../components/CreateWorker.vue"),
    },
    {
      path: '/worker/:id',
      name: 'editworker',
      component: () => import("../components/EditWorker.vue"),
      
    },
    {
      path: '/workers',
      name: 'workers',
      component: WorkerView
      
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientView
    }, 
  
    {
      path: '/editclient/:id',
      name: 'editclient',
      component: () => import('../components/EditClient.vue')
    },
    {
      path: '/editdocument/:id',
      name: 'editdocument',
      component: () => import('../components/EditDocument.vue')
    },
    {
      path: "/add-document",
      name: "add-document",
      component: () => import("../components/ClientDoc.vue"),
    },
    {
      path: "/clients-doc",
      name: "clients-doc",
      component: ClientDocView
    }
  ]
})
export default router