import Vuex from 'vuex';
import vue from 'vue';
import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';
if(!window.Vuex){
    vue.use(Vuex);
}
export default new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project,
    },
    strict:true,
});