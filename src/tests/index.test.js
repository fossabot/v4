const bootstrapStyled = require('..');

describe('api exports', () => {
  it('should have all exports defined', () => {
    Object.keys(bootstrapStyled).forEach((exported) => { expect(exported).toBeDefined(); });
  });
});
