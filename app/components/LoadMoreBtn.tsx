"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoadMoreBtn() {
  const [loadMore, setLoadMore] = useState<number>(1);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", loadMore.toString());
    replace(`/?${params.toString()}`);
  }, [loadMore]);
  return (
    <Button
      className="justify-self-center"
      onClick={() => {
        setLoadMore(loadMore + 1);
      }}
    >
      Load More
    </Button>
  );
}
export default LoadMoreBtn;
