import { defineStore } from "pinia";
import { PlatformInterface } from "../interfaces/PlatformInterface";
import { getPlatformConfig  } from "../services/PlatformService";
import { setCssVar } from "quasar";

interface State {
  config: PlatformInterface,
}

export const platformStore = defineStore({
  id: "platformStore",

  state: (): State => ({
    config: {}
  }),
  actions: {
    getConfig() {
        getPlatformConfig()
          .then((response: any) => {
            this.config = response[0]
            setCssVar("primary", this.config.primary_color);
            setCssVar("secundary", this.config.secundary_color);
          })
          .catch((error: any) => {
            console.log("Error en crear nota: ", error);
          });
      },
  },

  getters: {
    getConfigPlatform(): PlatformInterface{
      return this.config
    }
  },
});
