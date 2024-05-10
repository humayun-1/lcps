export const BASE_URL = "https://api.londoncps.ac/api/";
export const BASE_URL_IMG = "https://api.londoncps.ac";

export const auth = {
  login: "auth/login",
};

export const course = {
  add_course: "add_course",
  get_courses: "get_courses",
  get_single_course: "get_single_course",
  delete_course: "delete_course",
  update_course: "update_course",
};

export const student = {
  add_student: "add_student",
  get_students: "get_all_students",
  delete_student: "delete_student",
  update_student: "update_student",
};

export const teacher = {
  add_teacher: "add_teacher",
  get_teachers: "get_all_teachers",
  delete_teacher: "delete_teacher",
  update_teacher: "update_teacher",
};

export const lecture = {
  add_lecture: "add_lecture",
  get_lectures: "get_lectures",
  delete_lecture: "delete_lecture",
  update_lecture: "update_teacher",
};

export const department = {
  get_departments: "get_departments",
  get_single_department: "get_single_department",
  delete_department: "delete_department",
  add_department: "add_department",
  update_department: "update_department"
}

export const roles = {
  "admin": {
    name: "admin",
    id: "1"
  },
  "teacher": {
    name: "teacher",
    id: "2"
  },
  "student": {
    name: "student",
    id: "3"
  },
}