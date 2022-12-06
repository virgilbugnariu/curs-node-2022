
const db = {
  students: [
      {id: 0, firstName: "Virgil", lastName: "Bugnariu"},
      {id: 1, firstName: "Adrian", lastName: "Mihai"},
  ]
}

let lastId = 1;

class Students {
  getAll() {
    return db.students;
  }

  get(id) {
    const studentId = parseInt(id);

    const result = db.students.find((student) => student.id === studentId)
    return result;
  }

  create(firstName, lastName) {
    lastId += 1;

    const newStudent = {
        id: lastId,
        firstName,
        lastName,
    };

    db.students.push(newStudent);

    return newStudent;
  }

  delete(id) {
    const studentId = parseInt(id);

    const student = db.students.find(student => student.id === studentId);

    if(!student) {
      return false;
    }

    const updatedStudentsList = db.students.filter((student) => student.id !== studentId);

    db.students = updatedStudentsList;

    return true;
  }

  update(id, firstName, lastName) {
    const student = db.students.find(student => student.id === parseInt(id));

    if(!student) {
      return null;
    }

    const updatedStudent = {
      ...student,
      firstName,
      lastName,
    }

    db.students = db.students.map(student => {
      if(student.id === parseInt(id, 10)) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    return updatedStudent;
  }
}

module.exports = Students;

