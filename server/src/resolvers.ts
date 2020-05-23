import { Context } from "./server";
import { LaunchConnection, Launch } from "./__generated__/graphql";
import { paginateResults } from "./utils";

export const resolvers = {
  Query: {
    launches: async (
      _,
      { pageSize = 20, after },
      { dataSources }: Context
    ): Promise<LaunchConnection> => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      allLaunches.reverse();

      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches,
      });

      return {
        launches,
        cursor: launches.length
          ? launches[launches.length - 1].launch_date_unix
          : null,
        hasMore: launches.length
          ? launches[launches.length - 1].launch_date_unix !==
            allLaunches[allLaunches.length - 1].launch_date_unix
          : false,
      };
    },
    launch: (_, { id }, { dataSources }: Context): Promise<Launch> => {
      return id
        ? dataSources.launchAPI.getLaunchById(id)
        : dataSources.launchAPI.getLatestLaunch();
    },
  },
  Mission: {
    // make sure the default size is 'large' in case user doesn't specify
    missionPatch: (mission, { size } = { size: "LARGE" }) => {
      return size === "SMALL"
        ? mission.missionPatchSmall
        : mission.missionPatchLarge;
    },
  },
};
