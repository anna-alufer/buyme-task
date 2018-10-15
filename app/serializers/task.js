import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'task_id', 

    normalizeResponse (store, primaryModelClass, payload, id, requestType){
        payload = { task: payload};

        return this._super(store, primaryModelClass, payload, id, requestType)
    }
    

});
