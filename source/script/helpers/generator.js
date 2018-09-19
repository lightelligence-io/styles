class Generator {
    static id() {
        return `_${Math.random().toString(36).substr(2,14)}`;
    }
};

export { Generator };
