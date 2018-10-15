import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';


const Validations = buildValidations({
    task_name: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
            message: 'Password must include at least one upper case letter, one lower case letter, and a number'
          })
    ]
  
  });

export default DS.Model.extend(Validations,{
    task_id: DS.attr('number'),
    task_name: DS.attr('string'),
    active: DS.attr('number')
});
