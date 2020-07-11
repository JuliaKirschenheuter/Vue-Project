<template>
    <div id="app">
        <div class="wrapper bg-grey">
            <header class="header">
                <div>
                    <h1>
                        <router-link
                                :to="{name: 'index'}">
                            <img alt="Meetups" src="@/assets/logo.svg"/>
                        </router-link>
                    </h1>
                </div>
                <nav>
                    <router-link :to="{name: 'meetups-list'}" v-if="$route.meta.showBackToList"> &larr; Вернуться к
                        списку
                    </router-link>
                    <a href="#">Вход</a>
                    <a href="#">Регистрация</a>
                    <a href="#">Создать митап</a>
                </nav>
            </header>
            <main class="main">
                <router-view></router-view>
            </main>
            <footer class="footer">
                <div class="container">
                    2020. learn JS
                </div>
            </footer>
        </div>
    </div>
</template>


<script>

  export default {
    name: 'App',
    components: {
    },
  };
</script>

<style></style>
