<template>
    <div id="app">
        <div id="nav">
            <RouterLink to="/">
                Home
            </RouterLink> |
            <RouterLink to="/about">
                About
            </RouterLink>
        </div>
        <RouterView />
    </div>
</template>
