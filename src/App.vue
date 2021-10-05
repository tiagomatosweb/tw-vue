<template>
    <div id="app">
        <div id="nav">
            <RouterLink to="/">
                Home
            </RouterLink>

            <RouterLink :to="{ name: 'pagination' }">
                Pagination
            </RouterLink>

            <RouterLink :to="{ name: 'form' }">
                Form
            </RouterLink>

            <RouterLink :to="{ name: 'alert' }">
                Alert
            </RouterLink>

            <RouterLink :to="{ name: 'avatar' }">
                Avatar
            </RouterLink>

            <RouterLink :to="{ name: 'slideOvers' }">
                Slide over
            </RouterLink>
        </div>

        <RouterView />
    </div>
</template>
