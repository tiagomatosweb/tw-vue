export const getDefaultVariant = (config) => {
    if (!config?.variants) {
        throw new Error('You have to declare variants property');
    }

    if (!!config?.defaultVariant && !!config.variants[config.defaultVariant]) {
        return config?.defaultVariant;
    }

    return Object.keys(config.variants)[0];
};
