<template>
    <div id="main">
        <header id="header">
            <h1>
                <router-link :to="{ name: 'home' }">
                    Laravel Vue SPA
                </router-link>
            </h1>
            <navigation-menu></navigation-menu>
        </header>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import NavigationMenu from './components/Menu.vue';
export default {
    name: "index-view",
    data() {
        return {
            //
        };
    },
    components: {
        NavigationMenu
    }
};
</script>