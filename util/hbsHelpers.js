module.exports = {
    format_date(d) {
        return d.toLocaleString();
    },
    inc(num, options) {
        const base = parseInt(num);
        const offset = options.hash.by ? parseInt(options.hash.by) : 1;
        return base + offset;
    }
}