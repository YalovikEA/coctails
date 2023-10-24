import { defineStore } from 'pinia';
import status from '@/stores/statuses';
import coctailNormalizer from './normilizers/coctail';

const useCoctailsStore = defineStore('coctailsStore', {
    state: () => ({
        coctails: {},
        coctailsStatus: status.error,
    }),

    actions: {
        getCoctail(coctailName) {
            this.coctailsStatus = status.loading;

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailName}`)
                .then(async (response) => {
                    let { drinks } = await response.json();

                    drinks = drinks.map((el) => coctailNormalizer(el));

                    this.coctails[coctailName] = drinks;
                    this.coctailsStatus = status.success;
                })
                .catch(() => {
                    this.coctailsStatus = status.error;
                });
        },
    },

    getters: {
        coctailsByName: (state) => (name) => {
            if (!state.coctails[name]) {
                return null;
            }
            return state.coctails[name];
        },
        coctailsLoading: (state) => state.coctailsStatus === status.loading,
    },
});

export default useCoctailsStore;
