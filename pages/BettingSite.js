import Header from "../components/Header";

function BettingSite() {
  function myMessage() {
    alert("Wait for Confirmation Via Your Phone");
  }

  return (
    <div className="">
      <Header />

      <div className="w-8/12 mx-auto bg-gray-100">
        <div class=" shadow rounded-lg p-6">
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="name" class="bg-white text-gray-600 px-1">
                    First name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="name"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  class="py-1 px-1 bg-gray-300 text-gray-900 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="lastname" class="bg-white text-gray-600 px-1">
                    Last name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="lastname"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  class="py-1 px-1  bg-gray-300 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="username" class="bg-white text-gray-600 px-1">
                    City *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="username"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  class="py-1 px-1 bg-gray-300 outline-none block h-full w-full"
                />
              </p>
            </div>
            {/*  */}
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="phone" class="bg-white text-gray-600 px-1">
                    Phone Number *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="number"
                  autocomplete="false"
                  tabindex="0"
                  type="number"
                  class="py-1 px-1 bg-gray-300 outline-none block h-full w-full"
                />
              </p>
            </div>
            {/*  */}
            {/*  */}
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="phone" class="bg-white text-gray-600 px-1">
                    Additional Phone Number *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="number"
                  autocomplete="false"
                  tabindex="0"
                  type="number"
                  class="py-1 px-1 bg-gray-300 outline-none block h-full w-full"
                />
              </p>
            </div>
            {/*  */}
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="username" class="bg-white text-gray-600 px-1">
                    Company Name <span className="text-xs">(if available)</span>{" "}
                    *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="username"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  class="py-1 px-1 bg-gray-300 outline-none block h-full w-full"
                />
              </p>
            </div>
          </div>
          <div className="border-t mt-6 pt-3 flex justify-center">
            <button
              onClick={myMessage}
              class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-xl"
            >
              Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BettingSite;
