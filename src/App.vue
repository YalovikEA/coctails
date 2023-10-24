<template>
    <div class="page container">
        <TheHeader
            class="page__header"
            @toggle-menu="toggleMenu()"
        />
        <TheMenu
            class="page__menu"
            :is-menu-open="isMenuOpen"
        />
        <RouterView class="page__main" />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheMenu from '@/components/TheMenu/TheMenu.vue';

export default {
    name: 'App',

    components: {
        TheHeader,
        TheMenu,
    },

    data() {
        return {
            isMenuOpen: false,
            documentWidth: 0,
        };
    },

    watch: {
        documentWidth(val) {
            if (val < 768 && this.isMenuOpen) this.isMenuOpen = false;
        },
    },

    mounted() {
        this.getDocumentWidth();
        window.addEventListener('resize', this.getDocumentWidth);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.getDocumentWidth);
    },

    methods: {
        getDocumentWidth() {
            this.documentWidth = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
        },

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style lang="postcss" scoped>
.page {
    min-height: 100vh;
    background-color: var(--background-main);
    box-shadow: 0 0 15px 3px rgba(255, 255, 255, .1);

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 250px 1fr;
        column-gap: 30px;
    }

    &__header {

        @media (min-width: 768px) {
            display: none;
        }
    }

    &__menu {
        padding: 30px 0;

        @media (min-width: 768px) {
            padding-right: 15px;
            border-right: 1px solid var(--color-secondary);
        }
    }

    &__main {
        padding: 30px 0;
    }
}
</style>
