import { dataCategories } from "../../data";
export default function Categories() {
  return (
    <main className="mt-[100vh] py-5 h-auto md:h-[50vh] relative z-20 border-t-[1px] border-solid border-crPrimary">
      <div className="container md:pt-12 px-3 mx-auto grid md:grid-cols-5 gap-5">
        <section className="col-span-2">
          <p className="text-2xl">categories</p>
          <p className="text-sm mt-3 text-gray-300 leading-6 max-w-full md:max-w-[440px] w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque
            tempore accusamus error deserunt minus odio labore ut illo
            voluptates aliquam accusantium eligendi natus, consequatur nesciunt
            saepe harum odit? Laudantium dignissimos maiores eaque nesciunt a
            ipsam qui, sunt inventore quam quibusdam ipsa amet consectetur.
            Ipsam voluptate non quibusdam eum cumque!
          </p>
        </section>
        <section className="col-span-3 grid grid-cols-2 md:grid-cols-2 gap-3">
          {dataCategories.map((item) => (
            <div
              key={item.title}
              className="bg-bgSubPrimary py-5 px-5 duration-200 relative rounded-md border-[1px] border-solid border-crBorer hover:border-crPrimary hover:rotate-2"
            >
              <i
                style={{ background: item.color }}
                className="w-10 h-10 flex items-center justify-center rounded-md"
              >
                {item.icon}
              </i>
              <p className="my-2">{item.title}</p>
              <p className="text-xs text-crTextMuted leading-5">{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
