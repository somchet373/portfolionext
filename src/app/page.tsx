import StudentForm from "./components/StudentForm";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link href="/teacher" className="px-4 py-2 bg-blue-500 text-white rounded">
          ไปหน้าครู
        </Link>
      </div>
      <StudentForm />
    </main>
  );
}
