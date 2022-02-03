export const getDefaultSize = (config) => {
    if (!config?.sizes) {
        throw new Error('You have to declare sizes property');
    }

    if (!!config?.defaultSize && !!config.sizes[config.defaultSize]) {
        return config?.defaultSize;
    }

    return Object.keys(config.sizes)[0];
};
