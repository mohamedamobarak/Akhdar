export default function ProjectOwnersCard() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="relative bg-green-100 rounded-3xl py-10 px-8 sm:px-16 md:px-24 max-w-3xl w-full text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          For Project Owners
        </h2>
        <p className=" text-base font-500 ">
          If you're a developer looking to share your project, you've come to the right place.
        </p>
        <button className="absolute bottom-0 end-1/2 transform translate-x-1/2 translate-y-1/2 text-xs sm:text-sm  bg-[#81F18E] hover:bg-green-500 text-gray-800 font-medium py-2 px-5 sm:px-6 md:px-8 rounded-md transition-colors duration-200">
          List Your Project
        </button>
      </div>
    </div>
  );
}