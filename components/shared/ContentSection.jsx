import { IoArrowForward } from "react-icons/io5";
export default function ContentContainer({
  children,
  title,
  description,
  sub_title,
  id,
}) {
  return (
    <div className="max-w-7xl overflow-hidden mx-auto py-15 px-10 ">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-blue-950">{sub_title}</h2>
        <p className="mt-2 text-4xl font-sans font-normal tracking-tight text-pretty text-blue-900 sm:text-5xl lg:text-balance">
          {title}
        </p>
        <hr className="mt-3" />
        <p className="mt-6 text-lg/8 text-gray-600 mb-8">{description}</p>
      </div>
      {children}
    </div>
  );
}
