import Image from "next/image";
import { useRouter } from "next/router";

function Main() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Image
          src="/slider.jpg"
          className="md:col-span-full"
          layout="responsive"
          width={500}
          height={200}
          alt="web Logo"
        />
      </div>

      <div className="flex w-4/5 mx-auto text-black bg-gray-200 ">
        <div className=" w-2/4">
          <div className="flex flex-col justify-center  p-4">
            <div className="flex justify-center text-xl md:text-4xl p-2 mb-3">
              Welcome to E-Gebeya
            </div>
            <div>
              <div className="flex justify-center  text-base md:text-4xl md:w-3/4 mx-auto  ">
                E-Gebeya is a two-way bidding system responsible for connecting
                the farmer with consumer via website.
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className=" w-2/4">
          <div className="flex flex-col justify-center   p-4">
            <div className="flex justify-center text-xl md:text-4xl p-2">
              እንኳን ወደ ኢ-ገበያ በደህና መጡ
              <p></p>
            </div>
            <div>
              <div className="flex justify-center text-base sm:text-xl md:text-3xl md:w-3/4 mx-auto  ">
                {/* ኢ-ገበያ አምራቾችን ከተጠቃሚዎች ጋር የሚያገናኝ በይነ፟-መረብ  */}
                ኢ-ገበያ ገበሬውን ከሸማች ለማገናኘት ኃላፊነት ያለው በበይነ፟-መረብ የሚሰራ የጨረታ ሥርዓት ነው።
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-3">
        <button
          onClick={() => router.push("/auction")}
          class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:text-3xl"
        >
          ወደ ጨረታ
        </button>
      </div>
    </div>
  );
}

export default Main;
