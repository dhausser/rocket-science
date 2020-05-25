import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LaunchConnection, Launch } from '../__generated__/graphql';

interface LaunchAPITypes {
  getAllLaunches(): Promise<Launch[]>;
  getLatestLaunch(): Promise<Launch>;
  getLaunchById(launchId: number): Promise<Launch>;
  getLaunchesByIds(launchIds: number): Promise<Launch[]>;
}

class LaunchAPI extends RESTDataSource {
  public baseURL = 'https://api.spacexdata.com/v3/';

  public willSendRequest(request: RequestOptions): void {
    request.headers.set('Authorization', this.context.auth);
  }

  public async getAllLaunches(): Promise<LaunchConnection | void[]> {
    const response = await this.get('launches');
    console.log('hello!');
    return Array.isArray(response) ? response : [];
  }

  public async getLatestLaunch(): Promise<Launch> {
    return this.get('launches/latest');
  }

  public async getLaunchById(id: number): Promise<Launch> {
    const res = await this.get('launches', { flight_number: id });
    return res[0];
  }

  public async getLaunchesByIds(launchIds: number[]): Promise<Launch[]> {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById(launchId)),
    );
  }
}

export { LaunchAPI, LaunchAPITypes };
