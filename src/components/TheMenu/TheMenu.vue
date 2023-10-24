<template>
    <nav :class="['menu', { open: isMenuOpen }]">
        <ul class="menu__list">
            <li
                v-for="link in nav"
                :key="link.url"
                class="menu__item"
            >
                <RouterLink
                    class="menu__link"
                    :to="{ name: link.url }"
                    exact
                    active-class="active"
                >
                    {{ link.title }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TheMenu',

    props: {
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            nav: [
                {
                    title: 'Margarita',
                    url: 'margarita',
                },
                {
                    title: 'Mojito',
                    url: 'mojito',
                },
                {
                    title: 'A1',
                    url: 'a1',
                },
                {
                    title: 'Kir',
                    url: 'kir',
                },
            ],
        };
    },
};
</script>

<style lang="postcss" scoped>
.menu {
    position: fixed;
    top: 51px;
    z-index: 1;
    width: calc(100% - 30px);
    padding: 30px 0;
    background-color: var(--background-secondary);
    transform: translateY(-150%);

    @media (min-width: 768px) {
        position: static;
        width: 100%;
        background-color: var(--background-main);
        transform: initial;
        transition: none;
    }

    &.open {
        transform: translateY(0);
        transition: transform .3s ease;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;

        @media (min-width: 768px) {
            position: sticky;
            top: 30px;
        }
    }

    &__item:not(:last-child) {
        margin-bottom: 0;
        border-bottom: 1px solid var(--color-secondary);
    }

    &__link {
        display: flex;
        padding: 10px;
        color: var(--color-accent);
        text-decoration: none;
        transition: color .3s ease, background .3s ease;

        &.active.router-link-exact-active,
        &:hover,
        &:focus {
            color: var(--background-main);
            background-color: var(--color-secondary);
        }
    }
}
</style>
