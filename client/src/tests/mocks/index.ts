import { GET_LAUNCH_DETAILS } from "../../components/launch-details";
import { GET_LAUNCHES } from "../../components/launch-list";

const mocks = [
  {
    request: {
      query: GET_LAUNCH_DETAILS,
      variables: {
        id: "109",
      },
    },
    result: {
      data: {
        launch: {
          mission_name: "Mock mission name",
          launch_site: {
            site_name_long: "Mock site name long",
          },
          details: "Mock details",
        },
      },
    },
  },
  {
    request: {
      query: GET_LAUNCHES,
    },
    result: {
      data: {
        launches: {
          cursor: "110",
          hasMore: false,
          launches: [
            {
              flight_number: "109",
              mission_name: "Mission name 1",
              rocket: {
                rocket_name: "Rocket name 1",
              },
              launch_site: {
                site_id: "Launch site id 1",
                site_name: "Launch site name 1",
                site_name_long: "Launch site name long 1",
              },
            },
            {
              flight_number: "110",
              mission_name: "Mission name 2",
              rocket: {
                rocket_name: "Rocket name 2",
              },
              launch_site: {
                site_id: "Launch site id 2",
                site_name: "Launch site name 2",
                site_name_long: "Launch site name long 2",
              },
            },
          ],
        },
      },
    },
  },
];

export { mocks };
