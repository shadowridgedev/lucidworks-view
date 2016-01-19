ngDescribe({
  name: 'QueryService',
  modules: 'fusionSeedApp.services',
  inject: ['ConfigApiService', 'QueryService', '$httpBackend'],
  tests: function(deps){
    describe('it should make the right call', function(){
      it('with the right query', function(){
        deps.$httpBackend.expectGET('http://localhost:8764/api/apollo/collections/Coll/query-profiles/default/select?q=hello').respond({'key':'value'});
        deps.QueryService.makeQuery({
          q: 'hello'
        }).then(function(resp){
          expect(resp.data).toEqual({'key':'value'});
        });
        deps.step();
      });
    });
  }
});