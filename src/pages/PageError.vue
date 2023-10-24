<template>
    <div class="error">
        <h1 class="error__title">
            404
        </h1>
        <h2 class="error__subtitle">
            Ошибка 404
        </h2>
        <p class="error__text">
            Мы сожалеем, но страница на которую Вы пытались перейти не существует.
        </p>
        <p class="error__text">
            Пожалуйста, вернитесь на
            <RouterLink
                class="error__link"
                :to="{ name: 'main' }"
            >
                главную страницу
            </RouterLink>
            или воспользуйтесь меню сайта.
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageError',
};
</script>

<style lang="postcss" scoped>
.error {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;

    &__title {
        margin: 0;
        margin-bottom: 24px;
        font-size: 120px;
        line-height: 1;
        text-align: center;
        color: var(--color-accent);
        letter-spacing: 1;
    }

    &__subtitle {
        margin: 0;
        margin-bottom: 16px;
        font-size: 24px;
        text-align: center;
    }

    &__text {
        margin: 0;
        text-align: center;
    }

    &__link {
        font-weight: 700;
        color: var(--color-accent);
        transition: color .3s ease;

        &:hover,
        &:focus {
            color: var(--color-secondary);
        }
    }
}
</style>
