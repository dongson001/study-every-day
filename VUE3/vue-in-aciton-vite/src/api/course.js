const courses = [
  {
    name: "全栈",
    id: 1,
    price: 9999,
  },
  {
    name: "web高级",
    id: 2,
    price: 7777,
  },
];

export function getCourses() {
  return Promise.resolve(courses);
}

export function addCourse(c) {
  courses.push({
    name: c,
    id: courses.length + 1,
  });
  return Promise.resolve(courses);
}

export function getCourseById(id) {
  return Promise.resolve(courses.find(item => item.id == id));
}
