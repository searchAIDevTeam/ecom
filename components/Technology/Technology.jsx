"use client"
import Image from "next/image";
import React, { useState } from "react";

const Technology = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showDetails0, setShowDetails0] = useState(false);
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);
    const [showDetails4, setShowDetails4] = useState(false);
    const [showDetails5, setShowDetails5] = useState(false);
  
   
  return (
    <>
      <div className="flex border mt-16 h-auto">
        <div className="w-[1160px]  mx-auto">
          <div className="w-[1160px] my-16">
            <ul className="style-none">
              <li className="relative mb-12  ">
                <figure
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech1.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">EMT™ Core</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    STABLE & ECO-FRIENDLY LVT CORE TECHNOLOGY
                  </dd>
                </dl>


                {showDetails && (
                  <div className="mt-14">
                    <div className="py-8 mb-12 ">
                      <div className=" flex">
                        <div className="w-[300px] pl-9 text-lg font-semibold">
                          NOX LVT has different <br />
                          structure that is more <br />
                          STABLE.
                        </div>
                        <div className="w-[860px] pr-9 text-base">
                          NOX’s outstanding expertise in IVP can develop highly
                          customized multi-layer structure for which each and
                          every <br /> layers are uniquely formulated. Its EMT™
                          Core structure ensures long-term supreme dimensional
                          stability. <br />
                          (Dimensional stability tests at 80°C for 6 hours :
                          Less than 0.07% variation)
                        </div>
                      </div>
                    </div>
                   
                    <div className="border-t-2 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <div className="flex py-6 mb-6">
                        <div className="w-1/2">
                          <span
                            className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                            style={{
                              backgroundImage: 'url("/Technology/stable.png")',
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "0 0",
                            }}
                          >
                            Stable
                          </span>

                          <div className="mt-14 ml-10">
                            <p className="mb-6">
                              The most stable LVT structure
                            </p>
                            <div>
                              <Image
                        
                                width={490}
                                height={277}
                                src="/Technology/graph1.png"
                                alt="graph1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <span
                            className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                            style={{
                              backgroundImage: 'url("/Technology/ecofriendly.png")',
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "0 0",
                            }}
                          >
                            ECO - Friendly
                          </span>

                          <div className="mt-14 ml-10">
                            <p className="mb-6">
                              The most stable LVT structure
                            </p>
                            <div>
                              <Image
                               
                                width={490}
                                height={277}
                                src="/Technology/graph2.png"
                                alt="graph2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="relative mb-12 ">
               
                <figure
                  onClick={() => setShowDetails0(!showDetails0)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer "
                >
                  <div>
                    <Image
                   
                      width={1152}
                      height={138}
                      src="/Technology/tech2.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">EPT™ Shield</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    SAFE & STRONG 2-FOLD LVT SURFACE SHIELD TECHNOLOGY
                  </dd>
                </dl>

              

                {showDetails0 && (
                  <div className="mt-14">
                    <div className="py-8 mb-12 ">
                      <div className=" flex">
                        <div className="w-[300px] pl-9 text-lg font-semibold">
                          NOX LVT <br />
                          is proven to be SAFE.
                        </div>
                        <div className="w-[860px] pr-9 text-base">
                          Without using Nano silver (controversial to be harmful
                          for human health), NOX EPT™ anti-bacterial ingredient
                          removes 99.9% of bacteria. EPT™ anti-bacterial
                          ingredient is proven to be safe by US EPA registered.{" "}
                          <br />* US EPA： US Environmental Protection Agency
                        </div>
                      </div>
                    </div>
                   
                    <div className="border-t-2 border-b-1 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <span
                        className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                        style={{
                          backgroundImage: 'url("/Technology/safe.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "0 0",
                        }}
                      >
                        Safe
                      </span>

                      <div className="pt-[30px] pb-[50px] pl-[265px] ">
                        <p className="text-base mb-5">
                          Elimination process of MRSA* proven to eliminate 99.9%
                          of bacteria & viruses
                        </p>
                        <div className="flex gap-5">
                          <div className="w-1/2 border">
                            <div>
                              <Image
                                width={418}
                                height={145}
                                src="/Technology/photo1.png"
                                alt="tech1"
                              />
                            </div>
                            <p className="text-center text-base mt-4 text-blue-700">
                              Protected with NOX EPT™ Shield coating
                            </p>
                          </div>
                          <div className="w-1/2 border">
                            <div>
                              <Image
                                width={418}
                                height={145}
                                style={{ width: "100%", height: "auto" }}
                                src="/Technology/photo2.png"
                                alt="tech1"
                              />
                            </div>
                            <p className="text-center text-base mt-4">
                              Unprotected Surface
                            </p>
                          </div>
                        </div>
                        <div className=" mt-8 flex">
                          <span className="text-blue-700 text-lg">*MRSA</span>
                          <p className="text-base ml-6">
                            In our everyday lives, we constantly come into
                            contact with a variety of bacteria, some of which
                            are particularly harmful to our health, including,
                            for example, methicillin resistant
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-1 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <span
                        className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                        style={{
                          backgroundImage: 'url("/Technology/strong.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "0 0",
                        }}
                      >
                        Strong
                      </span>

                      <div className="pt-[30px] pb-[50px] pl-[265px] ">
                        <p className="text-base mb-5">
                          Superior scratch-resistance proven to be highly
                          durable against scratches
                        </p>
                        <div className="flex gap-5">
                          <div className="w-1/2 border">
                            <div>
                              <Image
                                width={418}
                                height={145}
                                src="/Technology/photo3.png"
                                alt="tech1"
                              />
                            </div>
                            <p className="text-center text-base mt-4 text-blue-700">
                              NOX EPT™ Shield coating
                            </p>
                          </div>
                          <div className="w-1/2 border">
                            <div>
                              <Image
                                width={418}
                                height={145}
                                src="/Technology/photo4.png"
                                alt="tech1"
                              />
                            </div>
                            <p className="text-center text-base mt-4">
                              Regular PU coating
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="relative mb-12 ">
                <figure
                  onClick={() => setShowDetails1(!showDetails1)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech3.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">EPT™ Shield</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    SURFACE COATING TECHNOLOGY
                  </dd>
                </dl>

                

                {showDetails1 && (
                  <div className="mt-14">
                    <div className="border-t-2 border-b-1 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <span
                        className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                        style={{
                          backgroundImage: 'url("/Technology/strong.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "0 0",
                        }}
                      >
                        Anti
                      </span>

                      <div className="py-[17px] pl-[60px] text-center ">
                        <p className="text-base mb-5">
                          - Industry's No.1 scratch-resistance coating
                          technology <br />- Micro scratch rating: MSR B1 ~ MSR
                          B2 (EN 16094)
                        </p>
                      </div>
                    </div>
                    <div className="border-t-1 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <span
                        className="inline-block relative top-6 left-4 pl-16 text-xl font-semibold text-gray-900 leading-44"
                        style={{
                          backgroundImage: 'url("/Technology/strong.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "0 0",
                        }}
                      >
                        Anti Slip
                      </span>

                      <div className="py-[17px] pl-[60px] text-center">
                        <p className="text-base mb-5">
                          - Industry's No.1 slip-resistance coating technology{" "}
                          <br />- Minimizing risk or danger regarding slipper
                          flooring <br />
                          - Offering maximum slip resistance <br />
                          * WET PENDULUM TEST = P3 (AS 4586) <br />* RAMP TEST =
                          R10 (DIN 51130)
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative mb-12">
                <figure
                  onClick={() => setShowDetails2(!showDetails2)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech4.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">NOXGENESIS</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    AdSVANCED RIGID CORE TECHNOLOGY
                  </dd>
                </dl>

                

                {showDetails2 && (
                  <div className="mt-14">
                    <div
                      className="border-t-2 border-b-1 border-l-0 border-r-0 border-solid border-gray-800 "
                      style={{
                        backgroundImage: 'url("/Technology/techicon1.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "7px 25px",
                      }}
                    >
                      <div className="py-[17px] pl-[66px] ">
                        <h1 className="font-semibold text-xl">
                          {" "}
                          Excellent Rigidness
                        </h1>
                        <p className="text-base mb-5 mt-8">
                          - Superior dimensional stability against temperature
                          changes up to 176 degrees (80°C) <br />
                          - Better impact resistance over 1,500 PSI compared to
                          250 PSI with WPC <br />- Superior profile strength,
                          eliminating the brittle profiles that are inherent to
                          WPC
                        </p>
                      </div>
                    </div>
                    <div
                      className="border-t-1 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 "
                      style={{
                        backgroundImage: 'url("/Technology/techicon2.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "7px 25px",
                      }}
                    >
                      <div className="py-[17px] pl-[66px] ">
                        <h1 className="font-semibold text-xl">
                          {" "}
                          Eliminates the drawbacks of Rigid Core / SPC
                        </h1>
                        <p className="text-base mb-5 mt-8">
                          - Better flexibility and performance than stiff rigid
                          core products <br />
                          - Elimination of “trampoline effect” with unleveled
                          subfloors
                          <br />
                          - A fraction of the weight (about 40% lighter than
                          regular rigid board), reducing freight costs <br />-
                          Superior sound absorption
                        </p>
                      </div>
                      <div className="border">
                        <div className="mt-10 mb-12 pl-16">
                          <Image
                            src="/Technology/certiarea.png"
                            width={72}
                            height={72}
                            alt="certiarea"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative mb-12 ">
                <figure
                  onClick={() => setShowDetails3(!showDetails3)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech5.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">MCT</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    MATRIX CORE TECHNOLOGY
                  </dd>
                </dl>


                {showDetails3 && (
                  <div className="mt-14">
                    <div className="border-t-2 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl">
                          Elimination of subfloor telegraphing over cracks or
                          imperfect subfloors
                        </h1>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl">
                          Reduction of installation cost and time
                        </h1>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl">
                          Provision of easy of usage and greater stability with
                          fiberglass stabilization layer
                        </h1>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl">
                          Applicable to all LVT product types (glue-down / loose
                          lay / click LVT)
                        </h1>
                      </div>
                      <div className="pl-40 border pt-8 pb-12">
                        <div className="flex gap-10">
                          <div>
                            <Image
                              src="/Technology/photo5.png"
                              height={180}
                              width={420}
                              alt="tech5"
                            />
                            <p className="text-center text-base mt-4 text-blue-700">
                              NOX MCT™ LVT
                            </p>
                          </div>
                          <div>
                            <Image
                              src="/Technology/photo6.png"
                              height={180}
                              width={420}
                              alt="tech5"
                            />
                            <p className="text-center text-base mt-4">
                              NOX MCT™ LVT
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border">
                        <div className="mt-10 mb-12 pl-16">
                          <Image
                            src="/Technology/certiarea.png"
                            width={72}
                            height={72}
                            alt="certiarea"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative mb-12 ">
                <figure
                  onClick={() => setShowDetails4(!showDetails4)}
                  className="text-blue-500 underline border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech6.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">SOUNDPROTEC</dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    ACOUSTICS PERFORMANCE TECHNOLOGY
                  </dd>
                </dl>

              

                {showDetails4 && (
                  <div className="mt-14">
                    <div className="border-t-2 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl inline mr-12">
                          Industry’s No.1 acoustics
                        </h1>
                        <h2 className="text-lg mr-12 inline">
                          sound reduction
                        </h2>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl inline mr-12">
                          Superior dimensional stability
                        </h1>
                        <h2 className="text-lg mr-12 inline">
                          with NOX EMT™ Core multi-layer technology
                        </h2>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl inline mr-12">
                          Great Foot
                        </h1>
                        <h2 className="text-lg mr-12 inline">
                          Comfort with high-density cushion layer absorbing the
                          impact
                        </h2>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <h1 className="font-semibold text-xl inline mr-12">
                          Applicable to NOX ORCHID+, ECOCLICK+, ECOLAY+,
                          SUPREMWOOD+, SUPREMSTONE+
                        </h1>
                      </div>
                      <div
                        className="pl-[70px] border py-6"
                        style={{
                          backgroundImage: 'url("/Technology/techicon2.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "7px 25px",
                        }}
                      >
                        <div>
                          <h1 className="font-semibold text-xl inline mr-12">
                            Test information
                          </h1>
                          <h2 className="text-lg mr-12  mt-8">
                            Product tested: 3.5MM NOX LVT
                          </h2>
                          <div className="my-12">
                            <span className="text-lg mr-12  ">
                              {" "}
                              ISO 10140-3 ：19~20DB noise reduction
                            </span>
                            <span className="text-lg mr-12   pl-8">
                              IIC (ASTM E492) ： 56 (without dropceiling),
                              {/* <br /> */}
                              67 (with dropceiling)
                            </span>
                          </div>

                          <div className="pl-9 pt-8 pb-12">
                            <div className="flex ">
                              <div>
                                <Image
                                  src="/Technology/photo7.png"
                                  height={492}
                                  width={1110}
                                  alt="tech5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border">
                        <div className="mt-10 mb-12 pl-16">
                          <Image
                            src="/Technology/certiarea2.png"
                            width={480}
                            height={77}
                            alt="certiarea"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative mb-12 ">
                <figure
                  onClick={() => setShowDetails5(!showDetails5)}
                  className="text-blue-500 underline  border border-solid border-gray-300 border-l-[7px] cursor-pointer"
                >
                  <div>
                    <Image
                      width={1152}
                      height={138}
                      src="/Technology/tech7.png"
                      alt="tech1"
                    />
                  </div>
                </figure>
                <dl className="absolute top-12 right-20 text-right text-white">
                  <dt className="text-3xl font-semibold">
                    Premium Edge & Grout Technology
                  </dt>
                  <dd className="mt-2 text-sm text-gray-300 font-medium uppercase">
                    A REALISTIC DETAILS OF NATURAL MATERIALS
                  </dd>
                </dl>

            

                {showDetails5 && (
                  <div className="mt-14">
                    <div className="border-t-2 border-b-2 border-l-0 border-r-0 border-solid border-gray-800 ">
                      <div className="border-t">
                        <div
                          className="pl-[70px]  py-6"
                          style={{
                            backgroundImage: 'url("/Technology/techicon2.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "7px 25px",
                          }}
                        >
                          <h1 className="font-semibold text-xl mr-12">
                            BUILT IN GROUT
                          </h1>
                        </div>

                        <div className="pl-[70px]  py-6 flex">
                          <span className="w-[55%]">
                            <p className="inline leading-7 text-base">
                              The exclusive NOX built-in grout system, which the
                              grout of ceramic tiles is <br /> built into,
                              replicates the elegant appearance of the material
                              more realistically <br /> without having to worry
                              about fractions or cracks.
                            </p>
                          </span>
                          <div className="w-[45%]">
                            <Image
                              width={550}
                              height={187}
                              src="/Technology/photo8.png"
                              alt="tech1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-t">
                        <div
                          className="pl-[70px]  py-6"
                          style={{
                            backgroundImage: 'url("/Technology/techicon2.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "7px 25px",
                          }}
                        >
                          <h1 className="font-semibold text-xl mr-12">
                            NATURAL GROUT
                          </h1>
                        </div>

                        <div className="pl-[70px]  py-6 flex">
                          <span className="w-[55%]">
                            <p className="inline leading-7 text-base">
                              The edge of the tile is finished with the natural
                              grout of the stone tile built in.
                            </p>
                          </span>
                          <div className="w-[45%]">
                            <Image
                              width={450}
                              height={147}
                              src="/Technology/photo9.png"
                              alt="tech19"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-t">
                        <div
                          className="pl-[70px]  py-6"
                          style={{
                            backgroundImage: 'url("/Technology/techicon2.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "7px 25px",
                          }}
                        >
                          <h1 className="font-semibold text-xl mr-12">
                            RUSTIC EDGE
                          </h1>
                        </div>

                        <div className="pl-[70px]  py-6 flex">
                          <span className="w-[55%]">
                            <p className="inline leading-7 text-base">
                              The edge of the tile is finished, mimicking the
                              natural rough and rustic texture <br /> of wood.
                            </p>
                          </span>
                          <div className="w-[45%]">
                            <Image
                              width={450}
                              height={147}
                              src="/Technology/photo10.png"
                              alt="photo10"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-t">
                        <div
                          className="pl-[70px]  py-6"
                          style={{
                            backgroundImage: 'url("/Technology/techicon2.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "7px 25px",
                          }}
                        >
                          <h1 className="font-semibold text-xl mr-12">
                            BEVEL / ROUND EDGE
                          </h1>
                        </div>

                        <div className="pl-[70px]  py-6 flex">
                          <span className="w-[55%]">
                            <p className="inline leading-7 text-base">
                              Providing a seamless transition between the boards
                              and preventing shrinkage <br /> and expansion by
                              cutting out the edge diagonal or round.
                            </p>
                          </span>
                          <div className="w-[45%]">
                            <Image
                              width={486}
                              height={147}
                              src="/Technology/photo11.png"
                              alt="photo11"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border">
                        <div className="mt-10 mb-12 pl-16">
                          <Image
                            src="/Technology/certiarea2.png"
                            width={480}
                            height={77}
                            alt="certiarea2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
