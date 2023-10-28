"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {
        //Handle upload later
    };
    return (
        <div> 
            <div className="flex flex-col">
                <div
                className="flex
                items-center
                justify-between
                px-5
                pt-4">
                    <div
                    className="inline-flex
                    items-center
                    gap-x-2">
                        <TbPlaylist cassName ="text-neutral-400" size={26} />
                        <p
                        className="text-neutral-400
                        font-medium
                        text-md">
                            Your Library
                        </p>
                    </div>
                    <AiOutlinePlus/>
                </div>
            </div>
        </div>
    );
}

export default Library;