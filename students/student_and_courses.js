function Student(first, last) {
  this.first = first
  this.last = last
  this.courses = []
}

Student.prototype.name = function () {
  console.log(`${this.first} ${this.last}`);
}

Student.prototype.courses = function () {
  for (var i = 0; i < this.courses.length; i++) {
    console.log(this.courses[i].name);
  }
}

Student.prototype.enroll = function (course) {
  this.courses.push(course)
  if (!course.students.includes(this)){
      course.students.push(this)
  }
}

Student.prototype.courseLoad = function () {
  courseload = {}
  for (var i = 0; i < this.courses.length; i++) {
    if (courseload.hasOwnProperty(this.courses[i].department)) {
    courseload[this.courses[i].department] += this.courses[i].credits
    } else {
    courseload[this.courses[i].department] = this.courses[i].credits
    }

  }

  return courseload
}

function Course(department, name, credits) {
  this.department = department
  this.name = name
  this.credits = credits
  this.students = []
}

Course.prototype.students = function () {
  for (var i = 0; i < this.students.length; i++) {
    console.log(this.students[i].name);
  }
}

Course.prototype.addStudent = function (student) {
  student.enroll(this)
}

student = new Student('Michaelangelo', 'Loretti')
course = new Course('Programming', 'App Academy', 1000000)
course2 = new Course('Programming', 'JS', 2)
student.enroll(course)
student.enroll(course2)
console.log(student);
console.log(course);
console.log(student.courseLoad())
