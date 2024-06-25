import React from "react"

export default function LastSection() {
	return (
		 
    <div className="mt-4 lastSectionBoundary pt-4 bg-no-repeat bg-cover">
      <div className="mt-4 max-w-screen-xl mx-auto">
        <section className="gap-4 py-3 px-0 pb-4 pl-4 flex flex-col md:flex-row justify-center md:justify-start">
          <button className="btnFont h-16 px-10 py-2 bg-[#212121] rounded-[30px] border-0 text-[#24EA28] w-full md:w-72 mb-4 md:mb-0">
            Have a Taste of Independence
          </button>
          <button className="btnFont w-52 h-16 bg-white rounded-[30px] border border-gray-700 text-gray-700">
            See Demo &gt;
          </button>
        </section>
        <div className="flex flex-col md:flex-row">
          <div className="lastbox1">
            <h3 className="mt-8 mb-4 w-full md:w-[579px] text-4xl lg:text-5xl font-extrabold leading-[56.32px] text-[#212121] montseratFont">
              SERVING ACROSS THE GLOBE
            </h3>
            <p className="font-medium text-[#212121] w-full md:w-[596px] pl-1 text-lg lg:text-xl leading-[28.36px] mb-8">
              Keeping track of inquiries is a fundamental aspect of effective
              customer service and organizational management. It ensures timely
              responses, fosters trust with clients, and aids in maintaining a
              comprehensive database of concerns and feedback.
            </p>

            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mt-4 mb-0 ml-0 mr-0 leading-[56.32px]">
                  23 +
                </h1>
                <p className="m-0 text-lg mt-1 leading-[24.36px] text-[#212121]">
                  Lorem Ipsum
                </p>
              </div>
              <div>
                <h1 className="text-4xl font-bold mt-4 mb-0 ml-0 mr-0 leading-[56.32px]">
                  105 +
                </h1>
                <p className="m-0 text-lg mt-1 leading-[24.36px] text-[#212121]">
                  Lorem Ipsum
                </p>
              </div>
              <div>
                <h1 className="text-4xl font-bold mt-4 mb-0 ml-0 mr-0 leading-[56.32px]">
                  50
                </h1>
                <p className="m-0 text-lg mt-1 leading-[24.36px] text-[#212121]">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/assets/greenImage.svg"
              className="mt-4 h-auto md:h-[791px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 