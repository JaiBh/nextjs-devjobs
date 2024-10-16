import { jobs } from "./jobs";

export const fetchJobs = ({
  search = "",
  location = "",
  fullTime = false,
  page = 1,
}: {
  search: string;
  location: string;
  fullTime: boolean;
  page: number;
}) => {
  console.log(page);
  let displayLoadMore = true;
  let jobsPerPage = 6;
  if (!search && !location && !fullTime) {
    if (jobs.length <= jobsPerPage * page) {
      displayLoadMore = false;
    }
    return { fetchedJobs: jobs.slice(0, page * jobsPerPage), displayLoadMore };
  }
  let filteredJobs = jobs
    .filter((job) => job.position.toLowerCase().includes(search.toLowerCase()))
    .filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  if (fullTime) {
    filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
  }
  if (filteredJobs.length <= jobsPerPage * page) {
    displayLoadMore = false;
  }
  return {
    fetchedJobs: filteredJobs.slice(0, page * jobsPerPage),
    displayLoadMore,
  };
};
