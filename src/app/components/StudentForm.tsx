"use client";

import { useForm } from "react-hook-form";
import { useStudentStore } from "../store/useStudentStore";

type FormData = Omit<Student, "id" | "image"> & { image?: FileList };

export default function StudentForm() {
  const addStudent = useStudentStore((s) => s.addStudent);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    const file = data.image?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addStudent({ ...data, gpa: parseFloat(data.gpa), image: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      addStudent({ ...data, gpa: parseFloat(data.gpa) });
    }
    reset();
    alert("บันทึกเรียบร้อย!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-xl mx-auto bg-white rounded-2xl shadow text-gray-700 placeholder-gray-400">
      <h2 className="text-xl font-bold">ฟอร์มสมัคร TCAS69</h2>

      <input {...register("firstName", { required: true })} placeholder="ชื่อ" className="input" />
      {errors.firstName && <span className="text-red-500">กรุณากรอกชื่อ</span>}

      <input {...register("lastName", { required: true })} placeholder="นามสกุล" className="input" />

      <input {...register("address", { required: true })} placeholder="ที่อยู่" className="input" />

      <input {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="เบอร์โทร" className="input" />

      <input {...register("school", { required: true })} placeholder="โรงเรียน" className="input" />

      <input type="number" step="0.01" {...register("gpa", { required: true, min: 0, max: 4 })} placeholder="GPA (0.00-4.00)" className="input" />

      <input {...register("skills")} placeholder="ความสามารถพิเศษ" className="input" />
      <textarea {...register("reason")} placeholder="เหตุผลในการสมัคร" className="input"></textarea>

      <input {...register("major", { required: true })} placeholder="สาขาที่เลือก" className="input" />
      <input {...register("university", { required: true })} placeholder="มหาวิทยาลัย" className="input" />

      <input type="file" accept="image/*" {...register("image")} />

      <textarea {...register("activities")} placeholder="กิจกรรม" className="input"></textarea>
      <textarea {...register("awards")} placeholder="รางวัล" className="input"></textarea>
      <textarea {...register("works")} placeholder="ผลงาน" className="input"></textarea>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">บันทึก</button>
    </form>
  );
}
