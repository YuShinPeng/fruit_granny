<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default {
        components: {
        },
        data() {
            return {
                
            }
        },
        methods: {

        },
        mounted() {

        } 
    }
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="headerArea">

        <div class="logo">
            <h1>Logo</h1>
        </div>

        <nav>
            <RouterLink to="/log-in" class="btn btn-outline-secondary">
                <i class="fa-regular fa-user"></i>
                ｜ Login
            </RouterLink>
            
            <RouterLink to="/set-info" class="btn btn-outline-secondary">
                <i class="fa-solid fa-user-pen"></i>
                ｜ Set Info</RouterLink>
            
        </nav>

    </div>
</template>


<style lang="scss" scoped>
    .headerArea{
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e4e1e1;

        .logo{
            width: 100px;
            height: 100px;
            background-color: #888;
            box-shadow: 6px 3px 6px #555;
        }

        .btn{
            height: 40px;
        }

    }
</style>