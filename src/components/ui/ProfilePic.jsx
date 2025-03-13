import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import React from "react";

function ProfilePic({
  width = 40,
  height = 40,
  size = "size-[40px]",
  text = "text-xl",
}) {
  const { user, isLoading } = useAuth();
  let str = "";
  if (user) {
    str = user.name[0];
  }
if(!user)return "oh"
  return (
    <div>
      {user.avatar === null ? (
        <div
          className={`${size} ${text} rounded-full bg-gray-400 flex items-center justify-center text-white `}
        >
          {str}
        </div>
      ) : (
        <img
          className="rounded-full"
          width={width}
          height={height}
          src={user?.avatarUrl}
        ></img>
      )}
    </div>
  );
}

export default ProfilePic;
