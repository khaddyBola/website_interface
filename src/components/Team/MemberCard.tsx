"use client";
import Image from "next/image";
import React from "react";

const MemberCard = ({ member }: any) => {
  return (
    <div
      key={member.id}
      className=" shadow-md flex bg-[#DED7BF] hover:bg-transparent flex-col items-center "
    >
      <div className=" h-40 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          className="h-full w-full"
          width={254}
          height={206}
        />
      </div>
      <div className="w-full  p-4 ">
        <div>
          <h4 className="max-xsm:text-[10px] xsm:text-[14px] font-gt-alpina-trial italic font-[500]">
            {member.name}
          </h4>
        </div>
        <div>
          <h5 className="max-2xsm:text-[7px] 2xsm:text-[10px] xsm:text-[12px] text-[#56544E]">
            {member.position}
          </h5>
        </div>
        <div className="mt-2 flex gap-1 sm:gap-2">
          <div>
            <a
              href={`${member.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"img/linkedIn-icon.svg"}
                className="w-[16px] sm:w-[21px]"
                alt="linkedIn Icon"
                height={21}
                width={21}
              />
            </a>
          </div>
          <div>
            <a
              href={`${member.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"img/twitter-icon.svg"}
                alt="twitter Icon"
                className="w-[16px] sm:w-[21px]"
                height={21}
                width={21}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;