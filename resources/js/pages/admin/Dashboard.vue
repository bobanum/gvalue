<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Admin Dashboard</div>
            <div class="card-body">
                Bienvenue sur votre dashboard administrateur
            </div>
        </div>
        <div class="card card-default">
            <div class="card-header">Liste des utilisateurs</div>
            <div class="card-body">
                <user-list/>
            </div>
        </div>
    </div>
</template>
<script>
import UserList from '@/components/User/List.vue';
export default {
    mounted() {
        //
    },
    components: {
        UserList
    }
};
</script>