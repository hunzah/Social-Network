export const isValidUrl = (value: string): 'Invalid URL' | undefined => {
    if (value && value.trim().length > 0) {
        const isValidUrlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
        if (!isValidUrlPattern.test(value)) {
            return 'Invalid URL';
        }
    }
    return undefined;
};


export const validateStatus = (value: string) => {
    if (value && value.length > 50) {
        return 'Maximum length 50' as const;
    }
    return undefined;
};
export const required = (value: string) => {
    if (value) {
        return undefined
    } else
        return 'Field is required'
}

export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length < maxLength) {
        return undefined
    } else
        return `max length: ${maxLength} symbols`
}