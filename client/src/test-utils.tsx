import React from 'react';
import { render } from '@testing-library/react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

type RenderApolloOptions = {
  mocks?: MockedResponse[];
  addTypename?: any;
  defaultOptions?: any;
  cache?: any;
  resolvers?: any;
  [st: string]: any;
};

const mockLaunch = {
  flight_number: 1,
  mission_name: 'FalconSat',
  mission_id: [],
  upcoming: false,
  launch_year: '2006',
  launch_date_unix: 1143239400,
  launch_date_utc: '2006-03-24T22:30:00.000Z',
  launch_date_local: '2006-03-25T10:30:00+12:00',
  is_tentative: false,
  tentative_max_precision: 'hour',
  rocket: {
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'Merlin A',
    first_stage: {
      cores: [
        {
          core_serial: 'Merlin1A',
          flight: 1,
          block: null,
          reused: false,
          land_success: null,
          landing_intent: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      block: 1,
      payloads: [
        {
          payload_id: 'FalconSAT-2',
          norad_id: [],
          reused: false,
          customers: ['DARPA'],
          nationality: 'United States',
          manufacturer: 'SSTL',
          payload_type: 'Satellite',
          payload_mass_kg: 20,
          payload_mass_lbs: 43,
          orbit: 'LEO',
          orbit_params: {
            reference_system: 'geocentric',
            regime: 'low-earth',
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: 400,
            apoapsis_km: 500,
            inclination_deg: 39,
            period_min: null,
            lifespan_years: null,
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null,
          },
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: [],
  telemetry: {
    flight_club: null,
  },
  reuse: {
    core: false,
    side_core1: false,
    side_core2: false,
    fairings: false,
    capsule: false,
  },
  launch_site: {
    site_id: 'kwajalein_atoll',
    site_name: 'Kwajalein Atoll',
    site_name_long: 'Kwajalein Atoll Omelek Island',
  },
  launch_success: false,
  links: {
    mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    article_link:
      'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
    wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
    flickr_images: [],
  },
  details: 'Engine failure at 33 seconds and loss of vehicle',
  static_fire_date_utc: '2006-03-17T00:00:00.000Z',
  static_fire_date_unix: 1142553600,
};

const renderApollo = (
  node: any,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: RenderApolloOptions = {},
): any => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options,
  );
};

export * from '@testing-library/react';
export { renderApollo, mockLaunch };
