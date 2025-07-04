import { IoArrowForward } from "react-icons/io5";
export default function ContentContainer({
  children,
  title,
  description,
  sub_title,
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

/**
 * 
 * <div className="flex justify-between items-center mb-6 mx-auto">
        <h2 className="mx-auto text-2xl font-sans font-normal tracking-tight text-pretty text-blue-900 sm:text-5xl lg:text-balance">
          {title}
        </h2>
        <div>
          {" "}
          <p className="mt-6 text-gray-600">{description}</p>
        </div>
        <button className="text-sm text-blue-950 hover:text-red-600  flex items-center gap-1 cursor-pointer">
          View all <IoArrowForward />
        </button>
 * 
 * 
 * 
 * 
 * 
 * 
 <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-blue-950">
              How it works
            </h2>
            <p className="mt-2 text-4xl font-sans font-normal tracking-tight text-pretty text-blue-900 sm:text-5xl lg:text-balance">
              Your One-Stop Guide to Buying or Renting a Home
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
 */
