import { CardCourses } from "../components";
import { dataPopular } from "../../data";
export default function Popular() {
  return (
    <main className="relative z-10">
      <section className="container  mx-auto px-3 pt-10 md:pt-36 pb-10">
        <h2 className="text-2xl text-center mb-5">our Popular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-stretch">
          {dataPopular.slice(0, 3).map((item) => (
            <CardCourses key={item.id} item={{ ...item }} />
          ))}
        </div>
      </section>
    </main>
  );
}
