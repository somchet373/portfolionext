import StudentTable from "../components/StudentTable";
import Link from "next/link";

export default function TeacherPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link href="/" className="px-4 py-2 bg-green-500 text-white rounded">
          กลับไปหน้าฟอร์ม
        </Link>
      </div>
      <StudentTable />
    </main>
  );
}
