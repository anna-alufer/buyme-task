import Controller from '@ember/controller';

export default Controller.extend({
    isShowingModal: false,
    isShowingModalUpdate: false,

    actions: {
        
          newTask: function(){

            this.set('isShowingModal', true)
 
          },


          saveTask: function(task){
            
            $.ajax({
            url: 'http://localhost:8000/task-page/save',
            data: {
                task_name: task
                },
            method: 'POST',
    
            }).responseJSON
           

            var save = this.get('store').createRecord('task', {
                task_name: task,
                active: 1
            });

            this.set('isShowingModal', false)
          },


          deleteTask: function(task_id) {
    
               $.ajax({
                   url: 'http://localhost:8000/task-page/delete',
                   data: {
                    task_id: task_id
                     },
                   method: 'POST'
   
               }).responseJSON
   
            this.get('store').findRecord('task', task_id, { backgroundReload: false }).then(function(task) {
                   task.unloadRecord();
              });
              
            },

            updateTask: function(task_id) {
            
                var active;
                var element = $( "div[data-id="+ task_id +"]" );

                if(event.target.className.split(" ")[0] == 'checkbox'){
                    if(element.hasClass('checked')){
                        element.removeClass('checked');
                        element.children("input").removeAttr('readonly')
                          active = 1
        
                      }else{
                        element.addClass('checked');
                        element.children("input").prop('readonly', true)
                        active = 0
                      }


                      $.ajax({
                        url: 'http://localhost:8000/task-page/update',
                        data: {
                         task_id: task_id,
                         active: active
                          },
                        method: 'POST'
        
                    }).responseJSON
                }

            
            


    
         },
         saveUpdatedText: function(text, id) {
            

            $.ajax({
                url: 'http://localhost:8000/task-page/update-text',
                data: {
                 task_id: id,
                 task_name: text
                  },
                method: 'POST'

            }).responseJSON
    
         },
   

          toggleModal: function() {
            this.toggleProperty('isShowingModal');
          },


    
        closeModalDialog: function(){
            this.set('isShowingModal', false)
        },


    },

   

        
    
});
