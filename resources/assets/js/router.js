import VueRouter    from 'vue-router'

//Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

// lazy load components
const Room = (resolve) => require(['./components/Room.vue'], resolve)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/rooms', component: Room } // example of route with a seperate component
      ]
});
