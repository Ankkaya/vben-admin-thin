import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';
import { AccountInfo } from '/#/store';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
// 登录接口
// export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
//   return defHttp.post<LoginResultModel>(
//     {
//       url: Api.Login,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//     },
//   );
// }
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<AccountInfo>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
