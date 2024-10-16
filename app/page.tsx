import { fetchJobs } from "@/utils/actions";
import JobsList from "./components/JobsList";
import SearchBar from "./components/SearchBar";

function page({
  searchParams,
}: {
  searchParams: {
    search?: string;
    location?: string;
    fullTime?: boolean;
    page?: number;
  };
}) {
  const search = searchParams.search || "";
  const location = searchParams.location || "";
  const fullTime = searchParams.fullTime || false;
  const page = searchParams.page || 1;
  const { fetchedJobs, displayLoadMore } = fetchJobs({
    search,
    location,
    fullTime,
    page,
  });
  return (
    <>
      <section>
        <div className="section-center relative pt-[6.125rem] lg:pt-[9.125rem]">
          <div className="absolute w-full top-0 left-0 translate-y-[-50%]">
            <SearchBar></SearchBar>
          </div>
          <JobsList
            jobs={fetchedJobs}
            displayLoadMore={displayLoadMore}
          ></JobsList>
        </div>
      </section>
    </>
  );
}
export default page;
