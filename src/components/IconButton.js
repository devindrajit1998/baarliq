import React from 'react'
import { Button } from "@material-tailwind/react";
import {
  BookmarkIcon,
} from "@heroicons/react/24/outline";

function IconButton() {
  return (
    <div className="flex items-center gap-4">
      <Button className="flex items-center gap-3">
        <BookmarkIcon strokeWidth={2} className="h-5 w-5" /> Beer
      </Button>
    </div>
  )
}

export default IconButton