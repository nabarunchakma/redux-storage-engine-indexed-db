describe('engine', () => {
    const returnVal = 'SOME_VAL';
    const set = sinon.stub().returns(new Promise((resolve) => {
        resolve(returnVal);
    }));
    const get = sinon.stub().returns(new Promise((resolve) => {
        resolve(returnVal);
    }));
    describe('check proxies', () => {
        it('should call the set method and return the response as it is', async () => {
            const result = await set('key', 'val');
            set.should.have.been.calledWith('key', 'val');
            result.should.equal(returnVal);
        });

        it('should call the get method and return the response as it is', async () => {
            const result = await get('key');
            get.should.have.been.calledWith('key');
            result.should.equal(returnVal);
        });
    });
});
