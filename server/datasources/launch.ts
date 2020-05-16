import { RESTDataSource, RequestOptions  } from 'apollo-datasource-rest';

interface Launch {
  flight_number: number;
  launch_date_unix: string;
  launch_site: {
    site_name: string
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
  // constructor() {
  //   super();
  //   this.baseURL = 'https://movies-api.example.com/';
  // }

  // baseURL = 'https://api.spacexdata.com/v2/'
  
  get baseURL() {
    console.log(this.context.env)
    if (this.context.env === 'development') {
      return 'https://api.spacexdata.com/v2/';
    } else {
      return 'https://api.spacexdata.com/v2/';
    }
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.auth);
  }

  // leaving this inside the class to make the class easier to test
  launchReducer(launch: Launch) {
    return {
      id: launch.flight_number || 0,
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
    };
  }

  async getAllLaunches() {
    const response = await this.get('launches');

    // transform the raw launches to a more friendly
    return Array.isArray(response)
      ? response.map(launch => this.launchReducer(launch)) : [];
  }

  async getLaunchById({ launchId }: { launchId: string }) {
    const res = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(res[0]);
  }

  async getLaunchesByIds({ launchIds }: { launchIds: string[] }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId })),
    );
  }
}

export default LaunchAPI;
