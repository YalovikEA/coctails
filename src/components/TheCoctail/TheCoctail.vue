<template>
    <article class="coctail">
        <div class="coctail__info">
            <h2 class="coctail__title">
                {{ coctail.title }}
            </h2>
            <dl class="coctail__description description">
                <div class="description__item">
                    <dt class="description__key">
                        Category:
                    </dt>
                    <dd class="description__value">
                        {{ coctail.category }}
                    </dd>
                </div>
                <div class="description__item">
                    <dt class="description__key">
                        Type:
                    </dt>
                    <dd class="description__value">
                        {{ coctail.alcoholic }}
                    </dd>
                </div>
                <div class="description__item">
                    <dt class="description__key">
                        Glass:
                    </dt>
                    <dd class="description__value">
                        {{ coctail.glass }}
                    </dd>
                </div>
                <div class="description__item description__item_inline">
                    <dt class="description__key">
                        Instruction:
                    </dt>
                    <dd class="description__value">
                        {{ coctail.instruction }}
                    </dd>
                </div>
                <div class="description__item description__item_inline">
                    <dt class="description__key">
                        List of ingredients:
                    </dt>
                    <dd class="description__value">
                        <ul class="ingredients__list">
                            <li
                                v-for="(value, key) of coctail.ingredients"
                                :key="key"
                                class="ingredients__item"
                            >
                                <span class="ingredients__key">{{ key }}</span>
                                <span class="ingredients__value">{{ value }}</span>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
        <figure class="coctail__image">
            <img
                :ref="coctail.title"
                :data-src="coctail.image"
                width="350"
                height="350"
                :alt="coctail.title"
            >
        </figure>
    </article>
</template>

<script>
export default {
    name: 'TheCoctail',

    props: {
        coctail: {
            type: Object,
            default: () => ({}),
        },
    },

    mounted() {
        this.observeImage();
    },

    methods: {
        observeImage() {
            const img = this.$refs[this.coctail.title];

            const config = {
                rootMargin: '50px 0px',
                threshold: 0.01,
            };

            const observer = new IntersectionObserver((entries, self) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.preloadImage(entry.target);
                        self.unobserve(entry.target);
                    }
                });
            }, config);

            observer.observe(img);
        },

        preloadImage(img) {
            const src = img.getAttribute('data-src');

            if (!src) return;

            img.src = src;
        },
    },
};
</script>

<style lang="postcss" scoped>
.coctail {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) ;
    row-gap: 20px;
    column-gap: 20px;

    &__title {
        margin: 0;
        margin-bottom: 25px;
        color: var(--color-accent);
    }

    &__description {
        margin: 0;
    }

    &__image {
        margin: 0;
        overflow: hidden;
        background-color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
        border-radius: 10px;
        box-shadow: 0 0 10px 0 var(--color-accent);

        img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}

.description {

    &__item:not(:last-child) {
        display: flex;
        margin-bottom: 10px;
    }

    &__item_inline {
        flex-wrap: wrap;

        .description__key {
            margin-bottom: 10px;
        }
    }

    &__key {
        font-weight: 700;
        color: var(--color-secondary);
    }

    &__value {
        margin-left: 15px;
    }
}

.ingredients {

    &__title {
        margin: 0;
        margin-bottom: 1em;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item {
        position: relative;
        padding-left: 15px;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 5px;
            height: 1px;
            background-color: var(--color-main);
        }
    }

    &__key {
        font-weight: 700;
    }

    &__value {
        position: relative;
        padding-left: 15px;

        &:not(:empty)::before {
            content: ":";
            position: absolute;
            left: 1px;
        }
    }
}
</style>
