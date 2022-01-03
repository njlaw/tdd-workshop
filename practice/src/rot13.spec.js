const rot13 = require('./rot13');

describe('rot13', () => {
    it('should transform characters', () => {
        expect(rot13.transform('a')).toBe('n');
        expect(rot13.transform('b')).toBe('o');
        expect(rot13.transform('n')).toBe('a');
        expect(rot13.transform('{')).toBe('{');
        expect(rot13.transform('`')).toBe('`');
        expect(rot13.transform('A')).toBe('N');
        expect(rot13.transform('N')).toBe('A');
    });
});
