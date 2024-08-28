import { isEnvBrowser } from "../utils/misc";
import ky from "ky";

export async function emit(
  eventName,
  data,
  mockData
) {
  const resourceName = isEnvBrowser()
    ? window.GetParentResourceName()
    : "nui-frame-app";

  if (isEnvBrowser() && mockData) return mockData;

  const resp = await ky
    .post(`https://${resourceName}/${eventName}`, {
      json: data,
    })
    .json();

  return resp;
}
