import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import {
  LaunchConnection,
  Launch,
  Mission,
  Rocket,
} from "../__generated__/graphql";

interface LaunchAPITypes {
  getAllLaunches(): Promise<Launch[]>;
  getLatestLaunch(): Promise<Launch>;
  getLaunchById(launchId: number): Promise<Launch>;
  getLaunchesByIds(launchIds: number): Promise<Launch[]>;
}

class LaunchAPI extends RESTDataSource {
  public baseURL = "https://api.spacexdata.com/v3/";

  public willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.auth);
  }

  public async getAllLaunches() {
    const response = await this.get("launches");
    return Array.isArray(response) ? response : [];
  }

  public async getLatestLaunch() {
    return this.get("launches/latest");
  }

  public async getLaunchById(id: number) {
    const res = await this.get("launches", { flight_number: id });
    return res[0];
  }

  public async getLaunchesByIds(launchIds: number[]) {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById(launchId))
    );
  }
}

export { LaunchAPI, LaunchAPITypes };
