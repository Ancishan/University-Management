import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFaculty } from '../modules/academicFaculty/academicFaculty.model';
import { semesterRegistration } from '../modules/semsterRegistration/semesterRegistration.model';
import { Course } from '../modules/Course/course.model';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { semesterRegistrationRoutes } from '../modules/semsterRegistration/semesterRegistration.route';
import { CourseRoutes } from '../modules/Course/course.route';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AcademicSchemaRoutes } from '../modules/Auth/auth.route';
import { OfferedCourse } from '../modules/offeredCourse/offeredCourse.model';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  }, 
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/course',
    route:CourseRoutes,
  },
  {
    path:'/admin',
    route: AdminRoutes,
  },
  {
    path:'/offered-course',
    route: OfferedCourse,
  },
  {
    path:'/auth',
    route: AcademicSchemaRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;