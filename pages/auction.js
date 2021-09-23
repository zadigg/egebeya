import Header from "../components/Header";
import Image from "next/image";
import { useRouter } from "next/router";

function auction() {
  const router = useRouter();

  return (
    <auction>
      <Header />
      <div className="bg-gray-200">
        <div className="bg-white w-3/6 mx-auto mt-3 flex">
          <div className="w-4/12">
            <Image src="/barley.jpg" width={250} height={250} alt="web Logo" />
          </div>
          <div className="w-8/12 mt-3 ">
            <div>
              <div className="  mx-2">
                <p className="text-xl mx3">ገብስ</p>

                <div className="flex flex-col ">
                  <span className="font-bold">Current Price</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 12000 ETB </p>

                  <span className="font-bold">Amount</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 240 Kilo </p>

                  <span className="font-bold">Description</span>
                  <p className="bg-gray-200 p-3 rounded-md">
                    {" "}
                    Barley 100% Natural NO GMO Place of Origin: Ethiopia,
                    southern bale region 14% max Grain impurity: 5% max{" "}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/BettingSite")}
              class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-xl mx-2 mt-2"
            >
              ለመመደብ
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white w-3/6 mx-auto mt-3 flex">
          <div className="w-4/12">
            <Image src="/maize.jpg" width={250} height={250} alt="web Logo" />
          </div>
          <div className="w-8/12 mt-3 ">
            <div>
              <div className="  mx-2">
                <p className="text-xl mx3">በቆሎ</p>

                <div className="flex flex-col ">
                  <span className="font-bold">Current Price</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 1332 ETB </p>

                  <span className="font-bold">Amount</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52">
                    {" "}
                    3 Pacs, 120Kilo{" "}
                  </p>

                  <span className="font-bold">Description</span>
                  <p className="bg-gray-200 p-3 rounded-md">
                    {" "}
                    Corn meal is a palatable feed of high energy and nutritional
                    efficiency, but with a protein content of 8.4%, and lack of
                    lysine and tryptophan.
                    <p>Packing:In 40kgs plastic bags.</p>
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/BettingSite")}
              class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-xl mx-2 mt-2"
            >
              ለመመደብ
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white w-3/6 mx-auto mt-3 flex">
          <div className="w-4/12">
            <Image src="/wheat.jpg" width={250} height={250} alt="web Logo" />
          </div>
          <div className="w-8/12 mt-3 ">
            <div>
              <div className="  mx-2">
                <p className="text-xl mx3">ስንዴ</p>

                <div className="flex flex-col ">
                  <span className="font-bold">Current Price</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52">
                    {" "}
                    100000 ETB{" "}
                  </p>

                  <span className="font-bold">Amount</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 9000 Kilo </p>

                  <span className="font-bold">Description</span>
                  <p className="bg-gray-200 p-3 rounded-md">
                    {" "}
                    Wheat Grain 100% Natural NO GMO Place of Origin: Ethiopia,
                    Sidama region 2, 3 and 4 class Grain Unit (Grain volume
                    weight): 720 g/l
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/BettingSite")}
              class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-xl mx-2 mt-2"
            >
              ለመመደብ
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white w-3/6 mx-auto mt-3 flex">
          <div className="w-4/12">
            <Image src="/Sorghums.jpg" width={250} height={250} alt="Sorghum" />
          </div>
          <div className="w-8/12 mt-3 ">
            <div>
              <div className="  mx-2">
                <p className="text-xl mx3">ማሽላ</p>

                <div className="flex flex-col ">
                  <span className="font-bold">Current Price</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 31500 ETB </p>

                  <span className="font-bold">Amount</span>
                  <p className="bg-gray-200 p-1 rounded-md w-52"> 1000 Kilo </p>

                  <span className="font-bold">Description</span>
                  <p className="bg-gray-200 p-3 rounded-md">
                    {" "}
                    Sorghum culms are stout, erect, with supporting roots on
                    basal nodes.Leaf sheath glabrous or slightly powdery;Leaf
                    tongue dural, apex rounded, margin ciliated.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/BettingSite")}
              class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-xl mx-2 mt-2"
            >
              ለመመደብ
            </button>
          </div>
        </div>
      </div>
    </auction>
  );
}

export default auction;
