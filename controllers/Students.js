
const db = {
  students: [
      {id: 0, firstName: "Virgil", lastName: "Bugnariu"},
      {id: 1, firstName: "Adrian", lastName: "Mihai"},
  ]
}

let lastId = 1;

class Students {
  getAll(request, response) {
    response.send(JSON.stringify(db));
  }

  get(request, response) {
    const studentId = parseInt(request.params.id);

    const result = db.students.find((student) => student.id === studentId)
    response.send(JSON.stringify(result));
  }

  create(request, response) {
    const body = request.body;
    lastId += 1;

    const newStudent = {
        id: lastId,
        ...body,
    };

    db.students.push(newStudent);

    response.send(JSON.stringify(newStudent));
  }

  delete(request, response) {
    const studentId = parseInt(request.params.id);

    const updatedStudentsList = db.students.filter((student) => student.id !== studentId);

    db.students = updatedStudentsList;

    response.send();
  }

  update(request, response) {

  }
}

module.exports = Students;

