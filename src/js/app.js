import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import RightPanel from './components/RightPanel.vue';

var vm = new Vue({
    el: '#app',
    data: {
        tabs: [
            {
                type: 'connect',
                label: 'New Connection',
            }
        ],
        currentTab: 0
    },
    components: {
        Navbar,
        RightPanel
    }
});
