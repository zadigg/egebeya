function Footer() {
  return (
    <div>
      <div className="">
        <footer className=" body-font bg-gray-700 p-10 text-white">
          <div className="flex w-4/5 mx-auto ">
            <div className=" w-2/4">
              <div className="flex  justify-center  p-4">
                <div>
                  <div className="flex justify-center  text-base md:text-xl md:w-3/4 mx-auto space-x-5 mt-10  ">
                    <div>
                      <img
                        src="/fb.png"
                        width="40px"
                        height="40px"
                        alt="FACEBOOK"
                      />
                    </div>
                    <div>
                      <img
                        src="/telegram.png"
                        width="40px"
                        height="40px"
                        alt="telegram"
                      />
                    </div>
                    <div>
                      <img
                        src="/whatsapp.png"
                        width="40px"
                        height="40px"
                        alt="whatsapp"
                      />
                    </div>
                    <div>
                      <img
                        src="/linkedin.png"
                        width="40px"
                        height="40px"
                        alt="linkedin"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className=" w-2/4">
              <div className="flex  justify-center   p-4">
                <div>
                  <div className="flex flex-col justify-center text-base md:text-xl md:w-3/4 mx-auto  ">
                    {/* ኢ-ገበያ አምራቾችን ከተጠቃሚዎች ጋር የሚያገናኝ በይነ፟-መረብ  */}

                    <div>
                      <p>Ahadu Softwares</p>
                    </div>

                    <div>
                      <p>+251980114281</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
