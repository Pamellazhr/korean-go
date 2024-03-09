import Video360 from "@/app/components/Video360";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return <Video360 id={params.id} />;
}

export default page;
