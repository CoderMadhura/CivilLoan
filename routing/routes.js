module.exports=(app)=>{
  const serviceControl= require('../controller/serviceController');
  const memberControl=require('../controller/memberController');
  const requestControl=require('../controller/requestController');

 app.get('/allservices',serviceControl.getAllServices);
 app.get('/service/:type',serviceControl.serviceType);
 app.post('/service',serviceControl.addNewService);
 app.post('/service/:type/form',serviceControl.serviceTypeForm);


 app.post('/member',memberControl.addNewMember);
 app.get('/allmembers',memberControl.getAllMembers);
 app.put('/updatemember/:id',memberControl.updateMember);
 app.delete('/cancelmember/:id',memberControl.cancelMember);


 app.post('/request',requestControl.addNewRequest);
 app.get('/allrequests',requestControl.getAllRequests);
 app.put('/updaterequest/:id',requestControl.updateRequest);
 app.delete('/deleterequest/:id',requestControl.deleteRequest);

}