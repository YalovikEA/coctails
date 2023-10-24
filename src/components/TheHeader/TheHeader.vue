<template>
    <header class="header">
        <button
            class="header__toggle-menu"
            @click="toggleMenu()"
        >
            Menu
        </button>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',

    emits: ['toggle-menu'],

    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
    },
};
</script>

<style lang="postcss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 10px 0;
    background-color: var(--background-main);
    border-bottom: 1px solid var(--color-accent);

    &__toggle-menu {
        padding: 5px 15px;
        color: #fff;
        background-color: var(--color-accent);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: opacity .3s ease;

        &:hover,
        &:focus {
            opacity: .8;
        }
    }
}
</style>
