<template>
    <main class="coctails">
        <header class="coctails__header">
            <h1 class="coctails__title">
                Coctails {{ coctailName }}
            </h1>
        </header>
        <div class="coctails__content">
            <ul
                v-if="coctails && Object.keys(coctails).length"
                class="coctails__list"
            >
                <li
                    v-for="coctail in coctails"
                    :key="coctail.title"
                    class="coctails__item"
                >
                    <TheCoctail :coctail="coctail" />
                </li>
            </ul>
            <div
                v-else-if="!coctails && !coctailsStore.coctailsLoading"
                class="coctails__status"
            >
                В данном разделе ничего нет!
            </div>
            <div
                v-else
                class="coctails__status"
            >
                Идет загрузка данных...
            </div>
        </div>
    </main>
</template>

<script>
import useCoctailsStore from '@/stores/CoctailsStore';
import TheCoctail from '@/components/TheCoctail/TheCoctail.vue';

export default {
    name: 'PageCoctails',

    components: { TheCoctail },

    setup() {
        return {
            coctailsStore: useCoctailsStore(),
        };
    },

    data() {
        return {
            coctailName: '',
        };
    },

    computed: {
        coctails() {
            return this.coctailsStore.coctailsByName(this.coctailName);
        },
    },

    watch: {
        '$route.name': {
            handler(val) {
                this.getCoctails(val);
                this.coctailName = val;
            },
        },
    },

    created() {
        this.coctailName = this.$route.name;
        this.getCoctails(this.coctailName);
    },

    methods: {
        getCoctails(name) {
            if (!this.coctailsStore.coctails[name]) this.coctailsStore.getCoctail(name);
        },
    },
};
</script>

<style lang="postcss" scoped>
.coctails {

    &__header {
        margin-bottom: 50px;
    }

    &__title {
        margin: 0;
        text-align: center;
        color: var(--color-accent);
        text-transform: uppercase;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item:not(:last-child) {
        margin-bottom: 45px;
        padding-bottom: 45px;
        border-bottom: 1px solid var(--color-secondary);
    }
}
</style>
