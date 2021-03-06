// store/index.js
export const actions = {
    // https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
    // automatically refresh the access token on the initial request to the server, if possible
    async nuxtServerInit({ dispatch, state }) {
        const { accessToken, refreshToken } = state.auth;
        if (accessToken && refreshToken) {
            try {
                // refresh the access token
                await dispatch('auth/refresh');
            } catch (e) {
                // catch any errors and automatically logout the user
                await dispatch('auth/logout');
            }
        }
    },
};
