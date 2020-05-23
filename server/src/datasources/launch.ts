import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import {
  LaunchConnection,
  Launch,
  Mission,
  Rocket,
} from "../__generated__/graphql";

interface LaunchAPITypes {
  getLatestLaunch(): Promise<Launch>;
  getAllLaunches(): Promise<Launch[]>;
  getLaunchById(launchId: number): Promise<Launch>;
  getLaunchesByIds(launchIds: number): Promise<Launch[]>;
}

interface LaunchResponse {
  flight_number: number;
  launch_date_unix: string;
  launch_site: {
    site_name: string;
  };
  mission_name: string;
  links: {
    mission_patch_small: string;
    mission_patch: string;
  };
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
}

class LaunchAPI extends RESTDataSource {
  public baseURL = "https://api.spacexdata.com/v3/";

  public willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.auth);
  }

  // leaving this inside the class to make the class easier to test
  private launchReducer(launch: LaunchResponse): Launch {
    return {
      id: `${launch.flight_number}`,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
      isBooked: false,
    };
  }

  public async getAllLaunches() {
    const response = await this.get("launches");

    console.log(response);

    // transform the raw launches to a more friendly
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  public async getLatestLaunch() {
    const response = await this.get("launches/latest");
    console.log(response);
    return this.launchReducer(response);
  }

  public async getLaunchById(id: number) {
    const res = await this.get("launches", { flight_number: id });
    return this.launchReducer(res[0]);
  }

  public async getLaunchesByIds(launchIds: number[]) {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById(launchId))
    );
  }
}

export { LaunchAPI, LaunchAPITypes };
