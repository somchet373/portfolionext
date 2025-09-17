"use client";

import { useState } from "react";
import { useStudentStore } from "../store/useStudentStore";
import Image from "next/image";



export default function StudentTable() {
  const { students } = useStudentStore();
  const [sortKey, setSortKey] = useState<"name" | "gpa">("name");
  const [selected, setSelected] = useState<number | null>(null);

  const sorted = [...students].sort((a, b) => {
    if (sortKey === "gpa") return b.gpa - a.gpa;
    return a.firstName.localeCompare(b.firstName);
  });

  return (
    <div className="p-4 max-w-4xl mx-auto text-gray-700">
      <h2 className="text-xl font-bold mb-2">รายชื่อนักเรียน</h2>
      <div className="mb-2">
        <button onClick={() => setSortKey("name")} className="mr-2 px-2 py-1 bg-gray-200 rounded">เรียงตามชื่อ</button>
        <button onClick={() => setSortKey("gpa")} className="px-2 py-1 bg-gray-200 rounded">เรียงตาม GPA</button>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">ชื่อ</th>
            <th className="border px-2 py-1">GPA</th>
            <th className="border px-2 py-1">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.id}>
              <td className="border px-2 py-1">{s.firstName} {s.lastName}</td>
              <td className="border px-2 py-1">{s.gpa}</td>
              <td className="border px-2 py-1">
                <button onClick={() => setSelected(s.id)} className="text-blue-500">ดูรายละเอียด</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          {(() => {
            const s = students.find(stu => stu.id === selected);
            if (!s) return null;
            return (
              <div>
                <h3 className="text-lg font-bold">รายละเอียดของ {s.firstName} {s.lastName}</h3>
                {s.image && (
                    <Image
                        src={s.image}
                        alt="profile"
                        width={128}
                        height={128}
                        className="rounded object-cover"
                    />
                    )}
                <p><b>ที่อยู่:</b> {s.address}</p>
                <p><b>เบอร์โทร:</b> {s.phone}</p>
                <p><b>โรงเรียน:</b> {s.school}</p>
                <p><b>GPA:</b> {s.gpa}</p>
                <p><b>ความสามารถพิเศษ:</b> {s.skills}</p>
                <p><b>เหตุผล:</b> {s.reason}</p>
                <p><b>สาขา:</b> {s.major}</p>
                <p><b>มหาวิทยาลัย:</b> {s.university}</p>
                <p><b>กิจกรรม:</b> {s.activities}</p>
                <p><b>รางวัล:</b> {s.awards}</p>
                <p><b>ผลงาน:</b> {s.works}</p>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
