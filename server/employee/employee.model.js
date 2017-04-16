var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * @module employee
 * @description contain the details of employee's information, conditions and actions.
 */
var EmployeeSchema = new Schema({
  name: { type: String },
  email: {type: String},
  dob: {type: String},
  department: {type:String},
  gender: {type:String},
  age:{type:Number}
});

EmployeeSchema.statics = {


  /**
    findOneEmployee. return the one Employee object.
    @param id: get id to find one Employee by id.
    @param callback: callback of this form.
  */
  get: function(query, callback) {
      this.findOne(query, callback);
  },

	/**
  *findemployee. return the employee objects.
  *@param callback: callback of this form.
  */
	getAll: function(query, callback) {
    this.find(query, callback);
  },

  /**
  * addEmployee. saves the employee record
  * @param data: employee json data
  */
  add: function(data,callback) {
    data.age = getAge(data.dob);
    var employee = new this(data);
    employee.save(callback);
  },

  /**
      updatecompany. return the created employee object result.
      @param updateData: updateData is use to update employee w.r.t id.
      @param callback: callback of this form.
  */
  updateById: function(id, updateData, callback) {
    updateData.age = getAge(updateData.dob);
    this.update({_id:id}, updateData, callback);
  },

  /**
      removeById. 
      @param removeData: removeData is use to remove employee w.r.t id.
      @param callback: callback of this form.
  */
  removeById: function(removeData, callback) {
        this.remove(removeData, callback);
  }

}

function getAge(dob){
   var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

var employee = mongoose.model('employee', EmployeeSchema);

module.exports = {
    Employee: employee
};