import { RESTDataSource } from 'apollo-datasource-rest';
import { LaunchConnection, Launch } from '../__generated__/graphql';

interface LaunchId {
  launchId: number;
}

interface LaunchIds {
  launchIds: number[];
}

interface LaunchAPITypes {
  getAllLaunches(): Promise<Launch[]>;
  getLatestLaunch(): Promise<Launch>;
  getLaunchById(arg0: LaunchId): Promise<Launch>;
  getLaunchesByIds(arg0: LaunchIds): Promise<Launch[]>;
}

class LaunchAPI extends RESTDataSource {
  public baseURL = 'https://api.spacexdata.com/v3/';

  public async getAllLaunches(): Promise<LaunchConnection | void[]> {
    const response = await this.get('launches');
    return Array.isArray(response) ? response : [];
  }

  public async getLatestLaunch(): Promise<Launch> {
    return this.get('launches/latest');
  }

  public async getLaunchById({ launchId }: LaunchId): Promise<Launch> {
    const res = await this.get('launches', { flight_number: launchId });
    return res[0];
  }

  public async getLaunchesByIds({ launchIds }: LaunchIds): Promise<Launch[]> {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById({ launchId })),
    );
  }
}

export { LaunchAPI, LaunchAPITypes };
