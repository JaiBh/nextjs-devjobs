import SingleJob from "./SingleJob";
import { Job } from "@/utils/types";
import LoadMoreBtn from "./LoadMoreBtn";

function JobsList({
  jobs,
  displayLoadMore,
}: {
  jobs: Job[];
  displayLoadMore: boolean;
}) {
  return (
    <div className="grid gap-6 md:gap-10 mb-12">
      <ul className="grid gap-12 auto-rows-fr md:gap-y-[4.125rem] md:gap-x-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
        {jobs.map((job) => {
          return <SingleJob job={job} key={job.id}></SingleJob>;
        })}
      </ul>
      {displayLoadMore && <LoadMoreBtn></LoadMoreBtn>}
    </div>
  );
}
export default JobsList;
