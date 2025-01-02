import Image from "next/image";

import { cn } from "../../lib/utils";

const UserImg = ({ imgSrc, customClasses }) => {
  return (
    <Image
      src={imgSrc}
      alt="user"
      width={500}
      height={500}
      className={cn(
        "absolute w-8 h-8 border-2 border-white object-cover object-top rounded-full",
        customClasses
      )}
    />
  );
};

const Users = ({ text1, text2 }) => {
  return (
    <div className="flex relative gap-5">
      <div className="flex items-center">
        <UserImg imgSrc="/users/1.jpg" customClasses="left-0" />
        <UserImg imgSrc="/users/2.jpg" customClasses="left-3" />
        <UserImg imgSrc="/users/3.jpg" customClasses="left-6" />
        <UserImg imgSrc="/users/4.png" customClasses="left-9" />
      </div>
      <div className="ml-16">
        <p className="text-xs">{text1}</p>
        <p className="font-semibold text-sm">{text2}</p>
      </div>
    </div>
  );
};

export default Users;
