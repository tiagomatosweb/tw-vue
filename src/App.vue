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

            <RouterLink :to="{ name: 'tab' }">
                Tab
            </RouterLink>
        </div>

        <RouterView />
    </div>
</template>
