// References : http://chaijs.com/api/assert/

var assert = require("assert");

describe('Test mocha  ',function() {

    before(function(done) {
        // Create something before testing
        // then using done() to finish
        done();
    });

    it('should equal test',function() {
        assert.equal( 'test', 'test' ); 
    });
    
    it('should equal test with done()',function(done) {
        assert.equal( 'test', 'test' );
        done(); 
    });

    it('should foo is not bar',function() {
        assert( 'foo' !== 'bar', 'foo is not bar' ); 
    });
    
    it('should ok',function() {
        assert.ok( 'everything', 'everything is ok' ); 
        //assert.ok( false, 'this is fail' ); 
    });
    
    /* it('should not ok', function(){
        assert.notOk('everything', 'this will fail');
         assert.notOk( false , 'this will pass');
    });*/

    it('should not equal', function(){
        assert.notEqual(3,4,'these numbers are not equal');
    });

    it('should is struct equal', function(){
        assert.strictEqual(true, true, 'these booleans are strictly equal');
    });
    
    it('should is not struct equal', function(){
        assert.notStrictEqual(3, '3', 'no coercion for strict equality');
    });
    
    it('should is deep equal', function(){
        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    });
    
    it('should is not deep equal', function(){
        assert.notDeepEqual({ tea: 'green' }, { tea: 'red' });
    });
    
    it('should is True', function(){
        var teaServed = true;
        console.log(assert);
        assert.isTrue(teaServed, 'the tea has been served');
    });
});
