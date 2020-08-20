import {createConfigService, getConfigEnv} from '@spryrocks/config-react';
import resources from '../resources/env.tmp.json';

const configService = createConfigService(getConfigEnv(), undefined, resources);

export {
  //
  configService as ConfigService,
};
