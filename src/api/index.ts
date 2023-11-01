/* prettier-ignore-start */
/* tslint-disable */
/* eslint-disable */

/* 该文件由 @pangu/end-type-to-front-type 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from '@pangu/end-type-to-front-type'
import request from '@/utils/request'
// @ts-ignore

/**
 * 接口 [新增账号↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/279)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/add/account`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求body类型** */
export interface PostBasicAddAccountBody {
  enterName?: string
  id?: number
  name?: string
  otherInfo?: string
  password?: string
  phone?: string
  roleId?: number
}

/* **返回类型** */
export type PostBasicAddAccountResponse = boolean

/* **请求函数** */
export async function postBasicAddAccount(body: PostBasicAddAccountBody): Promise<any> {
  return request(`/basic/add/account`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [添加角色↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/281)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/add/role`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求body类型** */
export interface PostBasicAddRoleBody {
  id?: number
  name?: string
}

/* **返回类型** */
export type PostBasicAddRoleResponse = boolean

/* **请求函数** */
export async function postBasicAddRole(body: PostBasicAddRoleBody): Promise<any> {
  return request(`/basic/add/role`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [删除账户↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/283)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `DELETE /basic/delete/account/{id}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求params类型** */
export interface DeleteBasicDeleteAccountByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeleteBasicDeleteAccountByIdResponse = boolean

/* **请求函数** */
export async function deleteBasicDeleteAccountById(params: DeleteBasicDeleteAccountByIdParams): Promise<any> {
  return request(`/basic/delete/account/${params.id}`, {
    method: Method.DELETE,
  })
}

/**
 * 接口 [删除角色↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/285)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `DELETE /basic/delete/role/{id}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求params类型** */
export interface DeleteBasicDeleteRoleByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeleteBasicDeleteRoleByIdResponse = boolean

/* **请求函数** */
export async function deleteBasicDeleteRoleById(params: DeleteBasicDeleteRoleByIdParams): Promise<any> {
  return request(`/basic/delete/role/${params.id}`, {
    method: Method.DELETE,
  })
}

/**
 * 接口 [编辑账号↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/287)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `PUT /basic/edit/account`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求body类型** */
export interface PutBasicEditAccountBody {
  enterName?: string
  id?: number
  name?: string
  otherInfo?: string
  password?: string
  phone?: string
  roleId?: number
}

/* **返回类型** */
export type PutBasicEditAccountResponse = boolean

/* **请求函数** */
export async function putBasicEditAccount(body: PutBasicEditAccountBody): Promise<any> {
  return request(`/basic/edit/account`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [修改密码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/289)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/edit/password`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicEditPasswordQuery {
  /**
   * newPassword
   */
  newPassword: string
  /**
   * md5加密
   */
  oldPassword?: string
}

/* **返回类型** */
export type GetBasicEditPasswordResponse = boolean

/* **请求函数** */
export async function getBasicEditPassword(query: GetBasicEditPasswordQuery): Promise<any> {
  return request(`/basic/edit/password`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [编辑角色↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/291)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `PUT /basic/edit/role`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求body类型** */
export interface PutBasicEditRoleBody {
  id?: number
  name?: string
}

/* **返回类型** */
export type PutBasicEditRoleResponse = boolean

/* **请求函数** */
export async function putBasicEditRole(body: PutBasicEditRoleBody): Promise<any> {
  return request(`/basic/edit/role`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [更新企业基本信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/293)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `PUT /basic/enter/edit`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求body类型** */
export interface PutBasicEnterEditBody {
  address?: string
  businessLicense?: string
  city?: string
  contractPerson?: string
  contractPhone?: string
  country?: string
  email?: string
  externalLogonId?: string
  financeAccountId?: number
  financeAccountName?: string
  latitude?: string
  longitude?: string
  name?: string
  password?: string
  province?: string
  sign?: boolean
}

/* **返回类型** */
export type PutBasicEnterEditResponse = boolean

/* **请求函数** */
export async function putBasicEnterEdit(body: PutBasicEnterEditBody): Promise<any> {
  return request(`/basic/enter/edit`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [查询企业基本信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/295)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/enter/query`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export interface GetBasicEnterQueryResponse {
  bizData: string
  gmtCreate: string
  gmtModified: string
  id: number
  name: string
  status: number
}

/* **请求函数** */
export async function getBasicEnterQuery(): Promise<any> {
  return request(`/basic/enter/query`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取当前登陆账户信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/297)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/info/account`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export interface GetBasicInfoAccountResponse {
  currentTime: number
  enterId: number
  isFirstLogin: boolean
  name: string
  phone: string
  roleId: number
  userId: number
}

/* **请求函数** */
export async function getBasicInfoAccount(): Promise<any> {
  return request(`/basic/info/account`, {
    method: Method.GET,
  })
}

/**
 * 接口 [账户登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/299)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/login/account`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicLoginAccountQuery {
  /**
   * md5加密
   */
  password?: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export interface GetBasicLoginAccountResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getBasicLoginAccount(query: GetBasicLoginAccountQuery): Promise<any> {
  return request(`/basic/login/account`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取随机验证码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/301)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/login/code`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicLoginCodeQuery {
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetBasicLoginCodeResponse = string

/* **请求函数** */
export async function getBasicLoginCode(query: GetBasicLoginCodeQuery): Promise<any> {
  return request(`/basic/login/code`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取登陆人的菜单权限↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/303)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/menu/account`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export type GetBasicMenuAccountResponse = {
  id: number
  key: string
  menuName: string
  menuType: number
  menuVOList: {}[]
  parentId: number
  rootId: number
}[]

/* **请求函数** */
export async function getBasicMenuAccount(): Promise<any> {
  return request(`/basic/menu/account`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取短信验证码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/305)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/out/code`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicOutCodeQuery {
  /**
   * code
   */
  code: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetBasicOutCodeResponse = string

/* **请求函数** */
export async function getBasicOutCode(query: GetBasicOutCodeQuery): Promise<any> {
  return request(`/basic/out/code`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [短信验证码登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/307)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/out/code/login`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicOutCodeLoginQuery {
  /**
   * code
   */
  code: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export interface GetBasicOutCodeLoginResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getBasicOutCodeLogin(query: GetBasicOutCodeLoginQuery): Promise<any> {
  return request(`/basic/out/code/login`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [支付账户获取充值链接↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/309)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/payAccount/charge`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求body类型** */
export interface PostBasicPayAccountChargeBody {
  accountId?: number
  outBizNo?: string
  remark?: string
  transAmount?: string
}

/* **返回类型** */
export type PostBasicPayAccountChargeResponse = string

/* **请求函数** */
export async function postBasicPayAccountCharge(body: PostBasicPayAccountChargeBody): Promise<any> {
  return request(`/basic/payAccount/charge`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [isSign↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/311)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/payAccount/isSign`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export type GetBasicPayAccountIsSignResponse = boolean

/* **请求函数** */
export async function getBasicPayAccountIsSign(): Promise<any> {
  return request(`/basic/payAccount/isSign`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取签约地址↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/313)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/payAccount/preSign`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求body类型** */
export interface PostBasicPayAccountPreSignBody {
  address?: string
  businessLicense?: string
  city?: string
  contractPerson?: string
  contractPhone?: string
  country?: string
  email?: string
  externalLogonId?: string
  financeAccountId?: number
  financeAccountName?: string
  latitude?: string
  longitude?: string
  name?: string
  password?: string
  province?: string
  sign?: boolean
}

/* **返回类型** */
export type PostBasicPayAccountPreSignResponse = string

/* **请求函数** */
export async function postBasicPayAccountPreSign(body: PostBasicPayAccountPreSignBody): Promise<any> {
  return request(`/basic/payAccount/preSign`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [是否开通记账本↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/315)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/payAccount/query`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export type GetBasicPayAccountQueryResponse = boolean

/* **请求函数** */
export async function getBasicPayAccountQuery(): Promise<any> {
  return request(`/basic/payAccount/query`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取余额↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/317)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/payAccount/queryBalance`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export type GetBasicPayAccountQueryBalanceResponse = string

/* **请求函数** */
export async function getBasicPayAccountQueryBalance(): Promise<any> {
  return request(`/basic/payAccount/queryBalance`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取批量账单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/319)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/payAccount/queryBatchBill`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicPayAccountQueryBatchBillQuery {
  accountId?: string
  /**
   * 账单状态 SUCCESS 支付成功  WAIT_PAY 等待支付 FAIL 支付失败 CLOSED 已关闭
   */
  billStatus?: string
  /**
   * 账单类型，SALARY 薪水 PAYMENT  商务付款 ACCOUNT_BOOK_CHARGE  记账本充值
   */
  billType?: string
  endAmount?: string
  endTime?: string
  pageNum?: number
  pageSize?: number
  payChannel?: string
  /**
   *  查询标识主体类型, PAYEE 收款 PAYER 付款 ALL 全部
   */
  queryIdentityObjectType?: string
  startAmount?: string
  startTime?: string
}

/* **返回类型** */
export interface GetBasicPayAccountQueryBatchBillResponse {
  data: {
    billAmount: string
    billStatus: string
    billType: string
    originFundFlowId: string
    originOrderId: string
    originOrderTitle: string
    originOutBizNo: string
    otherAccountId: string
    otherAccountName: string
    payChannel: string
    payDate: string
    remark: string
  }[]
  total: number
}

/* **请求函数** */
export async function getBasicPayAccountQueryBatchBill(query: GetBasicPayAccountQueryBatchBillQuery): Promise<any> {
  return request(`/basic/payAccount/queryBatchBill`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [确认签约↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/321)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/payAccount/signConfirm`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export interface PostBasicPayAccountSignConfirmResponse {
  code: string
  msg: string
  result: number
  success: boolean
}

/* **请求函数** */
export async function postBasicPayAccountSignConfirm(): Promise<any> {
  return request(`/basic/payAccount/signConfirm`, {
    method: Method.POST,
  })
}

/**
 * 接口 [分页查询账号↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/323)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/query/account`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicQueryAccountQuery {
  /**
   * name
   */
  name?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * phone
   */
  phone?: string
  /**
   * roleId
   */
  roleId?: string
  /**
   * status
   */
  status?: string
}

/* **返回类型** */
export interface GetBasicQueryAccountResponse {
  data: {
    id: number
    name: string
    phone: string
    roleId: number
    roleName: string
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getBasicQueryAccount(query: GetBasicQueryAccountQuery): Promise<any> {
  return request(`/basic/query/account`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [账户详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/325)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/query/account/detail/{id}`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求params类型** */
export interface GetBasicQueryAccountDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetBasicQueryAccountDetailByIdResponse {
  id: number
  name: string
  phone: string
  roleId: number
  roleName: string
  status: number
}

/* **请求函数** */
export async function getBasicQueryAccountDetailById(params: GetBasicQueryAccountDetailByIdParams): Promise<any> {
  return request(`/basic/query/account/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [查询所有菜单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/327)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/query/menu`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **返回类型** */
export type GetBasicQueryMenuResponse = {
  id: number
  key: string
  menuName: string
  menuType: number
  menuVOList: {}[]
  parentId: number
  rootId: number
}[]

/* **请求函数** */
export async function getBasicQueryMenu(): Promise<any> {
  return request(`/basic/query/menu`, {
    method: Method.GET,
  })
}

/**
 * 接口 [查询角色↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/329)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/query/role`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicQueryRoleQuery {
  /**
   * name
   */
  name?: string
}

/* **返回类型** */
export type GetBasicQueryRoleResponse = {
  enterId: number
  gmtCreate: string
  gmtModified: string
  id: number
  isDefaultAdmin: number
  name: string
}[]

/* **请求函数** */
export async function getBasicQueryRole(query: GetBasicQueryRoleQuery): Promise<any> {
  return request(`/basic/query/role`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [查询角色下的菜单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/331)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/role/auth/menu`
 * @更新时间 `2023-10-30 15:03:32`
 */

/* **请求query类型** */
export interface GetBasicRoleAuthMenuQuery {
  /**
   * roleId
   */
  roleId: string
}

/* **返回类型** */
export type GetBasicRoleAuthMenuResponse = {
  id: number
  key: string
  menuName: string
  menuType: number
  menuVOList: {}[]
  parentId: number
  rootId: number
}[]

/* **请求函数** */
export async function getBasicRoleAuthMenu(query: GetBasicRoleAuthMenuQuery): Promise<any> {
  return request(`/basic/role/auth/menu`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [角色关联菜单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/333)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `POST /basic/role/menu`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostBasicRoleMenuBody {
  menuIdList?: number[]
  roleId?: number
}

/* **返回类型** */
export type PostBasicRoleMenuResponse = boolean

/* **请求函数** */
export async function postBasicRoleMenu(body: PostBasicRoleMenuBody): Promise<any> {
  return request(`/basic/role/menu`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [启用禁用账户↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/335)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/status/account`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetBasicStatusAccountQuery {
  /**
   * id
   */
  id: string
  /**
   * 10:启用；20禁用
   */
  status?: string
}

/* **返回类型** */
export type GetBasicStatusAccountResponse = boolean

/* **请求函数** */
export async function getBasicStatusAccount(query: GetBasicStatusAccountQuery): Promise<any> {
  return request(`/basic/status/account`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [如果加入多个企业组织，登陆后在调这个接口获取token↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/337)
 *
 * @分类 [基础信息管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_30)
 * @标签 `基础信息管理`
 * @请求头 `GET /basic/token/account`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetBasicTokenAccountQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetBasicTokenAccountResponse = string

/* **请求函数** */
export async function getBasicTokenAccount(query: GetBasicTokenAccountQuery): Promise<any> {
  return request(`/basic/token/account`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [找回密码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/167)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/find/password`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountFindPasswordQuery {
  /**
   * 短信验证码
   */
  code?: string
  /**
   * password
   */
  password: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetAppAccountFindPasswordResponse = boolean

/* **请求函数** */
export async function getAppAccountFindPassword(query: GetAppAccountFindPasswordQuery): Promise<any> {
  return request(`/app/account/find/password`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [是否是首次登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/169)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/first/login`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountFirstLoginQuery {
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetAppAccountFirstLoginResponse = boolean

/* **请求函数** */
export async function getAppAccountFirstLogin(query: GetAppAccountFirstLoginQuery): Promise<any> {
  return request(`/app/account/first/login`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [首页的统计数据↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/171)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/index`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **返回类型** */
export interface GetAppAccountIndexResponse {
  abnormalAmount: number
  attendanceAmount: number
  insureAmount: number
  totalHour: number
  totalPeople: number
}

/* **请求函数** */
export async function getAppAccountIndex(): Promise<any> {
  return request(`/app/account/index`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取当前登陆账户信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/173)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/info/account`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **返回类型** */
export interface GetAppAccountInfoAccountResponse {
  currentTime: number
  enterId: number
  isFirstLogin: boolean
  name: string
  phone: string
  roleId: number
  userId: number
}

/* **请求函数** */
export async function getAppAccountInfoAccount(): Promise<any> {
  return request(`/app/account/info/account`, {
    method: Method.GET,
  })
}

/**
 * 接口 [获取登陆人的菜单权限↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/175)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/menu/account`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **返回类型** */
export type GetAppAccountMenuAccountResponse = {
  id: number
  key: string
  menuName: string
  menuType: number
  menuVOList: {}[]
  parentId: number
  rootId: number
}[]

/* **请求函数** */
export async function getAppAccountMenuAccount(): Promise<any> {
  return request(`/app/account/menu/account`, {
    method: Method.GET,
  })
}

/**
 * 接口 [修改新密码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/177)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/new/password`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountNewPasswordQuery {
  /**
   * password
   */
  password: string
  /**
   * phone
   */
  phone?: string
}

/* **返回类型** */
export type GetAppAccountNewPasswordResponse = boolean

/* **请求函数** */
export async function getAppAccountNewPassword(query: GetAppAccountNewPasswordQuery): Promise<any> {
  return request(`/app/account/new/password`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [微信绑定手机号↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/179)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/auth/bind`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutAuthBindQuery {
  /**
   * 短信验证码
   */
  code?: string
  /**
   * openId
   */
  openId: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export interface GetAppAccountOutAuthBindResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getAppAccountOutAuthBind(query: GetAppAccountOutAuthBindQuery): Promise<any> {
  return request(`/app/account/out/auth/bind`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [微信授权登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/181)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/auth/login`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutAuthLoginQuery {
  /**
   * code
   */
  code: string
}

/* **返回类型** */
export interface GetAppAccountOutAuthLoginResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getAppAccountOutAuthLogin(query: GetAppAccountOutAuthLoginQuery): Promise<any> {
  return request(`/app/account/out/auth/login`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取短信验证码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/183)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/code`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutCodeQuery {
  /**
   * code
   */
  code: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetAppAccountOutCodeResponse = string

/* **请求函数** */
export async function getAppAccountOutCode(query: GetAppAccountOutCodeQuery): Promise<any> {
  return request(`/app/account/out/code`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [短信验证码登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/185)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/code/login`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutCodeLoginQuery {
  /**
   * code
   */
  code: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export interface GetAppAccountOutCodeLoginResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getAppAccountOutCodeLogin(query: GetAppAccountOutCodeLoginQuery): Promise<any> {
  return request(`/app/account/out/code/login`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [如果加入多个企业组织，登陆后在调这个接口获取token↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/187)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/enter/account`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutEnterAccountQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetAppAccountOutEnterAccountResponse = string

/* **请求函数** */
export async function getAppAccountOutEnterAccount(query: GetAppAccountOutEnterAccountQuery): Promise<any> {
  return request(`/app/account/out/enter/account`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取随机验证码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/189)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/login/code`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **返回类型** */
export type GetAppAccountOutLoginCodeResponse = string

/* **请求函数** */
export async function getAppAccountOutLoginCode(): Promise<any> {
  return request(`/app/account/out/login/code`, {
    method: Method.GET,
  })
}

/**
 * 接口 [密码登陆↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/191)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/password/login`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutPasswordLoginQuery {
  /**
   * password
   */
  password: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export interface GetAppAccountOutPasswordLoginResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getAppAccountOutPasswordLogin(query: GetAppAccountOutPasswordLoginQuery): Promise<any> {
  return request(`/app/account/out/password/login`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [微信授权获取手机号↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/193)
 *
 * @分类 [小程序端接口:登陆相关接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_32)
 * @标签 `小程序端接口:登陆相关接口`
 * @请求头 `GET /app/account/out/phone`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAccountOutPhoneQuery {
  /**
   * code
   */
  code: string
}

/* **返回类型** */
export type GetAppAccountOutPhoneResponse = string

/* **请求函数** */
export async function getAppAccountOutPhone(query: GetAppAccountOutPhoneQuery): Promise<any> {
  return request(`/app/account/out/phone`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [发起用工审批申请↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/239)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `POST /app/work/apply`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PostAppWorkApplyBody {
  /**
   * 审批单名称
   */
  applyName?: string
  applyType?: number
  /**
   * 补卡件数
   */
  cardAmount?: number
  /**
   * 补卡时间
   */
  cardDate?: string
  dayDate?: string
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  enterId?: number
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: {
    name?: string
    path?: string
    size?: string
  }[]
  planId?: number
  refuseRemark?: string
  /**
   * 休息时长
   */
  relaxTime?: string
  /**
   * 申请理由
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  userId?: number
}

/* **返回类型** */
export type PostAppWorkApplyResponse = boolean

/* **请求函数** */
export async function postAppWorkApply(body: PostAppWorkApplyBody): Promise<any> {
  return request(`/app/work/apply`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [处理用工审批↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/241)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `POST /app/work/approve`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PostAppWorkApproveBody {
  id?: number
  remark?: string
  result?: number
}

/* **返回类型** */
export type PostAppWorkApproveResponse = boolean

/* **请求函数** */
export async function postAppWorkApprove(body: PostAppWorkApproveBody): Promise<any> {
  return request(`/app/work/approve`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [我审批的和抄送我的↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/243)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `GET /app/work/approve/query`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppWorkApproveQueryQuery {
  '10:我审批的；20抄送我的'?: string
  '20已处理;30:待审批'?: string
  enterId?: string
  pageNum?: number
  pageSize?: number
  userId?: string
  发起开始时间?: string
  发起结束时间?: string
  申请单号?: string
  申请类型?: string
}

/* **返回类型** */
export interface GetAppWorkApproveQueryResponse {
  data: {
    /**
     * 审批单ID
     */
    applyId: number
    /**
     * 申请类型：10用工；20考勤
     */
    applyType: number
    /**
     * 发起人
     */
    applyUserName: string
    /**
     * 审批单号
     */
    approveNo: string
    enterWorkApplyDTO: {
      /**
       * 审批单名称
       */
      applyName: string
      applyType: number
      /**
       * 补卡件数
       */
      cardAmount: number
      /**
       * 补卡时间
       */
      cardDate: string
      dayDate: string
      /**
       * 结束时间
       */
      endDate: string
      /**
       * 结束用工时段
       */
      endHour: string
      enterId: number
      /**
       * 岗位需求
       */
      enterWorkApplyJobDTOList: {
        /**
         * 数量
         */
        amount: number
        /**
         * 其他业务字段
         */
        bizData: string
        /**
         * 假期岗位单价
         */
        holidayMoney: number
        /**
         * 岗位id
         */
        jobId: number
        /**
         * 岗位名称
         */
        jobName: string
        /**
         * 男数量
         */
        manNumber: string
        maxAge: string
        minAge: string
        /**
         * 岗位单价
         */
        money: number
        /**
         * 单位
         */
        unit: string
        /**
         * 女数量
         */
        womanNumber: string
      }[]
      /**
       * 附件
       */
      fileUrlList: {
        name: string
        path: string
        size: string
      }[]
      planId: number
      refuseRemark: string
      /**
       * 休息时长
       */
      relaxTime: string
      /**
       * 申请理由
       */
      remark: string
      /**
       * 开始时间
       */
      startDate: string
      /**
       * 开始用工时段
       */
      startHour: string
      userId: number
    }
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 发起时间
     */
    gmtCreate: string
    id: number
    /**
     * 20：已处理；30未处理
     */
    isOperated: number
    /**
     * 需求人数
     */
    needPersonAmount: string
    /**
     * 用工计划名称
     */
    planName: string
    /**
     * 状态10:审批中；20已通过；30已拒绝；40已撤销
     */
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getAppWorkApproveQuery(query: GetAppWorkApproveQueryQuery): Promise<any> {
  return request(`/app/work/approve/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [审批单详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/245)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `GET /app/work/detail/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface GetAppWorkDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetAppWorkDetailByIdResponse {
  /**
   * 类型：10用工；20考勤
   */
  applyType: number
  /**
   * 发起人
   */
  applyUserName: string
  approveFlowVOList: {
    detailVOList: {
      isOperate: number
      number: number
      operateDate: string
      operateName: string
      operateType: number
      remark: string
      status: number
    }[]
    number: number
  }[]
  /**
   * 审批单号
   */
  approveNo: string
  enterWorkApplyDTO: {
    /**
     * 审批单名称
     */
    applyName: string
    applyType: number
    /**
     * 补卡件数
     */
    cardAmount: number
    /**
     * 补卡时间
     */
    cardDate: string
    dayDate: string
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    enterId: number
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: {
      name: string
      path: string
      size: string
    }[]
    planId: number
    refuseRemark: string
    /**
     * 休息时长
     */
    relaxTime: string
    /**
     * 申请理由
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    userId: number
  }
  /**
   * 人脸照片
   */
  faceUrl: string
  /**
   * 创建时间
   */
  gmtCreate: string
  id: number
  /**
   * 需求人数
   */
  needPersonAmount: string
  /**
   * 状态：10:审批中；20已完成；30已拒绝；40已撤销
   */
  status: number
}

/* **请求函数** */
export async function getAppWorkDetailById(params: GetAppWorkDetailByIdParams): Promise<any> {
  return request(`/app/work/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [劳务公司下拉框↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/247)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `GET /app/work/labor/list`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **返回类型** */
export type GetAppWorkLaborListResponse = {
  id: number
  laborName: string
}[]

/* **请求函数** */
export async function getAppWorkLaborList(): Promise<any> {
  return request(`/app/work/labor/list`, {
    method: Method.GET,
  })
}

/**
 * 接口 [我发起的审批分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/249)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `GET /app/work/query`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppWorkQueryQuery {
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * 10:审批中；20已完成；30已拒绝；40已撤销
   */
  status?: string
}

/* **返回类型** */
export interface GetAppWorkQueryResponse {
  data: {
    /**
     * 类型：10用工；20考勤
     */
    applyType: number
    /**
     * 发起人
     */
    applyUserName: string
    approveFlowVOList: {
      detailVOList: {
        isOperate: number
        number: number
        operateDate: string
        operateName: string
        operateType: number
        remark: string
        status: number
      }[]
      number: number
    }[]
    /**
     * 审批单号
     */
    approveNo: string
    enterWorkApplyDTO: {
      /**
       * 审批单名称
       */
      applyName: string
      applyType: number
      /**
       * 补卡件数
       */
      cardAmount: number
      /**
       * 补卡时间
       */
      cardDate: string
      dayDate: string
      /**
       * 结束时间
       */
      endDate: string
      /**
       * 结束用工时段
       */
      endHour: string
      enterId: number
      /**
       * 岗位需求
       */
      enterWorkApplyJobDTOList: {
        /**
         * 数量
         */
        amount: number
        /**
         * 其他业务字段
         */
        bizData: string
        /**
         * 假期岗位单价
         */
        holidayMoney: number
        /**
         * 岗位id
         */
        jobId: number
        /**
         * 岗位名称
         */
        jobName: string
        /**
         * 男数量
         */
        manNumber: string
        maxAge: string
        minAge: string
        /**
         * 岗位单价
         */
        money: number
        /**
         * 单位
         */
        unit: string
        /**
         * 女数量
         */
        womanNumber: string
      }[]
      /**
       * 附件
       */
      fileUrlList: {
        name: string
        path: string
        size: string
      }[]
      planId: number
      refuseRemark: string
      /**
       * 休息时长
       */
      relaxTime: string
      /**
       * 申请理由
       */
      remark: string
      /**
       * 开始时间
       */
      startDate: string
      /**
       * 开始用工时段
       */
      startHour: string
      userId: number
    }
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 创建时间
     */
    gmtCreate: string
    id: number
    /**
     * 需求人数
     */
    needPersonAmount: string
    /**
     * 状态：10:审批中；20已完成；30已拒绝；40已撤销
     */
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getAppWorkQuery(query: GetAppWorkQueryQuery): Promise<any> {
  return request(`/app/work/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [审批单下拉框列表↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/251)
 *
 * @分类 [小程序端：用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_33)
 * @标签 `小程序端：用工审批管理`
 * @请求头 `GET /app/work/query/list`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **返回类型** */
export type GetAppWorkQueryListResponse = {
  /**
   * 类型：10用工；20考勤
   */
  applyType: number
  /**
   * 发起人
   */
  applyUserName: string
  approveFlowVOList: {
    detailVOList: {
      isOperate: number
      number: number
      operateDate: string
      operateName: string
      operateType: number
      remark: string
      status: number
    }[]
    number: number
  }[]
  /**
   * 审批单号
   */
  approveNo: string
  enterWorkApplyDTO: {
    /**
     * 审批单名称
     */
    applyName: string
    applyType: number
    /**
     * 补卡件数
     */
    cardAmount: number
    /**
     * 补卡时间
     */
    cardDate: string
    dayDate: string
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    enterId: number
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: {
      name: string
      path: string
      size: string
    }[]
    planId: number
    refuseRemark: string
    /**
     * 休息时长
     */
    relaxTime: string
    /**
     * 申请理由
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    userId: number
  }
  /**
   * 人脸照片
   */
  faceUrl: string
  /**
   * 创建时间
   */
  gmtCreate: string
  id: number
  /**
   * 需求人数
   */
  needPersonAmount: string
  /**
   * 状态：10:审批中；20已完成；30已拒绝；40已撤销
   */
  status: number
}[]

/* **请求函数** */
export async function getAppWorkQueryList(): Promise<any> {
  return request(`/app/work/query/list`, {
    method: Method.GET,
  })
}

/**
 * 接口 [添加岗位↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/399)
 *
 * @分类 [岗位管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_36)
 * @标签 `岗位管理`
 * @请求头 `POST /job/add`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PostJobAddBody {
  /**
   * 节假日工资天
   */
  holidayWagesDay?: number
  /**
   * 节假日工资小时
   */
  holidayWagesHour?: number
  /**
   * 节假日工资件
   */
  holidayWagesItem?: number
  id?: number
  /**
   * 岗位工资天
   */
  jobWagesDay?: number
  /**
   * 岗位工资小时
   */
  jobWagesHour?: number
  /**
   * 岗位工资件
   */
  jobWagesItem?: number
  /**
   * 最大年龄
   */
  maxAge?: string
  /**
   * 最小年龄
   */
  minimumAge?: string
  /**
   * 岗位姓名
   */
  name?: string
  /**
   * 其他自定义要求
   */
  otherRule?: string
  /**
   * 性别
   */
  sex?: string
}

/* **返回类型** */
export type PostJobAddResponse = boolean

/* **请求函数** */
export async function postJobAdd(body: PostJobAddBody): Promise<any> {
  return request(`/job/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [删除岗位↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/401)
 *
 * @分类 [岗位管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_36)
 * @标签 `岗位管理`
 * @请求头 `DELETE /job/delete/{id}`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求params类型** */
export interface DeleteJobDeleteByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeleteJobDeleteByIdResponse = boolean

/* **请求函数** */
export async function deleteJobDeleteById(params: DeleteJobDeleteByIdParams): Promise<any> {
  return request(`/job/delete/${params.id}`, {
    method: Method.DELETE,
  })
}

/**
 * 接口 [查询工作详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/403)
 *
 * @分类 [岗位管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_36)
 * @标签 `岗位管理`
 * @请求头 `GET /job/detail/{id}`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求params类型** */
export interface GetJobDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetJobDetailByIdResponse {
  /**
   * 节假日工资天
   */
  holidayWagesDay: number
  /**
   * 节假日工资小时
   */
  holidayWagesHour: number
  /**
   * 节假日工资件
   */
  holidayWagesItem: number
  id: number
  /**
   * 岗位工资天
   */
  jobWagesDay: number
  /**
   * 岗位工资小时
   */
  jobWagesHour: number
  /**
   * 岗位工资件
   */
  jobWagesItem: number
  /**
   * 最大年龄
   */
  maxAge: string
  /**
   * 最小年龄
   */
  minimumAge: string
  /**
   * 岗位姓名
   */
  name: string
  /**
   * 其他自定义要求
   */
  otherRule: string
  /**
   * 性别
   */
  sex: string
}

/* **请求函数** */
export async function getJobDetailById(params: GetJobDetailByIdParams): Promise<any> {
  return request(`/job/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [编辑岗位↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/405)
 *
 * @分类 [岗位管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_36)
 * @标签 `岗位管理`
 * @请求头 `PUT /job/edit`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PutJobEditBody {
  /**
   * 节假日工资天
   */
  holidayWagesDay?: number
  /**
   * 节假日工资小时
   */
  holidayWagesHour?: number
  /**
   * 节假日工资件
   */
  holidayWagesItem?: number
  id?: number
  /**
   * 岗位工资天
   */
  jobWagesDay?: number
  /**
   * 岗位工资小时
   */
  jobWagesHour?: number
  /**
   * 岗位工资件
   */
  jobWagesItem?: number
  /**
   * 最大年龄
   */
  maxAge?: string
  /**
   * 最小年龄
   */
  minimumAge?: string
  /**
   * 岗位姓名
   */
  name?: string
  /**
   * 其他自定义要求
   */
  otherRule?: string
  /**
   * 性别
   */
  sex?: string
}

/* **返回类型** */
export type PutJobEditResponse = boolean

/* **请求函数** */
export async function putJobEdit(body: PutJobEditBody): Promise<any> {
  return request(`/job/edit`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/407)
 *
 * @分类 [岗位管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_36)
 * @标签 `岗位管理`
 * @请求头 `GET /job/query`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface GetJobQueryQuery {
  /**
   * name
   */
  name?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
}

/* **返回类型** */
export interface GetJobQueryResponse {
  data: {
    /**
     * 节假日工资天
     */
    holidayWagesDay: number
    /**
     * 节假日工资小时
     */
    holidayWagesHour: number
    /**
     * 节假日工资件
     */
    holidayWagesItem: number
    id: number
    /**
     * 岗位工资天
     */
    jobWagesDay: number
    /**
     * 岗位工资小时
     */
    jobWagesHour: number
    /**
     * 岗位工资件
     */
    jobWagesItem: number
    /**
     * 最大年龄
     */
    maxAge: string
    /**
     * 最小年龄
     */
    minimumAge: string
    /**
     * 岗位姓名
     */
    name: string
    /**
     * 其他自定义要求
     */
    otherRule: string
    /**
     * 性别
     */
    sex: string
  }[]
  total: number
}

/* **请求函数** */
export async function getJobQuery(query: GetJobQueryQuery): Promise<any> {
  return request(`/job/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [生成二维码位置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/427)
 *
 * @分类 [扫码登陆相关↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_37)
 * @标签 `扫码登陆相关`
 * @请求头 `GET /login/out/code/image`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **返回类型** */
export interface GetLoginOutCodeImageResponse {
  imgBase64: string
  qrUrl: string
  secret: string
}

/* **请求函数** */
export async function getLoginOutCodeImage(): Promise<any> {
  return request(`/login/out/code/image`, {
    method: Method.GET,
  })
}

/**
 * 接口 [查询扫码生成的token，这个接口需要前端轮询调用↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/429)
 *
 * @分类 [扫码登陆相关↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_37)
 * @标签 `扫码登陆相关`
 * @请求头 `GET /login/out/code/research`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetLoginOutCodeResearchQuery {
  /**
   * secret
   */
  secret: string
}

/* **返回类型** */
export interface GetLoginOutCodeResearchResponse {
  enterPOList: {
    bizData: string
    gmtCreate: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  name: string
  openId: string
  phone: string
  token: string
}

/* **请求函数** */
export async function getLoginOutCodeResearch(query: GetLoginOutCodeResearchQuery): Promise<any> {
  return request(`/login/out/code/research`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [扫码生成token↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/431)
 *
 * @分类 [扫码登陆相关↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_37)
 * @标签 `扫码登陆相关`
 * @请求头 `GET /login/token/code`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetLoginTokenCodeQuery {
  /**
   * secret
   */
  secret: string
}

/* **返回类型** */
export type GetLoginTokenCodeResponse = boolean

/* **请求函数** */
export async function getLoginTokenCode(query: GetLoginTokenCodeQuery): Promise<any> {
  return request(`/login/token/code`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [图片地址↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/359)
 *
 * @分类 [文件管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_38)
 * @标签 `文件管理`
 * @请求头 `POST /file/oss/url`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **返回类型** */
export type PostFileOssUrlResponse = string

/* **请求函数** */
export async function postFileOssUrl(): Promise<any> {
  return request(`/file/oss/url`, {
    method: Method.POST,
  })
}

/**
 * 接口 [OSS签权接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/361)
 *
 * @分类 [文件管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_38)
 * @标签 `文件管理`
 * @请求头 `GET /file/signature`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetFileSignatureQuery {
  /**
   * superKey
   */
  superKey: string
}

/* **返回类型** */
export interface GetFileSignatureResponse {
  accessId: string
  dir: string
  expire: string
  host: string
  policy: string
  signature: string
}

/* **请求函数** */
export async function getFileSignature(query: GetFileSignatureQuery): Promise<any> {
  return request(`/file/signature`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [OSS签权接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/677)
 *
 * @分类 [文件管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_38)
 * @标签 `文件管理`
 * @请求头 `GET /file/signature/oss`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetFileSignatureOssQuery {
  /**
   * superKey
   */
  superKey: string
}

/* **返回类型** */
export interface GetFileSignatureOssResponse {
  accessId: string
  dir: string
  expire: string
  host: string
  policy: string
  signature: string
}

/* **请求函数** */
export async function getFileSignatureOss(query: GetFileSignatureOssQuery): Promise<any> {
  return request(`/file/signature/oss`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [考勤统计↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/389)
 *
 * @分类 [概览管理接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_39)
 * @标签 `概览管理接口`
 * @请求头 `GET /index/attendance`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface GetIndexAttendanceQuery {
  /**
   * planId
   */
  planId?: string
  /**
   * queryDate
   */
  queryDate: string
}

/* **返回类型** */
export interface GetIndexAttendanceResponse {
  abstained: number
  attendancePeopleAmount: number
  back: number
  delay: number
  miss: number
  normal: number
  totalHour: number
  totalItem: number
  totalPeopleAmount: number
}

/* **请求函数** */
export async function getIndexAttendance(query: GetIndexAttendanceQuery): Promise<any> {
  return request(`/index/attendance`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工费用统计↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/391)
 *
 * @分类 [概览管理接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_39)
 * @标签 `概览管理接口`
 * @请求头 `GET /index/money`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetIndexMoneyResponse {
  indexMoneyDetailVOList: {
    attendanceDate: string
    money: number
  }[]
  todayMoney: number
  totalMoney: number
}

/* **请求函数** */
export async function getIndexMoney(): Promise<any> {
  return request(`/index/money`, {
    method: Method.GET,
  })
}

/**
 * 接口 [结算统计↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/393)
 *
 * @分类 [概览管理接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_39)
 * @标签 `概览管理接口`
 * @请求头 `GET /index/over`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetIndexOverResponse {
  monthMoney: number
  totalMoney: number
  yearDetailVOList: {
    money: number
    month: number
  }[]
}

/* **请求函数** */
export async function getIndexOver(): Promise<any> {
  return request(`/index/over`, {
    method: Method.GET,
  })
}

/**
 * 接口 [用工人数↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/395)
 *
 * @分类 [概览管理接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_39)
 * @标签 `概览管理接口`
 * @请求头 `GET /index/people`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface GetIndexPeopleQuery {
  /**
   * 1:按月；2按天
   */
  checkValue?: string
}

/* **返回类型** */
export interface GetIndexPeopleResponse {
  enterIndexPeopleDetailVOList: {
    amount: number
    dayDate: string
    month: number
  }[]
  monthAmount: number
  todayAmount: number
}

/* **请求函数** */
export async function getIndexPeople(query: GetIndexPeopleQuery): Promise<any> {
  return request(`/index/people`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划统计↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/397)
 *
 * @分类 [概览管理接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_39)
 * @标签 `概览管理接口`
 * @请求头 `GET /index/plan`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetIndexPlanResponse {
  money: number
  ordering: number
  peopleAmount: number
  waiting: number
  working: number
}

/* **请求函数** */
export async function getIndexPlan(): Promise<any> {
  return request(`/index/plan`, {
    method: Method.GET,
  })
}

/**
 * 接口 [考勤审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/375)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `POST /flow/attendance`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PostFlowAttendanceBody {
  enterSettingDTOList?: {
    /**
     * 10:审批；20抄送
     */
    flowType?: number
    /**
     * 序号
     */
    number?: number
    /**
     * 操作人
     */
    userIdList?: number[]
  }[]
}

/* **返回类型** */
export type PostFlowAttendanceResponse = boolean

/* **请求函数** */
export async function postFlowAttendance(body: PostFlowAttendanceBody): Promise<any> {
  return request(`/flow/attendance`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [考勤审批设置查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/377)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `GET /flow/attendance/query`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetFlowAttendanceQueryResponse {
  enterSettingDTOList: {
    /**
     * 10:审批；20抄送
     */
    flowType: number
    /**
     * 序号
     */
    number: number
    /**
     * 操作人
     */
    userIdList: number[]
  }[]
}

/* **请求函数** */
export async function getFlowAttendanceQuery(): Promise<any> {
  return request(`/flow/attendance/query`, {
    method: Method.GET,
  })
}

/**
 * 接口 [其他配置：按天计价↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/379)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `POST /flow/other/day/setting`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface PostFlowOtherDaySettingQuery {
  /**
   * dayCount
   */
  dayCount: string
  /**
   * dayHour
   */
  dayHour: string
}

/* **返回类型** */
export type PostFlowOtherDaySettingResponse = boolean

/* **请求函数** */
export async function postFlowOtherDaySetting(query: PostFlowOtherDaySettingQuery): Promise<any> {
  return request(`/flow/other/day/setting`, {
    method: Method.POST,
    params: query,
  })
}

/**
 * 接口 [其他配置：按小时计价↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/381)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `POST /flow/other/hour/setting`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface PostFlowOtherHourSettingQuery {
  /**
   * hour
   */
  hour: string
  /**
   * hourCount
   */
  hourCount: string
}

/* **返回类型** */
export type PostFlowOtherHourSettingResponse = boolean

/* **请求函数** */
export async function postFlowOtherHourSetting(query: PostFlowOtherHourSettingQuery): Promise<any> {
  return request(`/flow/other/hour/setting`, {
    method: Method.POST,
    params: query,
  })
}

/**
 * 接口 [其他配置查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/383)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `GET /flow/other/query`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetFlowOtherQueryResponse {
  /**
   * 按天：扣减的天数
   */
  dayCount: number
  /**
   * 按天：迟到小时
   */
  dayHour: number
  /**
   * 按小时：迟到小时
   */
  hour: number
  /**
   * 按小时：扣减的小时
   */
  hourCount: number
}

/* **请求函数** */
export async function getFlowOtherQuery(): Promise<any> {
  return request(`/flow/other/query`, {
    method: Method.GET,
  })
}

/**
 * 接口 [用工审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/385)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `POST /flow/work`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PostFlowWorkBody {
  enterSettingDTOList?: {
    /**
     * 10:审批；20抄送
     */
    flowType?: number
    /**
     * 序号
     */
    number?: number
    /**
     * 操作人
     */
    userIdList?: number[]
  }[]
}

/* **返回类型** */
export type PostFlowWorkResponse = boolean

/* **请求函数** */
export async function postFlowWork(body: PostFlowWorkBody): Promise<any> {
  return request(`/flow/work`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [用工审批设置查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/387)
 *
 * @分类 [流程审批设置↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_40)
 * @标签 `流程审批设置`
 * @请求头 `GET /flow/work/query`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export interface GetFlowWorkQueryResponse {
  enterSettingDTOList: {
    /**
     * 10:审批；20抄送
     */
    flowType: number
    /**
     * 序号
     */
    number: number
    /**
     * 操作人
     */
    userIdList: number[]
  }[]
}

/* **请求函数** */
export async function getFlowWorkQuery(): Promise<any> {
  return request(`/flow/work/query`, {
    method: Method.GET,
  })
}

/**
 * 接口 [发起用工审批申请↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/515)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `POST /work/apply`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求body类型** */
export interface PostWorkApplyBody {
  /**
   * 审批单名称
   */
  applyName?: string
  applyType?: number
  /**
   * 补卡件数
   */
  cardAmount?: number
  /**
   * 补卡时间
   */
  cardDate?: string
  dayDate?: string
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  enterId?: number
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: {
    name?: string
    path?: string
    size?: string
  }[]
  planId?: number
  refuseRemark?: string
  /**
   * 休息时长
   */
  relaxTime?: string
  /**
   * 申请理由
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  userId?: number
}

/* **返回类型** */
export type PostWorkApplyResponse = boolean

/* **请求函数** */
export async function postWorkApply(body: PostWorkApplyBody): Promise<any> {
  return request(`/work/apply`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [处理用工审批↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/517)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `POST /work/approve`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求body类型** */
export interface PostWorkApproveBody {
  id?: number
  remark?: string
  result?: number
}

/* **返回类型** */
export type PostWorkApproveResponse = boolean

/* **请求函数** */
export async function postWorkApprove(body: PostWorkApproveBody): Promise<any> {
  return request(`/work/approve`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [我审批的和抄送我的↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/519)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `GET /work/approve/query`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface GetWorkApproveQueryQuery {
  '10:我审批的；20抄送我的'?: string
  '20已处理;30:待审批'?: string
  enterId?: string
  pageNum?: number
  pageSize?: number
  userId?: string
  发起开始时间?: string
  发起结束时间?: string
  申请单号?: string
  申请类型?: string
}

/* **返回类型** */
export interface GetWorkApproveQueryResponse {
  data: {
    /**
     * 审批单ID
     */
    applyId: number
    /**
     * 申请类型：10用工；20考勤
     */
    applyType: number
    /**
     * 发起人
     */
    applyUserName: string
    /**
     * 审批单号
     */
    approveNo: string
    enterWorkApplyDTO: {
      /**
       * 审批单名称
       */
      applyName: string
      applyType: number
      /**
       * 补卡件数
       */
      cardAmount: number
      /**
       * 补卡时间
       */
      cardDate: string
      dayDate: string
      /**
       * 结束时间
       */
      endDate: string
      /**
       * 结束用工时段
       */
      endHour: string
      enterId: number
      /**
       * 岗位需求
       */
      enterWorkApplyJobDTOList: {
        /**
         * 数量
         */
        amount: number
        /**
         * 其他业务字段
         */
        bizData: string
        /**
         * 假期岗位单价
         */
        holidayMoney: number
        /**
         * 岗位id
         */
        jobId: number
        /**
         * 岗位名称
         */
        jobName: string
        /**
         * 男数量
         */
        manNumber: string
        maxAge: string
        minAge: string
        /**
         * 岗位单价
         */
        money: number
        /**
         * 单位
         */
        unit: string
        /**
         * 女数量
         */
        womanNumber: string
      }[]
      /**
       * 附件
       */
      fileUrlList: {
        name: string
        path: string
        size: string
      }[]
      planId: number
      refuseRemark: string
      /**
       * 休息时长
       */
      relaxTime: string
      /**
       * 申请理由
       */
      remark: string
      /**
       * 开始时间
       */
      startDate: string
      /**
       * 开始用工时段
       */
      startHour: string
      userId: number
    }
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 发起时间
     */
    gmtCreate: string
    id: number
    /**
     * 20：已处理；30未处理
     */
    isOperated: number
    /**
     * 需求人数
     */
    needPersonAmount: string
    /**
     * 用工计划名称
     */
    planName: string
    /**
     * 状态10:审批中；20已通过；30已拒绝；40已撤销
     */
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getWorkApproveQuery(query: GetWorkApproveQueryQuery): Promise<any> {
  return request(`/work/approve/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [撤回↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/521)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `GET /work/back/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface GetWorkBackByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetWorkBackByIdResponse = boolean

/* **请求函数** */
export async function getWorkBackById(params: GetWorkBackByIdParams): Promise<any> {
  return request(`/work/back/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [审批单详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/523)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `GET /work/detail/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface GetWorkDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetWorkDetailByIdResponse {
  /**
   * 类型：10用工；20考勤
   */
  applyType: number
  /**
   * 发起人
   */
  applyUserName: string
  approveFlowVOList: {
    detailVOList: {
      isOperate: number
      number: number
      operateDate: string
      operateName: string
      operateType: number
      remark: string
      status: number
    }[]
    number: number
  }[]
  /**
   * 审批单号
   */
  approveNo: string
  enterWorkApplyDTO: {
    /**
     * 审批单名称
     */
    applyName: string
    applyType: number
    /**
     * 补卡件数
     */
    cardAmount: number
    /**
     * 补卡时间
     */
    cardDate: string
    dayDate: string
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    enterId: number
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: {
      name: string
      path: string
      size: string
    }[]
    planId: number
    refuseRemark: string
    /**
     * 休息时长
     */
    relaxTime: string
    /**
     * 申请理由
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    userId: number
  }
  /**
   * 人脸照片
   */
  faceUrl: string
  /**
   * 创建时间
   */
  gmtCreate: string
  id: number
  /**
   * 需求人数
   */
  needPersonAmount: string
  /**
   * 状态：10:审批中；20已完成；30已拒绝；40已撤销
   */
  status: number
}

/* **请求函数** */
export async function getWorkDetailById(params: GetWorkDetailByIdParams): Promise<any> {
  return request(`/work/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [催审批↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/525)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `GET /work/push/{id}`
 * @更新时间 `2023-10-30 15:03:38`
 */

/* **请求params类型** */
export interface GetWorkPushByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetWorkPushByIdResponse = boolean

/* **请求函数** */
export async function getWorkPushById(params: GetWorkPushByIdParams): Promise<any> {
  return request(`/work/push/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [我发起的审批分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/527)
 *
 * @分类 [用工审批管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_42)
 * @标签 `用工审批管理`
 * @请求头 `GET /work/query`
 * @更新时间 `2023-10-30 15:03:38`
 */

/* **请求query类型** */
export interface GetWorkQueryQuery {
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * 10:审批中；20已完成；30已拒绝；40已撤销
   */
  status?: string
}

/* **返回类型** */
export interface GetWorkQueryResponse {
  data: {
    /**
     * 类型：10用工；20考勤
     */
    applyType: number
    /**
     * 发起人
     */
    applyUserName: string
    approveFlowVOList: {
      detailVOList: {
        isOperate: number
        number: number
        operateDate: string
        operateName: string
        operateType: number
        remark: string
        status: number
      }[]
      number: number
    }[]
    /**
     * 审批单号
     */
    approveNo: string
    enterWorkApplyDTO: {
      /**
       * 审批单名称
       */
      applyName: string
      applyType: number
      /**
       * 补卡件数
       */
      cardAmount: number
      /**
       * 补卡时间
       */
      cardDate: string
      dayDate: string
      /**
       * 结束时间
       */
      endDate: string
      /**
       * 结束用工时段
       */
      endHour: string
      enterId: number
      /**
       * 岗位需求
       */
      enterWorkApplyJobDTOList: {
        /**
         * 数量
         */
        amount: number
        /**
         * 其他业务字段
         */
        bizData: string
        /**
         * 假期岗位单价
         */
        holidayMoney: number
        /**
         * 岗位id
         */
        jobId: number
        /**
         * 岗位名称
         */
        jobName: string
        /**
         * 男数量
         */
        manNumber: string
        maxAge: string
        minAge: string
        /**
         * 岗位单价
         */
        money: number
        /**
         * 单位
         */
        unit: string
        /**
         * 女数量
         */
        womanNumber: string
      }[]
      /**
       * 附件
       */
      fileUrlList: {
        name: string
        path: string
        size: string
      }[]
      planId: number
      refuseRemark: string
      /**
       * 休息时长
       */
      relaxTime: string
      /**
       * 申请理由
       */
      remark: string
      /**
       * 开始时间
       */
      startDate: string
      /**
       * 开始用工时段
       */
      startHour: string
      userId: number
    }
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 创建时间
     */
    gmtCreate: string
    id: number
    /**
     * 需求人数
     */
    needPersonAmount: string
    /**
     * 状态：10:审批中；20已完成；30已拒绝；40已撤销
     */
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getWorkQuery(query: GetWorkQueryQuery): Promise<any> {
  return request(`/work/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [提现↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/363)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `POST /finance/cashOut`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostFinanceCashOutBody {
  outBizNo?: string
  /**
   * 密码
   */
  passWord?: string
  payerAccountId?: number
  /**
   * 提现数量
   */
  transAmount?: string
}

/* **返回类型** */
export type PostFinanceCashOutResponse = boolean

/* **请求函数** */
export async function postFinanceCashOut(body: PostFinanceCashOutBody): Promise<any> {
  return request(`/finance/cashOut`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [线下结算↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/365)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `POST /finance/off/settlement`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostFinanceOffSettlementBody {
  /**
   * 附件列表
   */
  fileList?: {
    name?: string
    path?: string
    size?: string
  }[]
  /**
   * 结算金额
   */
  money?: number
  /**
   * 密码
   */
  passWord?: string
  /**
   * 用工计划ID
   */
  planId?: number
  /**
   * 备注
   */
  remark?: string
}

/* **返回类型** */
export type PostFinanceOffSettlementResponse = boolean

/* **请求函数** */
export async function postFinanceOffSettlement(body: PostFinanceOffSettlementBody): Promise<any> {
  return request(`/finance/off/settlement`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [线上结算↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/367)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `POST /finance/on/settlement`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostFinanceOnSettlementBody {
  /**
   * 附件列表
   */
  fileList?: {
    name?: string
    path?: string
    size?: string
  }[]
  /**
   * 结算金额
   */
  money?: number
  /**
   * 密码
   */
  passWord?: string
  /**
   * 用工计划ID
   */
  planId?: number
  /**
   * 备注
   */
  remark?: string
}

/* **返回类型** */
export type PostFinanceOnSettlementResponse = boolean

/* **请求函数** */
export async function postFinanceOnSettlement(body: PostFinanceOnSettlementBody): Promise<any> {
  return request(`/finance/on/settlement`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/369)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `GET /finance/query`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetFinanceQueryQuery {
  /**
   * laborId
   */
  laborId?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * status
   */
  status?: string
}

/* **返回类型** */
export interface GetFinanceQueryResponse {
  data: {
    laborName: string
    /**
     * 计价方式：10小时；20按天；30按计件
     */
    moneyType: number
    orderNo: string
    payableWages: number
    personCount: number
    planId: number
    planName: string
    realWages: number
    status: number
    totalDay: number
    totalHour: number
    totalItem: number
    voList: {
      fileList: {
        name: string
        path: string
        size: string
      }[]
      gmtCreate: string
      money: number
      orderNumber: string
      payType: number
      remark: string
      status: number
    }[]
    waitMoney: number
    workDate: string
  }[]
  total: number
}

/* **请求函数** */
export async function getFinanceQuery(query: GetFinanceQueryQuery): Promise<any> {
  return request(`/finance/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [查询详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/371)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `GET /finance/query/detail/{planId}`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求params类型** */
export interface GetFinanceQueryDetailByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetFinanceQueryDetailByPlanIdResponse {
  laborName: string
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType: number
  orderNo: string
  payableWages: number
  personCount: number
  planId: number
  planName: string
  realWages: number
  status: number
  totalDay: number
  totalHour: number
  totalItem: number
  voList: {
    fileList: {
      name: string
      path: string
      size: string
    }[]
    gmtCreate: string
    money: number
    orderNumber: string
    payType: number
    remark: string
    status: number
  }[]
  waitMoney: number
  workDate: string
}

/* **请求函数** */
export async function getFinanceQueryDetailByPlanId(params: GetFinanceQueryDetailByPlanIdParams): Promise<any> {
  return request(`/finance/query/detail/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [设置支付密码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/373)
 *
 * @分类 [结算管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_44)
 * @标签 `结算管理`
 * @请求头 `GET /finance/set/password`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetFinanceSetPasswordQuery {
  /**
   * code
   */
  code: string
  /**
   * password
   */
  password: string
  /**
   * phone
   */
  phone: string
}

/* **返回类型** */
export type GetFinanceSetPasswordResponse = boolean

/* **请求函数** */
export async function getFinanceSetPassword(query: GetFinanceSetPasswordQuery): Promise<any> {
  return request(`/finance/set/password`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [发起补卡补件申请↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/205)
 *
 * @分类 [蓝色荣耀端：工人考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_46)
 * @标签 `蓝色荣耀端：工人考勤`
 * @请求头 `POST /app/out/apply`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PostAppOutApplyBody {
  applyName?: string
  /**
   * 补卡件数
   */
  cardAmount?: number
  /**
   * 补卡时间
   */
  cardDate?: string
  cardNo?: string
  dayDate?: string
  enterId?: number
  planId?: number
  remark?: string
}

/* **返回类型** */
export type PostAppOutApplyResponse = boolean

/* **请求函数** */
export async function postAppOutApply(body: PostAppOutApplyBody): Promise<any> {
  return request(`/app/out/apply`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [撤回↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/207)
 *
 * @分类 [蓝色荣耀端：工人考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_46)
 * @标签 `蓝色荣耀端：工人考勤`
 * @请求头 `GET /app/out/back/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface GetAppOutBackByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetAppOutBackByIdResponse = boolean

/* **请求函数** */
export async function getAppOutBackById(params: GetAppOutBackByIdParams): Promise<any> {
  return request(`/app/out/back/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [审批单详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/209)
 *
 * @分类 [蓝色荣耀端：工人考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_46)
 * @标签 `蓝色荣耀端：工人考勤`
 * @请求头 `GET /app/out/detail/{applyId}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface GetAppOutDetailByApplyIdParams {
  /**
   * applyId
   */
  applyId: string
}

/* **返回类型** */
export interface GetAppOutDetailByApplyIdResponse {
  /**
   * 类型：10用工；20考勤
   */
  applyType: number
  /**
   * 发起人
   */
  applyUserName: string
  approveFlowVOList: {
    detailVOList: {
      isOperate: number
      number: number
      operateDate: string
      operateName: string
      operateType: number
      remark: string
      status: number
    }[]
    number: number
  }[]
  /**
   * 审批单号
   */
  approveNo: string
  enterWorkApplyDTO: {
    /**
     * 审批单名称
     */
    applyName: string
    applyType: number
    /**
     * 补卡件数
     */
    cardAmount: number
    /**
     * 补卡时间
     */
    cardDate: string
    dayDate: string
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    enterId: number
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: {
      name: string
      path: string
      size: string
    }[]
    planId: number
    refuseRemark: string
    /**
     * 休息时长
     */
    relaxTime: string
    /**
     * 申请理由
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    userId: number
  }
  /**
   * 人脸照片
   */
  faceUrl: string
  /**
   * 创建时间
   */
  gmtCreate: string
  id: number
  /**
   * 需求人数
   */
  needPersonAmount: string
  /**
   * 状态：10:审批中；20已完成；30已拒绝；40已撤销
   */
  status: number
}

/* **请求函数** */
export async function getAppOutDetailByApplyId(params: GetAppOutDetailByApplyIdParams): Promise<any> {
  return request(`/app/out/detail/${params.applyId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [我发起的审批列表↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/211)
 *
 * @分类 [蓝色荣耀端：工人考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_46)
 * @标签 `蓝色荣耀端：工人考勤`
 * @请求头 `GET /app/out/query/list`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppOutQueryListQuery {
  /**
   * applyName
   */
  applyName?: string
  /**
   * cardNo
   */
  cardNo: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
}

/* **返回类型** */
export interface GetAppOutQueryListResponse {
  data: {
    applyId: number
    applyName: string
    approveRemark: string
    cardAmount: number
    cardDate: string
    enterId: number
    faceUrl: string
    gtmCreate: string
    remark: string
    status: number
    userName: string
  }[]
  total: number
}

/* **请求函数** */
export async function getAppOutQueryList(query: GetAppOutQueryListQuery): Promise<any> {
  return request(`/app/out/query/list`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [账号推送↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/433)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `POST /out/account`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求body类型** */
export interface PostOutAccountBody {
  enterName?: string
  id?: number
  name?: string
  otherInfo?: string
  password?: string
  phone?: string
  roleId?: number
}

/* **返回类型** */
export type PostOutAccountResponse = boolean

/* **请求函数** */
export async function postOutAccount(body: PostOutAccountBody): Promise<any> {
  return request(`/out/account`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [劳务确认考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/435)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/attendance/confirm/{planId}`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetOutAttendanceConfirmByPlanIdQuery {
  /**
   * enterId
   */
  enterId: string
}

/* **请求params类型** */
export interface GetOutAttendanceConfirmByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetOutAttendanceConfirmByPlanIdResponse = boolean

/* **请求函数** */
export async function getOutAttendanceConfirmByPlanId(
  query: GetOutAttendanceConfirmByPlanIdQuery,
  params: GetOutAttendanceConfirmByPlanIdParams,
): Promise<any> {
  return request(`/out/attendance/confirm/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取黑名单列表↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/437)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/black/list`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **返回类型** */
export type GetOutBlackListResponse = {
  aiotGuid: string
  bizData: string
  enterId: number
  gmtCreate: string
  gmtModified: string
  id: number
  idCard: string
  name: string
  phone: string
  status: number
}[]

/* **请求函数** */
export async function getOutBlackList(): Promise<any> {
  return request(`/out/black/list`, {
    method: Method.GET,
  })
}

/**
 * 接口 [设备数据回掉↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/439)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `POST /out/callback`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface PostOutCallbackQuery {
  /**
   * eventCode
   */
  eventCode?: string
  /**
   * eventGuid
   */
  eventGuid?: string
  /**
   * eventMsg
   */
  eventMsg?: string
}

/* **返回类型** */
export type PostOutCallbackResponse = boolean

/* **请求函数** */
export async function postOutCallback(query: PostOutCallbackQuery): Promise<any> {
  return request(`/out/callback`, {
    method: Method.POST,
    params: query,
  })
}

/**
 * 接口 [酒店取消用工计划公众号消息通知↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/441)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/cancel/message`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetOutCancelMessageQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * planId
   */
  planId: string
  /**
   * 多个逗号隔开
   */
  unionIds?: string
}

/* **返回类型** */
export type GetOutCancelMessageResponse = boolean

/* **请求函数** */
export async function getOutCancelMessage(query: GetOutCancelMessageQuery): Promise<any> {
  return request(`/out/cancel/message`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [酒店新订单公众号消息通知↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/443)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/confirm/message`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetOutConfirmMessageQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * planId
   */
  planId: string
  /**
   * 多个逗号隔开
   */
  unionIds?: string
}

/* **返回类型** */
export type GetOutConfirmMessageResponse = boolean

/* **请求函数** */
export async function getOutConfirmMessage(query: GetOutConfirmMessageQuery): Promise<any> {
  return request(`/out/confirm/message`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [主动删除缓存↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/445)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `POST /out/delete/cache`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface PostOutDeleteCacheQuery {
  /**
   * code
   */
  code: string
}

/* **返回类型** */
export type PostOutDeleteCacheResponse = boolean

/* **请求函数** */
export async function postOutDeleteCache(query: PostOutDeleteCacheQuery): Promise<any> {
  return request(`/out/delete/cache`, {
    method: Method.POST,
    params: query,
  })
}

/**
 * 接口 [企业新增↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/447)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `POST /out/enter`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求body类型** */
export interface PostOutEnterBody {
  address?: string
  businessLicense?: string
  city?: string
  contractPerson?: string
  contractPhone?: string
  country?: string
  email?: string
  externalLogonId?: string
  financeAccountId?: number
  financeAccountName?: string
  latitude?: string
  longitude?: string
  name?: string
  password?: string
  province?: string
  sign?: boolean
}

/* **返回类型** */
export type PostOutEnterResponse = boolean

/* **请求函数** */
export async function postOutEnter(body: PostOutEnterBody): Promise<any> {
  return request(`/out/enter`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [获取企业基本信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/449)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/enter/info/{enterId}`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求params类型** */
export interface GetOutEnterInfoByEnterIdParams {
  /**
   * enterId
   */
  enterId: string
}

/* **返回类型** */
export interface GetOutEnterInfoByEnterIdResponse {
  bizData: string
  gmtCreate: string
  gmtModified: string
  id: number
  name: string
  status: number
}

/* **请求函数** */
export async function getOutEnterInfoByEnterId(params: GetOutEnterInfoByEnterIdParams): Promise<any> {
  return request(`/out/enter/info/${params.enterId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [接受或拒绝酒店端的劳务添加邀请↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/451)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/labor`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutLaborQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * laborId
   */
  laborId: string
  /**
   * remark
   */
  remark: string
  /**
   * 10:通过；20拒绝
   */
  status?: string
}

/* **返回类型** */
export type GetOutLaborResponse = boolean

/* **请求函数** */
export async function getOutLabor(query: GetOutLaborQuery): Promise<any> {
  return request(`/out/labor`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [更新劳务公司签约账户↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/453)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/labor/info/{laborId}`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutLaborInfoByLaborIdQuery {
  /**
   * financeAccountId
   */
  financeAccountId: string
}

/* **请求params类型** */
export interface GetOutLaborInfoByLaborIdParams {
  /**
   * laborId
   */
  laborId: string
}

/* **返回类型** */
export type GetOutLaborInfoByLaborIdResponse = boolean

/* **请求函数** */
export async function getOutLaborInfoByLaborId(
  query: GetOutLaborInfoByLaborIdQuery,
  params: GetOutLaborInfoByLaborIdParams,
): Promise<any> {
  return request(`/out/labor/info/${params.laborId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [工人录用上报↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/455)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `POST /out/labor/user`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求body类型** */
export interface PostOutLaborUserBody {
  blackRemark?: string
  /**
   * 所属酒店ID
   */
  enterId?: number
  /**
   * 人脸照片
   */
  faceUrl?: string
  /**
   * 身份证
   */
  idCard?: string
  /**
   * 岗位名称
   */
  jobName?: string
  /**
   * 劳务工地ID
   */
  laborId?: number
  lastStatus?: number
  /**
   * 姓名
   */
  name?: string
  /**
   * 电话
   */
  phone?: string
  /**
   * 用工计划ID
   */
  planId?: number
  /**
   * 性别
   */
  sex?: string
}

/* **返回类型** */
export type PostOutLaborUserResponse = boolean

/* **请求函数** */
export async function postOutLaborUser(body: PostOutLaborUserBody): Promise<any> {
  return request(`/out/labor/user`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [人员离职↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/457)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/leave/job`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutLeaveJobQuery {
  /**
   * cardNo
   */
  cardNo: string
  /**
   * enterId
   */
  enterId: string
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetOutLeaveJobResponse = boolean

/* **请求函数** */
export async function getOutLeaveJob(query: GetOutLeaveJobQuery): Promise<any> {
  return request(`/out/leave/job`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [remove↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/459)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/remove`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutRemoveQuery {
  /**
   * guid
   */
  guid: string
}

/* **返回类型** */
export type GetOutRemoveResponse = boolean

/* **请求函数** */
export async function getOutRemove(query: GetOutRemoveQuery): Promise<any> {
  return request(`/out/remove`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [task1↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/461)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/task1`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **返回类型** */
export type GetOutTask1Response = boolean

/* **请求函数** */
export async function getOutTask1(): Promise<any> {
  return request(`/out/task1`, {
    method: Method.GET,
  })
}

/**
 * 接口 [task2↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/463)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/task2`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **返回类型** */
export type GetOutTask2Response = boolean

/* **请求函数** */
export async function getOutTask2(): Promise<any> {
  return request(`/out/task2`, {
    method: Method.GET,
  })
}

/**
 * 接口 [task3↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/465)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/task3`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **返回类型** */
export type GetOutTask3Response = boolean

/* **请求函数** */
export async function getOutTask3(): Promise<any> {
  return request(`/out/task3`, {
    method: Method.GET,
  })
}

/**
 * 接口 [we↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/467)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/we`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **返回类型** */
export type GetOutWeResponse = boolean

/* **请求函数** */
export async function getOutWe(): Promise<any> {
  return request(`/out/we`, {
    method: Method.GET,
  })
}

/**
 * 接口 [we1↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/469)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/we1`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **返回类型** */
export type GetOutWe1Response = boolean

/* **请求函数** */
export async function getOutWe1(): Promise<any> {
  return request(`/out/we1`, {
    method: Method.GET,
  })
}

/**
 * 接口 [接单中审批用工计划取消↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/471)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/work/cancel/plan`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutWorkCancelPlanQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * laborId
   */
  laborId: string
  /**
   * planId
   */
  planId: string
  /**
   * 10:确认取消；20拒绝取消
   */
  status?: string
}

/* **返回类型** */
export type GetOutWorkCancelPlanResponse = boolean

/* **请求函数** */
export async function getOutWorkCancelPlan(query: GetOutWorkCancelPlanQuery): Promise<any> {
  return request(`/out/work/cancel/plan`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [劳务端主动申请取消用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/473)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/work/out/cancel/plan`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutWorkOutCancelPlanQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * laborId
   */
  laborId: string
  /**
   * planId
   */
  planId: string
  /**
   * remark
   */
  remark?: string
}

/* **返回类型** */
export type GetOutWorkOutCancelPlanResponse = boolean

/* **请求函数** */
export async function getOutWorkOutCancelPlan(query: GetOutWorkOutCancelPlanQuery): Promise<any> {
  return request(`/out/work/out/cancel/plan`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划确认↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/475)
 *
 * @分类 [其他服务需要调用的接口↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_28)
 * @标签 `其他服务需要调用的接口`
 * @请求头 `GET /out/work/plan`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetOutWorkPlanQuery {
  /**
   * enterId
   */
  enterId: string
  /**
   * laborId
   */
  laborId: string
  /**
   * planId
   */
  planId: string
  /**
   * 10:确认；20拒绝
   */
  status?: string
}

/* **返回类型** */
export type GetOutWorkPlanResponse = boolean

/* **请求函数** */
export async function getOutWorkPlan(query: GetOutWorkPlanQuery): Promise<any> {
  return request(`/out/work/plan`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [添加劳务公司↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/409)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `POST /labor/add`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PostLaborAddBody {
  address?: string
  contractPerson?: string
  contractPhone?: string
  email?: string
  enterId?: number
  financeAccountId?: number
  id?: number
  laborId?: number
  laborName?: string
  remark?: string
}

/* **返回类型** */
export type PostLaborAddResponse = boolean

/* **请求函数** */
export async function postLaborAdd(body: PostLaborAddBody): Promise<any> {
  return request(`/labor/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [劳务邀请二维码↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/411)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `GET /labor/code`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **返回类型** */
export type GetLaborCodeResponse = string

/* **请求函数** */
export async function getLaborCode(): Promise<any> {
  return request(`/labor/code`, {
    method: Method.GET,
  })
}

/**
 * 接口 [申请中劳务操作↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/413)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `PUT /labor/code/status/{id}`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求query类型** */
export interface PutLaborCodeStatusByIdQuery {
  /**
   * 拒绝原因
   */
  remark?: string
  /**
   * 10:申请通过；20申请拒绝
   */
  status?: string
}

/* **请求params类型** */
export interface PutLaborCodeStatusByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutLaborCodeStatusByIdResponse = boolean

/* **请求函数** */
export async function putLaborCodeStatusById(
  query: PutLaborCodeStatusByIdQuery,
  params: PutLaborCodeStatusByIdParams,
): Promise<any> {
  return request(`/labor/code/status/${params.id}`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [删除劳务公司↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/415)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `DELETE /labor/delete/{id}`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求params类型** */
export interface DeleteLaborDeleteByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeleteLaborDeleteByIdResponse = boolean

/* **请求函数** */
export async function deleteLaborDeleteById(params: DeleteLaborDeleteByIdParams): Promise<any> {
  return request(`/labor/delete/${params.id}`, {
    method: Method.DELETE,
  })
}

/**
 * 接口 [编辑劳务公司↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/417)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `PUT /labor/edit`
 * @更新时间 `2023-10-30 15:03:34`
 */

/* **请求body类型** */
export interface PutLaborEditBody {
  address?: string
  contractPerson?: string
  contractPhone?: string
  email?: string
  enterId?: number
  financeAccountId?: number
  id?: number
  laborId?: number
  laborName?: string
  remark?: string
}

/* **返回类型** */
export type PutLaborEditResponse = boolean

/* **请求函数** */
export async function putLaborEdit(body: PutLaborEditBody): Promise<any> {
  return request(`/labor/edit`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [获取劳务公司下拉框↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/419)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `GET /labor/labor/list`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **返回类型** */
export interface GetLaborLaborListResponse {}

/* **请求函数** */
export async function getLaborLaborList(): Promise<any> {
  return request(`/labor/labor/list`, {
    method: Method.GET,
  })
}

/**
 * 接口 [操作↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/421)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `PUT /labor/operate/{id}`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface PutLaborOperateByIdQuery {
  /**
   * 10:撤回；20启用；30停用
   */
  status?: string
}

/* **请求params类型** */
export interface PutLaborOperateByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutLaborOperateByIdResponse = boolean

/* **请求函数** */
export async function putLaborOperateById(
  query: PutLaborOperateByIdQuery,
  params: PutLaborOperateByIdParams,
): Promise<any> {
  return request(`/labor/operate/${params.id}`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [劳务公司扫码申请加入↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/423)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `POST /labor/out/code/add`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求body类型** */
export interface PostLaborOutCodeAddBody {
  address?: string
  contractPerson?: string
  contractPhone?: string
  email?: string
  enterId?: number
  financeAccountId?: number
  id?: number
  laborId?: number
  laborName?: string
  remark?: string
}

/* **返回类型** */
export type PostLaborOutCodeAddResponse = boolean

/* **请求函数** */
export async function postLaborOutCodeAdd(body: PostLaborOutCodeAddBody): Promise<any> {
  return request(`/labor/out/code/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/425)
 *
 * @分类 [劳务公司管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_29)
 * @标签 `劳务公司管理`
 * @请求头 `GET /labor/query`
 * @更新时间 `2023-10-30 15:03:35`
 */

/* **请求query类型** */
export interface GetLaborQueryQuery {
  contractPerson?: string
  contractPhone?: string
  laborName?: string
  pageNum?: number
  pageSize?: number
  status?: string
}

/* **返回类型** */
export interface GetLaborQueryResponse {
  data: {
    address: string
    contractPerson: string
    contractPhone: string
    email: string
    financeAccountId: number
    gmtCreate: string
    id: number
    laborId: number
    laborName: string
    remark: string
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getLaborQuery(query: GetLaborQueryQuery): Promise<any> {
  return request(`/labor/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [添加黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/227)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `PUT /app/user/black/add`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PutAppUserBlackAddBody {
  /**
   * 备注
   */
  blackRemark?: string
  /**
   * 身份证
   */
  idCard?: string
  /**
   * 姓名
   */
  name?: string
}

/* **返回类型** */
export type PutAppUserBlackAddResponse = boolean

/* **请求函数** */
export async function putAppUserBlackAdd(body: PutAppUserBlackAddBody): Promise<any> {
  return request(`/app/user/black/add`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [移除黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/229)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `PUT /app/user/black/remove/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface PutAppUserBlackRemoveByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutAppUserBlackRemoveByIdResponse = boolean

/* **请求函数** */
export async function putAppUserBlackRemoveById(params: PutAppUserBlackRemoveByIdParams): Promise<any> {
  return request(`/app/user/black/remove/${params.id}`, {
    method: Method.PUT,
  })
}

/**
 * 接口 [离职人员转入黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/231)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `PUT /app/user/black/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface PutAppUserBlackByIdQuery {
  /**
   * remark
   */
  remark?: string
}

/* **请求params类型** */
export interface PutAppUserBlackByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutAppUserBlackByIdResponse = boolean

/* **请求函数** */
export async function putAppUserBlackById(
  query: PutAppUserBlackByIdQuery,
  params: PutAppUserBlackByIdParams,
): Promise<any> {
  return request(`/app/user/black/${params.id}`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [人员详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/233)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `GET /app/user/detail/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface GetAppUserDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetAppUserDetailByIdResponse {
  age: string
  blackRemark: string
  cardNo: string
  enterUserDetailOtherVO: {
    jobName: string
    joinTime: string
    laborName: string
    planName: string
    workDay: number
    workHour: number
  }
  enterUserWorkRecordVOList: {
    day: number
    endDate: string
    hour: number
    id: number
    item: number
    jobName: string
    moneyType: number
    planName: string
    startDate: string
    totalMoney: number
  }[]
  faceUrl: string
  name: string
  phone: string
  sex: string
  status: number
  totalDay: number
  totalHour: number
  totalMoney: number
  totalTime: number
  totalWorkTime: number
}

/* **请求函数** */
export async function getAppUserDetailById(params: GetAppUserDetailByIdParams): Promise<any> {
  return request(`/app/user/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [离职↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/235)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `PUT /app/user/left/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface PutAppUserLeftByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutAppUserLeftByIdResponse = boolean

/* **请求函数** */
export async function putAppUserLeftById(params: PutAppUserLeftByIdParams): Promise<any> {
  return request(`/app/user/left/${params.id}`, {
    method: Method.PUT,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/237)
 *
 * @分类 [小程序端接口:灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_31)
 * @标签 `小程序端接口:灵工管理`
 * @请求头 `GET /app/user/query`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppUserQueryQuery {
  cardNo?: string
  enterId?: string
  laborId?: string
  name?: string
  pageNum?: number
  pageSize?: number
  phone?: string
  userIdList?: string
  关键字?: string
  '状态：20在职；30离职；40黑名单'?: string
  用工计划?: string
}

/* **返回类型** */
export interface GetAppUserQueryResponse {
  data: {
    age: string
    cardNo: string
    faceUrl: string
    id: number
    jobName: string
    laborName: string
    name: string
    phone: string
    sex: string
  }[]
  total: number
}

/* **请求函数** */
export async function getAppUserQuery(query: GetAppUserQueryQuery): Promise<any> {
  return request(`/app/user/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [发起用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/213)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `POST /app/plan/add`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PostAppPlanAddBody {
  /**
   * 自动授权的设备列表
   */
  deviceIdList?: {
    deviceId?: number
    deviceName?: string
  }[]
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: string[]
  /**
   * 是否为节假日标准计价:true是；false否
   */
  holidayType?: boolean
  id?: number
  /**
   * 是否自动授权:true是；false否
   */
  isAutoAuth?: boolean
  isOverNight?: boolean
  /**
   * 劳务公司
   */
  laborId?: number
  /**
   * 劳务状态：10计划申请取消中；20申请取消已被拒绝
   */
  laborStatus?: number
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType?: number
  /**
   * 计划名称
   */
  planName?: string
  relateWorkId?: number
  /**
   * 休息时长
   */
  relaxTime?: number
  /**
   * 取消原因
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  /**
   * 用工负责人
   */
  workPlanLeader?: number
}

/* **返回类型** */
export type PostAppPlanAddResponse = boolean

/* **请求函数** */
export async function postAppPlanAdd(body: PostAppPlanAddBody): Promise<any> {
  return request(`/app/plan/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [一键授权↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/215)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `POST /app/plan/auth/auth`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PostAppPlanAuthAuthBody {
  /**
   * 设备列表
   */
  deviceIdList?: number[]
  id?: number
  /**
   * 岗位列表
   */
  jobIdList?: number[]
}

/* **返回类型** */
export type PostAppPlanAuthAuthResponse = boolean

/* **请求函数** */
export async function postAppPlanAuthAuth(body: PostAppPlanAuthAuthBody): Promise<any> {
  return request(`/app/plan/auth/auth`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [取消用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/217)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `GET /app/plan/cancel/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppPlanCancelByIdQuery {
  /**
   * remark
   */
  remark?: string
}

/* **请求params类型** */
export interface GetAppPlanCancelByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetAppPlanCancelByIdResponse = boolean

/* **请求函数** */
export async function getAppPlanCancelById(
  query: GetAppPlanCancelByIdQuery,
  params: GetAppPlanCancelByIdParams,
): Promise<any> {
  return request(`/app/plan/cancel/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/219)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `GET /app/plan/detail/{id}`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求params类型** */
export interface GetAppPlanDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetAppPlanDetailByIdResponse {
  enterWorkPlanDTO: {
    /**
     * 自动授权的设备列表
     */
    deviceIdList: {
      deviceId: number
      deviceName: string
    }[]
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: string[]
    /**
     * 是否为节假日标准计价:true是；false否
     */
    holidayType: boolean
    id: number
    /**
     * 是否自动授权:true是；false否
     */
    isAutoAuth: boolean
    isOverNight: boolean
    /**
     * 劳务公司
     */
    laborId: number
    /**
     * 劳务状态：10计划申请取消中；20申请取消已被拒绝
     */
    laborStatus: number
    /**
     * 计价方式：10小时；20按天；30按计件
     */
    moneyType: number
    /**
     * 计划名称
     */
    planName: string
    relateWorkId: number
    /**
     * 休息时长
     */
    relaxTime: number
    /**
     * 取消原因
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    /**
     * 用工负责人
     */
    workPlanLeader: number
  }
  /**
   * 人员信息
   */
  enterWorkPlanUserVOList: {
    /**
     * 年龄
     */
    age: string
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 身份证
     */
    idCard: string
    /**
     * 岗位
     */
    jobName: string
    /**
     * 姓名
     */
    name: string
    /**
     * 电话
     */
    phone: string
    /**
     * 性别
     */
    sex: string
    status: number
    /**
     * 状态名称
     */
    statusName: number
    userId: number
  }[]
  /**
   * 人员进度信息
   */
  enterWorkScheduleVOList: {
    /**
     * 已经招的人数
     */
    hadJoinAmount: number
    /**
     * 岗位名称
     */
    jobName: string
    /**
     * 总人数
     */
    totalAmount: number
  }[]
  /**
   * 已经招收的人数
   */
  hadJoinAmount: number
  /**
   * 主键ID
   */
  id: number
  /**
   * 劳务公司名称
   */
  laborName: string
  /**
   * 工单号
   */
  planNo: string
  /**
   * 关联的审批单名称
   */
  relateWorkIdName: string
  /**
   * 单日费用
   */
  singleMoney: number
  /**
   * 状态
   */
  status: number
  /**
   * 总人数
   */
  totalAmount: number
  /**
   * 天数汇总
   */
  totalDay: number
  /**
   * 工时汇总
   */
  totalHour: number
  /**
   * 总费用
   */
  totalMoney: number
  /**
   * 用工负责人名称
   */
  workPlanLeaderName: string
}

/* **请求函数** */
export async function getAppPlanDetailById(params: GetAppPlanDetailByIdParams): Promise<any> {
  return request(`/app/plan/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [编辑用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/221)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `PUT /app/plan/edit`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求body类型** */
export interface PutAppPlanEditBody {
  /**
   * 自动授权的设备列表
   */
  deviceIdList?: {
    deviceId?: number
    deviceName?: string
  }[]
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: string[]
  /**
   * 是否为节假日标准计价:true是；false否
   */
  holidayType?: boolean
  id?: number
  /**
   * 是否自动授权:true是；false否
   */
  isAutoAuth?: boolean
  isOverNight?: boolean
  /**
   * 劳务公司
   */
  laborId?: number
  /**
   * 劳务状态：10计划申请取消中；20申请取消已被拒绝
   */
  laborStatus?: number
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType?: number
  /**
   * 计划名称
   */
  planName?: string
  relateWorkId?: number
  /**
   * 休息时长
   */
  relaxTime?: number
  /**
   * 取消原因
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  /**
   * 用工负责人
   */
  workPlanLeader?: number
}

/* **返回类型** */
export type PutAppPlanEditResponse = boolean

/* **请求函数** */
export async function putAppPlanEdit(body: PutAppPlanEditBody): Promise<any> {
  return request(`/app/plan/edit`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [用工计划列表查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/223)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `GET /app/plan/query`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppPlanQueryQuery {
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * 状态10:待接单；20接单中；30进行中；40待考勤确认；50待劳务确认；60待劳务结算；70：已拒绝；80 已完成；90：已取消
   */
  status?: string
}

/* **返回类型** */
export interface GetAppPlanQueryResponse {
  data: {
    /**
     * 用工时间(天)
     */
    dateDay: number
    /**
     * 用工结束时间
     */
    dateEndDay: string
    /**
     * 用工结束时段
     */
    dateEndHour: string
    /**
     * 用工时段(小时)
     */
    dateHour: number
    /**
     * 用工开始时间
     */
    dateStartDay: string
    /**
     * 用工开始时段
     */
    dateStartHour: string
    /**
     * 主键ID
     */
    id: number
    /**
     * 计价方式：10小时；20按天；30按计件
     */
    moneyType: number
    /**
     * 用工计划名称
     */
    planName: string
    /**
     * 工单号
     */
    planNo: string
    /**
     * 状态10:待接单；20接单中；30进行中；40待考勤确认；50待劳务确认；60待劳务结算；70：已拒绝；80 已完成；90：已取消
     */
    status: number
    /**
     * 总天数
     */
    totalDay: number
    /**
     * 总工时
     */
    totalHour: number
    /**
     * 预计总费用
     */
    totalMoney: number
  }[]
  total: number
}

/* **请求函数** */
export async function getAppPlanQuery(query: GetAppPlanQueryQuery): Promise<any> {
  return request(`/app/plan/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划数量查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/225)
 *
 * @分类 [小程序端：用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_34)
 * @标签 `小程序端：用工计划管理`
 * @请求头 `GET /app/plan/query/count`
 * @更新时间 `2023-10-30 15:03:30`
 */

/* **请求query类型** */
export interface GetAppPlanQueryCountQuery {
  /**
   * checkValue
   */
  checkValue?: string
}

/* **返回类型** */
export interface GetAppPlanQueryCountResponse {
  /**
   * 待考勤确认
   */
  attendanceAmount: number
  /**
   * 已取消
   */
  cancelAmount: number
  /**
   * 已完成
   */
  finishAmount: number
  /**
   * 待劳务确认
   */
  laboringAmount: number
  /**
   * 待财务结算
   */
  moneyAmount: number
  /**
   * 接单中数量
   */
  orderingAmount: number
  /**
   * 已拒绝
   */
  refuseAmount: number
  /**
   * 待接单数量
   */
  waitingAmount: number
  /**
   * 进行中数量
   */
  workingAmount: number
}

/* **请求函数** */
export async function getAppPlanQueryCount(query: GetAppPlanQueryCountQuery): Promise<any> {
  return request(`/app/plan/query/count`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [列表查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/195)
 *
 * @分类 [小程序端：考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_35)
 * @标签 `小程序端：考勤管理`
 * @请求头 `GET /app/attendance/list`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAttendanceListQuery {
  /**
   * 30：进行中；40已结束
   */
  status?: string
}

/* **返回类型** */
export type GetAppAttendanceListResponse = {
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType: number
  /**
   * 用工计划Id
   */
  planId: number
  /**
   * 用工计划名称
   */
  planName: string
  /**
   * 考勤异常
   */
  todayAbnormalAmount: number
  /**
   * 今日出勤
   */
  todayAttendanceAmount: number
  /**
   * 今日工时
   */
  todayHour: number
  /**
   * 今日排班
   */
  todayPeopleAmount: number
  /**
   * 总天数
   */
  totalDay: number
  /**
   * 总工时
   */
  totalHour: number
  /**
   * 总计件
   */
  totalItem: number
  /**
   * 出勤人次
   */
  totalPeopleAmount: number
}[]

/* **请求函数** */
export async function getAppAttendanceList(query: GetAppAttendanceListQuery): Promise<any> {
  return request(`/app/attendance/list`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取完工用工计划详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/197)
 *
 * @分类 [小程序端：考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_35)
 * @标签 `小程序端：考勤管理`
 * @请求头 `GET /app/attendance/plan/detail/{planId}`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求params类型** */
export interface GetAppAttendancePlanDetailByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAppAttendancePlanDetailByPlanIdResponse {
  /**
   * 旷工
   */
  abstainedAmount: number
  /**
   * 人员信息详情
   */
  attendancePlanUserDetailVOList: {
    /**
     * 旷工
     */
    abstainedAmount: number
    /**
     * 早退
     */
    backAmount: number
    /**
     * 迟到
     */
    delayAmount: number
    /**
     * 人脸照
     */
    faceUrl: string
    /**
     * 岗位名称
     */
    jobName: string
    /**
     * 缺卡
     */
    missAmount: number
    /**
     * 人员名称
     */
    personName: string
    /**
     * 电话
     */
    phone: string
    /**
     * 总天数
     */
    totalDay: number
    /**
     * 总工时
     */
    totalHour: number
    /**
     * 总计件
     */
    totalItem: number
    /**
     * 用户ID
     */
    userId: number
  }[]
  /**
   * 早退
   */
  backAmount: number
  /**
   * 迟到
   */
  delayAmount: number
  /**
   * 缺卡
   */
  missAmount: number
  /**
   * 人员数量
   */
  peopleAmount: number
  /**
   * 总天数
   */
  totalDay: number
  /**
   * 总工时
   */
  totalHour: number
  /**
   * 总计件
   */
  totalItem: number
  /**
   * 出勤人次
   */
  totalPeopleAmount: number
}

/* **请求函数** */
export async function getAppAttendancePlanDetailByPlanId(
  params: GetAppAttendancePlanDetailByPlanIdParams,
): Promise<any> {
  return request(`/app/attendance/plan/detail/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [进行中计划详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/199)
 *
 * @分类 [小程序端：考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_35)
 * @标签 `小程序端：考勤管理`
 * @请求头 `GET /app/attendance/plan/{planId}`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAttendancePlanByPlanIdQuery {
  /**
   * 格式yyyy-MM-dd
   */
  queryDate?: string
}

/* **请求params类型** */
export interface GetAppAttendancePlanByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAppAttendancePlanByPlanIdResponse {
  abnormalAmount: number
  abnormalAttendancePeopleList: {
    afterDate: string
    afterStatus: number
    faceUrl: string
    /**
     * 计件数量
     */
    itemAmount: number
    moonDate: string
    moonStatus: number
    phone: string
    todayHour: number
    /**
     * 人员id
     */
    userId: number
    /**
     * 人员名称
     */
    userName: string
  }[]
  attendanceAmount: number
  hadAttendancePeopleList: {
    afterDate: string
    afterStatus: number
    faceUrl: string
    /**
     * 计件数量
     */
    itemAmount: number
    moonDate: string
    moonStatus: number
    phone: string
    todayHour: number
    /**
     * 人员id
     */
    userId: number
    /**
     * 人员名称
     */
    userName: string
  }[]
  notAttendancePeopleList: {
    afterDate: string
    afterStatus: number
    faceUrl: string
    /**
     * 计件数量
     */
    itemAmount: number
    moonDate: string
    moonStatus: number
    phone: string
    todayHour: number
    /**
     * 人员id
     */
    userId: number
    /**
     * 人员名称
     */
    userName: string
  }[]
  /**
   * 用工计划名称
   */
  planName: string
  totalHour: number
  totalPeople: number
}

/* **请求函数** */
export async function getAppAttendancePlanByPlanId(
  query: GetAppAttendancePlanByPlanIdQuery,
  params: GetAppAttendancePlanByPlanIdParams,
): Promise<any> {
  return request(`/app/attendance/plan/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [获取个人考勤详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/201)
 *
 * @分类 [小程序端：考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_35)
 * @标签 `小程序端：考勤管理`
 * @请求头 `GET /app/attendance/user/detail/{planId}`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求query类型** */
export interface GetAppAttendanceUserDetailByPlanIdQuery {
  /**
   * 月份yyyy-MM-dd
   */
  month?: string
  /**
   * userId
   */
  userId: string
}

/* **请求params类型** */
export interface GetAppAttendanceUserDetailByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAppAttendanceUserDetailByPlanIdResponse {
  /**
   * 人员月度考勤详情
   */
  attendanceUserMonthVOList: {
    /**
     * 是否异常：true 是；false 否
     */
    abnormal: boolean
    /**
     * 下班打卡时间
     */
    afterDate: string
    /**
     * 下班打卡状态
     */
    afterStatus: number
    /**
     * 打卡日期：yyyy-MM-dd
     */
    dayDate: string
    /**
     * 计件数量
     */
    itemAmount: number
    /**
     * 上班打卡时间
     */
    moonDate: string
    /**
     * 上班打卡状态
     */
    moonStatus: number
    /**
     * 工作工时
     */
    workHour: number
  }[]
  /**
   * 人脸
   */
  faceUrl: string
  /**
   * 异常
   */
  totalAbnormal: number
  /**
   * 累计天数
   */
  totalDays: number
  /**
   * 累计工时
   */
  totalHour: number
  /**
   * 计件
   */
  totalItem: number
}

/* **请求函数** */
export async function getAppAttendanceUserDetailByPlanId(
  query: GetAppAttendanceUserDetailByPlanIdQuery,
  params: GetAppAttendanceUserDetailByPlanIdParams,
): Promise<any> {
  return request(`/app/attendance/user/detail/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [工人计件↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/203)
 *
 * @分类 [小程序端：考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_35)
 * @标签 `小程序端：考勤管理`
 * @请求头 `POST /app/attendance/user/item`
 * @更新时间 `2023-10-30 15:03:29`
 */

/* **请求body类型** */
export interface PostAppAttendanceUserItemBody {
  amount?: number
  planId?: number
  queryDate?: string
  remark?: string
  userId?: number
}

/* **返回类型** */
export type PostAppAttendanceUserItemResponse = boolean

/* **请求函数** */
export async function postAppAttendanceUserItem(body: PostAppAttendanceUserItemBody): Promise<any> {
  return request(`/app/attendance/user/item`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [添加黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/503)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `PUT /user/black/add`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求body类型** */
export interface PutUserBlackAddBody {
  /**
   * 备注
   */
  blackRemark?: string
  /**
   * 身份证
   */
  idCard?: string
  /**
   * 姓名
   */
  name?: string
}

/* **返回类型** */
export type PutUserBlackAddResponse = boolean

/* **请求函数** */
export async function putUserBlackAdd(body: PutUserBlackAddBody): Promise<any> {
  return request(`/user/black/add`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [移除黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/505)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `PUT /user/black/remove/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface PutUserBlackRemoveByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutUserBlackRemoveByIdResponse = boolean

/* **请求函数** */
export async function putUserBlackRemoveById(params: PutUserBlackRemoveByIdParams): Promise<any> {
  return request(`/user/black/remove/${params.id}`, {
    method: Method.PUT,
  })
}

/**
 * 接口 [离职人员转入黑名单↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/507)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `PUT /user/black/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface PutUserBlackByIdQuery {
  /**
   * remark
   */
  remark?: string
}

/* **请求params类型** */
export interface PutUserBlackByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutUserBlackByIdResponse = boolean

/* **请求函数** */
export async function putUserBlackById(query: PutUserBlackByIdQuery, params: PutUserBlackByIdParams): Promise<any> {
  return request(`/user/black/${params.id}`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [人员详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/509)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `GET /user/detail/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface GetUserDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetUserDetailByIdResponse {
  age: string
  blackRemark: string
  cardNo: string
  enterUserDetailOtherVO: {
    jobName: string
    joinTime: string
    laborName: string
    planName: string
    workDay: number
    workHour: number
  }
  enterUserWorkRecordVOList: {
    day: number
    endDate: string
    hour: number
    id: number
    item: number
    jobName: string
    moneyType: number
    planName: string
    startDate: string
    totalMoney: number
  }[]
  faceUrl: string
  name: string
  phone: string
  sex: string
  status: number
  totalDay: number
  totalHour: number
  totalMoney: number
  totalTime: number
  totalWorkTime: number
}

/* **请求函数** */
export async function getUserDetailById(params: GetUserDetailByIdParams): Promise<any> {
  return request(`/user/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [离职↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/511)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `PUT /user/left/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface PutUserLeftByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutUserLeftByIdResponse = boolean

/* **请求函数** */
export async function putUserLeftById(params: PutUserLeftByIdParams): Promise<any> {
  return request(`/user/left/${params.id}`, {
    method: Method.PUT,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/513)
 *
 * @分类 [灵工管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_41)
 * @标签 `灵工管理`
 * @请求头 `GET /user/query`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface GetUserQueryQuery {
  cardNo?: string
  enterId?: string
  laborId?: string
  name?: string
  pageNum?: number
  pageSize?: number
  phone?: string
  userIdList?: string
  关键字?: string
  '状态：20在职；30离职；40黑名单'?: string
  用工计划?: string
}

/* **返回类型** */
export interface GetUserQueryResponse {
  data: {
    age: string
    cardNo: string
    faceUrl: string
    id: number
    jobName: string
    laborName: string
    name: string
    phone: string
    sex: string
  }[]
  total: number
}

/* **请求函数** */
export async function getUserQuery(query: GetUserQueryQuery): Promise<any> {
  return request(`/user/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [发起用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/477)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `POST /plan/add`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求body类型** */
export interface PostPlanAddBody {
  /**
   * 自动授权的设备列表
   */
  deviceIdList?: {
    deviceId?: number
    deviceName?: string
  }[]
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: string[]
  /**
   * 是否为节假日标准计价:true是；false否
   */
  holidayType?: boolean
  id?: number
  /**
   * 是否自动授权:true是；false否
   */
  isAutoAuth?: boolean
  isOverNight?: boolean
  /**
   * 劳务公司
   */
  laborId?: number
  /**
   * 劳务状态：10计划申请取消中；20申请取消已被拒绝
   */
  laborStatus?: number
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType?: number
  /**
   * 计划名称
   */
  planName?: string
  relateWorkId?: number
  /**
   * 休息时长
   */
  relaxTime?: number
  /**
   * 取消原因
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  /**
   * 用工负责人
   */
  workPlanLeader?: number
}

/* **返回类型** */
export type PostPlanAddResponse = boolean

/* **请求函数** */
export async function postPlanAdd(body: PostPlanAddBody): Promise<any> {
  return request(`/plan/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [一键授权↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/479)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/auth/auto`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求body类型** */
export interface GetPlanAuthAutoBody {
  /**
   * 设备列表
   */
  deviceIdList?: number[]
  id?: number
  /**
   * 岗位列表
   */
  jobIdList?: number[]
}

/* **返回类型** */
export type GetPlanAuthAutoResponse = boolean

/* **请求函数** */
export async function getPlanAuthAuto(body: GetPlanAuthAutoBody): Promise<any> {
  return request(`/plan/auth/auto`, {
    method: Method.GET,

    data: body,
  })
}

/**
 * 接口 [接单中取消计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/481)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/cancel/labor/{id}`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetPlanCancelLaborByIdQuery {
  /**
   * remark
   */
  remark?: string
}

/* **请求params类型** */
export interface GetPlanCancelLaborByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetPlanCancelLaborByIdResponse = boolean

/* **请求函数** */
export async function getPlanCancelLaborById(
  query: GetPlanCancelLaborByIdQuery,
  params: GetPlanCancelLaborByIdParams,
): Promise<any> {
  return request(`/plan/cancel/labor/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [劳务申请取消计划查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/483)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/cancel/query`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetPlanCancelQueryQuery {
  /**
   * 10:申请中；20已拒绝
   */
  status?: string
}

/* **返回类型** */
export type GetPlanCancelQueryResponse = {
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList: {
    /**
     * 数量
     */
    amount: number
    /**
     * 其他业务字段
     */
    bizData: string
    /**
     * 假期岗位单价
     */
    holidayMoney: number
    /**
     * 岗位id
     */
    jobId: number
    /**
     * 岗位名称
     */
    jobName: string
    /**
     * 男数量
     */
    manNumber: string
    maxAge: string
    minAge: string
    /**
     * 岗位单价
     */
    money: number
    /**
     * 单位
     */
    unit: string
    /**
     * 女数量
     */
    womanNumber: string
  }[]
  id: number
  /**
   * 劳务公司名称
   */
  laborName: string
  /**
   * 计划名称
   */
  planName: string
  /**
   * 计划工单号
   */
  planNo: string
  /**
   * 拒绝原因
   */
  refuseRemark: string
  /**
   * 取消原因
   */
  remark: string
}[]

/* **请求函数** */
export async function getPlanCancelQuery(query: GetPlanCancelQueryQuery): Promise<any> {
  return request(`/plan/cancel/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [取消用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/485)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/cancel/{id}`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求query类型** */
export interface GetPlanCancelByIdQuery {
  /**
   * remark
   */
  remark?: string
}

/* **请求params类型** */
export interface GetPlanCancelByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetPlanCancelByIdResponse = boolean

/* **请求函数** */
export async function getPlanCancelById(query: GetPlanCancelByIdQuery, params: GetPlanCancelByIdParams): Promise<any> {
  return request(`/plan/cancel/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/487)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/detail/{id}`
 * @更新时间 `2023-10-30 15:03:36`
 */

/* **请求params类型** */
export interface GetPlanDetailByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export interface GetPlanDetailByIdResponse {
  enterWorkPlanDTO: {
    /**
     * 自动授权的设备列表
     */
    deviceIdList: {
      deviceId: number
      deviceName: string
    }[]
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: string[]
    /**
     * 是否为节假日标准计价:true是；false否
     */
    holidayType: boolean
    id: number
    /**
     * 是否自动授权:true是；false否
     */
    isAutoAuth: boolean
    isOverNight: boolean
    /**
     * 劳务公司
     */
    laborId: number
    /**
     * 劳务状态：10计划申请取消中；20申请取消已被拒绝
     */
    laborStatus: number
    /**
     * 计价方式：10小时；20按天；30按计件
     */
    moneyType: number
    /**
     * 计划名称
     */
    planName: string
    relateWorkId: number
    /**
     * 休息时长
     */
    relaxTime: number
    /**
     * 取消原因
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    /**
     * 用工负责人
     */
    workPlanLeader: number
  }
  /**
   * 人员信息
   */
  enterWorkPlanUserVOList: {
    /**
     * 年龄
     */
    age: string
    /**
     * 人脸照片
     */
    faceUrl: string
    /**
     * 身份证
     */
    idCard: string
    /**
     * 岗位
     */
    jobName: string
    /**
     * 姓名
     */
    name: string
    /**
     * 电话
     */
    phone: string
    /**
     * 性别
     */
    sex: string
    status: number
    /**
     * 状态名称
     */
    statusName: number
    userId: number
  }[]
  /**
   * 人员进度信息
   */
  enterWorkScheduleVOList: {
    /**
     * 已经招的人数
     */
    hadJoinAmount: number
    /**
     * 岗位名称
     */
    jobName: string
    /**
     * 总人数
     */
    totalAmount: number
  }[]
  /**
   * 已经招收的人数
   */
  hadJoinAmount: number
  /**
   * 主键ID
   */
  id: number
  /**
   * 劳务公司名称
   */
  laborName: string
  /**
   * 工单号
   */
  planNo: string
  /**
   * 关联的审批单名称
   */
  relateWorkIdName: string
  /**
   * 单日费用
   */
  singleMoney: number
  /**
   * 状态
   */
  status: number
  /**
   * 总人数
   */
  totalAmount: number
  /**
   * 天数汇总
   */
  totalDay: number
  /**
   * 工时汇总
   */
  totalHour: number
  /**
   * 总费用
   */
  totalMoney: number
  /**
   * 用工负责人名称
   */
  workPlanLeaderName: string
}

/* **请求函数** */
export async function getPlanDetailById(params: GetPlanDetailByIdParams): Promise<any> {
  return request(`/plan/detail/${params.id}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [编辑用工计划↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/489)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `PUT /plan/edit`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求body类型** */
export interface PutPlanEditBody {
  /**
   * 自动授权的设备列表
   */
  deviceIdList?: {
    deviceId?: number
    deviceName?: string
  }[]
  /**
   * 结束时间
   */
  endDate?: string
  /**
   * 结束用工时段
   */
  endHour?: string
  /**
   * 岗位需求
   */
  enterWorkApplyJobDTOList?: {
    /**
     * 数量
     */
    amount?: number
    /**
     * 其他业务字段
     */
    bizData?: string
    /**
     * 假期岗位单价
     */
    holidayMoney?: number
    /**
     * 岗位id
     */
    jobId?: number
    /**
     * 岗位名称
     */
    jobName?: string
    /**
     * 男数量
     */
    manNumber?: string
    maxAge?: string
    minAge?: string
    /**
     * 岗位单价
     */
    money?: number
    /**
     * 单位
     */
    unit?: string
    /**
     * 女数量
     */
    womanNumber?: string
  }[]
  /**
   * 附件
   */
  fileUrlList?: string[]
  /**
   * 是否为节假日标准计价:true是；false否
   */
  holidayType?: boolean
  id?: number
  /**
   * 是否自动授权:true是；false否
   */
  isAutoAuth?: boolean
  isOverNight?: boolean
  /**
   * 劳务公司
   */
  laborId?: number
  /**
   * 劳务状态：10计划申请取消中；20申请取消已被拒绝
   */
  laborStatus?: number
  /**
   * 计价方式：10小时；20按天；30按计件
   */
  moneyType?: number
  /**
   * 计划名称
   */
  planName?: string
  relateWorkId?: number
  /**
   * 休息时长
   */
  relaxTime?: number
  /**
   * 取消原因
   */
  remark?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 开始用工时段
   */
  startHour?: string
  /**
   * 用工负责人
   */
  workPlanLeader?: number
}

/* **返回类型** */
export type PutPlanEditResponse = boolean

/* **请求函数** */
export async function putPlanEdit(body: PutPlanEditBody): Promise<any> {
  return request(`/plan/edit`, {
    method: Method.PUT,

    data: body,
  })
}

/**
 * 接口 [编辑设备↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/491)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `PUT /plan/edit/device`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface PutPlanEditDeviceQuery {
  /**
   * 多个设备逗号隔开
   */
  deviceIds?: string
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type PutPlanEditDeviceResponse = boolean

/* **请求函数** */
export async function putPlanEditDevice(query: PutPlanEditDeviceQuery): Promise<any> {
  return request(`/plan/edit/device`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [劳务申请取消计划操作↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/493)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/labor/cancel/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface GetPlanLaborCancelByIdQuery {
  /**
   * remark
   */
  remark?: string
  /**
   * 30:同意；20拒绝
   */
  status?: string
}

/* **请求params类型** */
export interface GetPlanLaborCancelByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetPlanLaborCancelByIdResponse = boolean

/* **请求函数** */
export async function getPlanLaborCancelById(
  query: GetPlanLaborCancelByIdQuery,
  params: GetPlanLaborCancelByIdParams,
): Promise<any> {
  return request(`/plan/labor/cancel/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [人员离职↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/495)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `DELETE /plan/labor/left/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface DeletePlanLaborLeftByIdQuery {
  /**
   * userId
   */
  userId: string
}

/* **请求params类型** */
export interface DeletePlanLaborLeftByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeletePlanLaborLeftByIdResponse = boolean

/* **请求函数** */
export async function deletePlanLaborLeftById(
  query: DeletePlanLaborLeftByIdQuery,
  params: DeletePlanLaborLeftByIdParams,
): Promise<any> {
  return request(`/plan/labor/left/${params.id}`, {
    method: Method.DELETE,
    params: query,
  })
}

/**
 * 接口 [移除人员↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/497)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `DELETE /plan/labor/remove/{id}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface DeletePlanLaborRemoveByIdQuery {
  /**
   * remark
   */
  remark?: string
  /**
   * userId
   */
  userId: string
}

/* **请求params类型** */
export interface DeletePlanLaborRemoveByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeletePlanLaborRemoveByIdResponse = boolean

/* **请求函数** */
export async function deletePlanLaborRemoveById(
  query: DeletePlanLaborRemoveByIdQuery,
  params: DeletePlanLaborRemoveByIdParams,
): Promise<any> {
  return request(`/plan/labor/remove/${params.id}`, {
    method: Method.DELETE,
    params: query,
  })
}

/**
 * 接口 [用工计划pdf信息↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/499)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/pdf/info/{planId}`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求params类型** */
export interface GetPlanPdfInfoByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetPlanPdfInfoByPlanIdResponse = any

/* **请求函数** */
export async function getPlanPdfInfoByPlanId(params: GetPlanPdfInfoByPlanIdParams): Promise<any> {
  return request(`/plan/pdf/info/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/501)
 *
 * @分类 [用工计划管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_43)
 * @标签 `用工计划管理`
 * @请求头 `GET /plan/query`
 * @更新时间 `2023-10-30 15:03:37`
 */

/* **请求query类型** */
export interface GetPlanQueryQuery {
  enterId?: string
  pageNum?: number
  pageSize?: number
  userId?: string
  状态?: string
  用工开始时间?: string
  用工结束时间?: string
  计划单号?: string
  计划单名称?: string
}

/* **返回类型** */
export interface GetPlanQueryResponse {
  data: {
    /**
     * 用工时间(天)
     */
    dateDay: number
    /**
     * 用工时段(小时)
     */
    dateHour: number
    enterWorkPlanDTO: {
      /**
       * 自动授权的设备列表
       */
      deviceIdList: {
        deviceId: number
        deviceName: string
      }[]
      /**
       * 结束时间
       */
      endDate: string
      /**
       * 结束用工时段
       */
      endHour: string
      /**
       * 岗位需求
       */
      enterWorkApplyJobDTOList: {
        /**
         * 数量
         */
        amount: number
        /**
         * 其他业务字段
         */
        bizData: string
        /**
         * 假期岗位单价
         */
        holidayMoney: number
        /**
         * 岗位id
         */
        jobId: number
        /**
         * 岗位名称
         */
        jobName: string
        /**
         * 男数量
         */
        manNumber: string
        maxAge: string
        minAge: string
        /**
         * 岗位单价
         */
        money: number
        /**
         * 单位
         */
        unit: string
        /**
         * 女数量
         */
        womanNumber: string
      }[]
      /**
       * 附件
       */
      fileUrlList: string[]
      /**
       * 是否为节假日标准计价:true是；false否
       */
      holidayType: boolean
      id: number
      /**
       * 是否自动授权:true是；false否
       */
      isAutoAuth: boolean
      isOverNight: boolean
      /**
       * 劳务公司
       */
      laborId: number
      /**
       * 劳务状态：10计划申请取消中；20申请取消已被拒绝
       */
      laborStatus: number
      /**
       * 计价方式：10小时；20按天；30按计件
       */
      moneyType: number
      /**
       * 计划名称
       */
      planName: string
      relateWorkId: number
      /**
       * 休息时长
       */
      relaxTime: number
      /**
       * 取消原因
       */
      remark: string
      /**
       * 开始时间
       */
      startDate: string
      /**
       * 开始用工时段
       */
      startHour: string
      /**
       * 用工负责人
       */
      workPlanLeader: number
    }
    /**
     * 主键ID
     */
    id: number
    /**
     * 劳务公司
     */
    laborName: string
    /**
     * 招工进度
     */
    percent: string
    /**
     * 工单号
     */
    planNo: string
    /**
     * 状态10:待接单；20接单中；30进行中；40待考勤确认；50待劳务确认；60待劳务结算；70：已拒绝；80 已完成；90：已取消
     */
    status: number
    /**
     * 总工时
     */
    totalHour: number
    /**
     * 总费用
     */
    totalMoney: number
  }[]
  total: number
}

/* **请求函数** */
export async function getPlanQuery(query: GetPlanQueryQuery): Promise<any> {
  return request(`/plan/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [添加考勤记录↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/253)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `POST /attendance/add`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求body类型** */
export interface PostAttendanceAddBody {
  /**
   * 考勤时间
   */
  attendanceDate?: string
  /**
   * 查询日期时间
   */
  dayDate?: string
  enterId?: number
  /**
   * 计件数量
   */
  itemCount?: number
  /**
   * 工作计划ID
   */
  planId?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 员工ID
   */
  userIdList?: number[]
}

/* **返回类型** */
export type PostAttendanceAddResponse = boolean

/* **请求函数** */
export async function postAttendanceAdd(body: PostAttendanceAddBody): Promise<any> {
  return request(`/attendance/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [修改日志↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/255)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/day/log/{id}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceDayLogByIdQuery {
  /**
   * 10:考勤；20计价
   */
  logType?: string
}

/* **请求params类型** */
export interface GetAttendanceDayLogByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetAttendanceDayLogByIdResponse = {
  jobName: string
  name: string
  oldData: string
  remark: string
  repairData: string
}[]

/* **请求函数** */
export async function getAttendanceDayLogById(
  query: GetAttendanceDayLogByIdQuery,
  params: GetAttendanceDayLogByIdParams,
): Promise<any> {
  return request(`/attendance/day/log/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [每日考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/257)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/day/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceDayByPlanIdQuery {
  /**
   * dayDate
   */
  dayDate: string
}

/* **请求params类型** */
export interface GetAttendanceDayByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAttendanceDayByPlanIdResponse {
  abstainedAmount: number
  backAmount: number
  delayAmount: number
  enterAttendanceDayDetailVOList: {
    afterStatus: number
    afternoonDate: string
    dayDate: string
    id: number
    jobName: string
    moonDate: string
    moonStatus: number
    name: string
    totalHour: number
    totalTimeAmount: number
    userId: number
  }[]
  missAmount: number
  repairAmount: number
  totalAmount: number
  totalAttendanceAmount: number
  totalHour: number
  totalPeopleAmount: number
}

/* **请求函数** */
export async function getAttendanceDayByPlanId(
  query: GetAttendanceDayByPlanIdQuery,
  params: GetAttendanceDayByPlanIdParams,
): Promise<any> {
  return request(`/attendance/day/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [添加计件数量↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/259)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `POST /attendance/item/add`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求body类型** */
export interface PostAttendanceItemAddBody {
  /**
   * 考勤时间
   */
  attendanceDate?: string
  /**
   * 查询日期时间
   */
  dayDate?: string
  enterId?: number
  /**
   * 计件数量
   */
  itemCount?: number
  /**
   * 工作计划ID
   */
  planId?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 员工ID
   */
  userIdList?: number[]
}

/* **返回类型** */
export type PostAttendanceItemAddResponse = boolean

/* **请求函数** */
export async function postAttendanceItemAdd(body: PostAttendanceItemAddBody): Promise<any> {
  return request(`/attendance/item/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [月度汇总↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/261)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/month/{month}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceMonthByMonthQuery {
  /**
   * planId
   */
  planId: string
}

/* **请求params类型** */
export interface GetAttendanceMonthByMonthParams {
  /**
   * 月份yyyy-MM-dd
   */
  month: string
}

/* **返回类型** */
export interface GetAttendanceMonthByMonthResponse {
  abstainedAmount: number
  backAmount: number
  delayAmount: number
  enterAttendancePlanMonthDetailVOList: {
    abstainedAmount: number
    attendanceDate: string
    backAmount: number
    delayAmount: number
    missAmount: number
    totalAmount: number
    totalAttendanceAmount: number
    totalHour: number
  }[]
  missAmount: number
  totalAmount: number
  totalAttendanceAmount: number
  totalHour: number
}

/* **请求函数** */
export async function getAttendanceMonthByMonth(
  query: GetAttendanceMonthByMonthQuery,
  params: GetAttendanceMonthByMonthParams,
): Promise<any> {
  return request(`/attendance/month/${params.month}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [用工计划下的人员↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/263)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/person/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求params类型** */
export interface GetAttendancePersonByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetAttendancePersonByPlanIdResponse = {
  age: string
  cardNo: string
  faceUrl: string
  id: number
  jobName: string
  laborName: string
  name: string
  phone: string
  sex: string
}[]

/* **请求函数** */
export async function getAttendancePersonByPlanId(params: GetAttendancePersonByPlanIdParams): Promise<any> {
  return request(`/attendance/person/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [用工考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/265)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/plan`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendancePlanQuery {
  /**
   * endDate
   */
  endDate?: string
  /**
   * planId
   */
  planId?: string
  /**
   * planName
   */
  planName?: string
  /**
   * startDate
   */
  startDate?: string
  /**
   * 30 进行中，40:待确认；50已确认，60待结算，80已完成
   */
  status?: string
}

/* **返回类型** */
export type GetAttendancePlanResponse = {
  abstainedAmount: number
  backAmount: number
  delayAmount: number
  missAmount: number
  planId: number
  planName: string
  status: number
  totalAttendanceAmount: number
  totalDay: number
  totalHour: number
  totalItemAmount: number
}[]

/* **请求函数** */
export async function getAttendancePlan(query: GetAttendancePlanQuery): Promise<any> {
  return request(`/attendance/plan`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [确认考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/267)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/plan/confirm/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求params类型** */
export interface GetAttendancePlanConfirmByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetAttendancePlanConfirmByPlanIdResponse = boolean

/* **请求函数** */
export async function getAttendancePlanConfirmByPlanId(params: GetAttendancePlanConfirmByPlanIdParams): Promise<any> {
  return request(`/attendance/plan/confirm/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [用工考勤详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/269)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/plan/detail/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求params类型** */
export interface GetAttendancePlanDetailByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAttendancePlanDetailByPlanIdResponse {
  abstainedAmount: number
  attendanceAmount: number
  backAmount: number
  delayAmount: number
  enterAttendanceUserVOList: {
    abstainedAmount: number
    backAmount: number
    delayAmount: number
    jobName: string
    missAmount: number
    repairAmount: number
    totalDay: number
    totalHour: number
    totalItemAmount: number
    userId: number
    userName: string
  }[]
  missAmount: number
  planName: string
  totalDay: number
  totalHour: number
  totalItemAmount: number
  totalPersonCount: number
}

/* **请求函数** */
export async function getAttendancePlanDetailByPlanId(params: GetAttendancePlanDetailByPlanIdParams): Promise<any> {
  return request(`/attendance/plan/detail/${params.planId}`, {
    method: Method.GET,
  })
}

/**
 * 接口 [分页查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/271)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/record/page`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceRecordPageQuery {
  /**
   * endDate
   */
  endDate?: string
  /**
   * name
   */
  name?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * planId
   */
  planId?: string
  /**
   * startDate
   */
  startDate?: string
}

/* **返回类型** */
export interface GetAttendanceRecordPageResponse {
  data: {
    gmtCreate: string
    name: string
    placeName: string
    planName: string
  }[]
  total: number
}

/* **请求函数** */
export async function getAttendanceRecordPage(query: GetAttendanceRecordPageQuery): Promise<any> {
  return request(`/attendance/record/page`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [补卡记录↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/273)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/repair/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceRepairByPlanIdQuery {
  /**
   * dayDate
   */
  dayDate?: string
  /**
   * name
   */
  name?: string
}

/* **请求params类型** */
export interface GetAttendanceRepairByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetAttendanceRepairByPlanIdResponse = {
  jobName: string
  name: string
  oldData: string
  remark: string
  repairData: string
}[]

/* **请求函数** */
export async function getAttendanceRepairByPlanId(
  query: GetAttendanceRepairByPlanIdQuery,
  params: GetAttendanceRepairByPlanIdParams,
): Promise<any> {
  return request(`/attendance/repair/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [员工考勤↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/275)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/user/day/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceUserDayByPlanIdQuery {
  /**
   * endDate
   */
  endDate?: string
  /**
   * jobId
   */
  jobId?: string
  /**
   * startDate
   */
  startDate?: string
}

/* **请求params类型** */
export interface GetAttendanceUserDayByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export type GetAttendanceUserDayByPlanIdResponse = {
  abstainedAmount: number
  backAmount: number
  delayAmount: number
  jobName: string
  missAmount: number
  repairAmount: number
  totalDay: number
  totalHour: number
  totalItemAmount: number
  userId: number
  userName: string
}[]

/* **请求函数** */
export async function getAttendanceUserDayByPlanId(
  query: GetAttendanceUserDayByPlanIdQuery,
  params: GetAttendanceUserDayByPlanIdParams,
): Promise<any> {
  return request(`/attendance/user/day/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [员工考勤详情↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/277)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/user/detail/{planId}`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceUserDetailByPlanIdQuery {
  /**
   * endDate
   */
  endDate?: string
  /**
   * startDate
   */
  startDate?: string
  /**
   * userId
   */
  userId: string
}

/* **请求params类型** */
export interface GetAttendanceUserDetailByPlanIdParams {
  /**
   * planId
   */
  planId: string
}

/* **返回类型** */
export interface GetAttendanceUserDetailByPlanIdResponse {
  enterAttendanceDayDetailVOList: {
    afterStatus: number
    afternoonDate: string
    dayDate: string
    id: number
    jobName: string
    moonDate: string
    moonStatus: number
    name: string
    totalHour: number
    totalTimeAmount: number
    userId: number
  }[]
  faceUrl: string
  jobName: string
  name: string
  planName: string
}

/* **请求函数** */
export async function getAttendanceUserDetailByPlanId(
  query: GetAttendanceUserDetailByPlanIdQuery,
  params: GetAttendanceUserDetailByPlanIdParams,
): Promise<any> {
  return request(`/attendance/user/detail/${params.planId}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [考勤调整↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/673)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `POST /attendance/adjust`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求body类型** */
export interface PostAttendanceAdjustBody {
  /**
   * 调整类型:10增加；20减少
   */
  adjustType?: number
  /**
   * 调整工时量/计件
   */
  amount?: number
  jobName?: string
  /**
   * 调整日前
   */
  modifyDate?: string
  /**
   * 工作计划ID
   */
  planId?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 调整人员ID
   */
  userId?: number
}

/* **返回类型** */
export type PostAttendanceAdjustResponse = boolean

/* **请求函数** */
export async function postAttendanceAdjust(body: PostAttendanceAdjustBody): Promise<any> {
  return request(`/attendance/adjust`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [调整记录↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/675)
 *
 * @分类 [考勤管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_45)
 * @标签 `考勤管理`
 * @请求头 `GET /attendance/adjust/page`
 * @更新时间 `2023-10-30 15:03:31`
 */

/* **请求query类型** */
export interface GetAttendanceAdjustPageQuery {
  /**
   * endDate
   */
  endDate?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * planId
   */
  planId: string
  /**
   * startDate
   */
  startDate?: string
}

/* **返回类型** */
export interface GetAttendanceAdjustPageResponse {
  data: {
    createDate: string
    id: number
    jobName: string
    modifyContent: string
    modifyDate: string
    name: string
    remark: string
  }[]
  total: number
}

/* **请求函数** */
export async function getAttendanceAdjustPage(query: GetAttendanceAdjustPageQuery): Promise<any> {
  return request(`/attendance/adjust/page`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [添加设备↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/339)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `POST /device/add`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostDeviceAddBody {
  deviceName?: string
  deviceNo?: string
}

/* **返回类型** */
export type PostDeviceAddResponse = boolean

/* **请求函数** */
export async function postDeviceAdd(body: PostDeviceAddBody): Promise<any> {
  return request(`/device/add`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [新增授权↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/341)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `POST /device/add/auth`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求body类型** */
export interface PostDeviceAddAuthBody {
  /**
   * 设备列表
   */
  deviceIdList?: number[]
  /**
   * 授权数据列表
   */
  enterDeviceAuthDetailDTOList?: {
    /**
     * 数据类型：10:人员；20用工计划
     */
    dataType?: number
    /**
     * 数据id
     */
    id?: number
  }[]
}

/* **返回类型** */
export type PostDeviceAddAuthResponse = boolean

/* **请求函数** */
export async function postDeviceAddAuth(body: PostDeviceAddAuthBody): Promise<any> {
  return request(`/device/add/auth`, {
    method: Method.POST,

    data: body,
  })
}

/**
 * 接口 [重新授权↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/343)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `PUT /device/again/auth/{id}`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求params类型** */
export interface PutDeviceAgainAuthByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type PutDeviceAgainAuthByIdResponse = boolean

/* **请求函数** */
export async function putDeviceAgainAuthById(params: PutDeviceAgainAuthByIdParams): Promise<any> {
  return request(`/device/again/auth/${params.id}`, {
    method: Method.PUT,
  })
}

/**
 * 接口 [用工计划列表↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/345)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `GET /device/auth/plan`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetDeviceAuthPlanQuery {
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * planName
   */
  planName?: string
}

/* **返回类型** */
export interface GetDeviceAuthPlanResponse {
  data: {
    /**
     * 自动授权的设备列表
     */
    deviceIdList: {
      deviceId: number
      deviceName: string
    }[]
    /**
     * 结束时间
     */
    endDate: string
    /**
     * 结束用工时段
     */
    endHour: string
    /**
     * 岗位需求
     */
    enterWorkApplyJobDTOList: {
      /**
       * 数量
       */
      amount: number
      /**
       * 其他业务字段
       */
      bizData: string
      /**
       * 假期岗位单价
       */
      holidayMoney: number
      /**
       * 岗位id
       */
      jobId: number
      /**
       * 岗位名称
       */
      jobName: string
      /**
       * 男数量
       */
      manNumber: string
      maxAge: string
      minAge: string
      /**
       * 岗位单价
       */
      money: number
      /**
       * 单位
       */
      unit: string
      /**
       * 女数量
       */
      womanNumber: string
    }[]
    /**
     * 附件
     */
    fileUrlList: string[]
    /**
     * 是否为节假日标准计价:true是；false否
     */
    holidayType: boolean
    id: number
    /**
     * 是否自动授权:true是；false否
     */
    isAutoAuth: boolean
    isOverNight: boolean
    /**
     * 劳务公司
     */
    laborId: number
    /**
     * 劳务状态：10计划申请取消中；20申请取消已被拒绝
     */
    laborStatus: number
    /**
     * 计价方式：10小时；20按天；30按计件
     */
    moneyType: number
    /**
     * 计划名称
     */
    planName: string
    relateWorkId: number
    /**
     * 休息时长
     */
    relaxTime: number
    /**
     * 取消原因
     */
    remark: string
    /**
     * 开始时间
     */
    startDate: string
    /**
     * 开始用工时段
     */
    startHour: string
    /**
     * 用工负责人
     */
    workPlanLeader: number
  }[]
  total: number
}

/* **请求函数** */
export async function getDeviceAuthPlan(query: GetDeviceAuthPlanQuery): Promise<any> {
  return request(`/device/auth/plan`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [授权人员列表↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/347)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `GET /device/auth/user`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetDeviceAuthUserQuery {
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
  /**
   * userName
   */
  userName?: string
}

/* **返回类型** */
export interface GetDeviceAuthUserResponse {
  data: {
    age: string
    cardNo: string
    faceUrl: string
    id: number
    jobName: string
    laborName: string
    name: string
    phone: string
    sex: string
  }[]
  total: number
}

/* **请求函数** */
export async function getDeviceAuthUser(query: GetDeviceAuthUserQuery): Promise<any> {
  return request(`/device/auth/user`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [取消授权↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/349)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `PUT /device/cancel/auth`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface PutDeviceCancelAuthQuery {
  /**
   * idList
   */
  idList: string
}

/* **返回类型** */
export type PutDeviceCancelAuthResponse = boolean

/* **请求函数** */
export async function putDeviceCancelAuth(query: PutDeviceCancelAuthQuery): Promise<any> {
  return request(`/device/cancel/auth`, {
    method: Method.PUT,
    params: query,
  })
}

/**
 * 接口 [删除设备↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/351)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `DELETE /device/delete/{id}`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求params类型** */
export interface DeleteDeviceDeleteByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type DeleteDeviceDeleteByIdResponse = boolean

/* **请求函数** */
export async function deleteDeviceDeleteById(params: DeleteDeviceDeleteByIdParams): Promise<any> {
  return request(`/device/delete/${params.id}`, {
    method: Method.DELETE,
  })
}

/**
 * 接口 [编辑设备↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/353)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `GET /device/edit/{id}`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetDeviceEditByIdQuery {
  /**
   * deviceName
   */
  deviceName: string
}

/* **请求params类型** */
export interface GetDeviceEditByIdParams {
  /**
   * id
   */
  id: string
}

/* **返回类型** */
export type GetDeviceEditByIdResponse = boolean

/* **请求函数** */
export async function getDeviceEditById(query: GetDeviceEditByIdQuery, params: GetDeviceEditByIdParams): Promise<any> {
  return request(`/device/edit/${params.id}`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [分页查询设备↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/355)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `GET /device/query`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetDeviceQueryQuery {
  /**
   * deviceName
   */
  deviceName?: string
  /**
   * deviceNo
   */
  deviceNo?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
}

/* **返回类型** */
export interface GetDeviceQueryResponse {
  data: {
    deviceName: string
    deviceNo: string
    id: number
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getDeviceQuery(query: GetDeviceQueryQuery): Promise<any> {
  return request(`/device/query`, {
    method: Method.GET,
    params: query,
  })
}

/**
 * 接口 [设备授权列表查询↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/357)
 *
 * @分类 [设备管理↗](http://fe.lanseyizhan.com:3000/project/25/interface/api/cat_47)
 * @标签 `设备管理`
 * @请求头 `GET /device/query/auth`
 * @更新时间 `2023-10-30 15:03:33`
 */

/* **请求query类型** */
export interface GetDeviceQueryAuthQuery {
  /**
   * deviceName
   */
  deviceName?: string
  /**
   * deviceNo
   */
  deviceNo?: string
  /**
   * name
   */
  name?: string
  /**
   * pageNum
   */
  pageNum?: number
  /**
   * pageSize
   */
  pageSize?: number
}

/* **返回类型** */
export interface GetDeviceQueryAuthResponse {
  data: {
    deviceName: string
    deviceNo: string
    faceUrl: string
    gmtModified: string
    id: number
    name: string
    status: number
  }[]
  total: number
}

/* **请求函数** */
export async function getDeviceQueryAuth(query: GetDeviceQueryAuthQuery): Promise<any> {
  return request(`/device/query/auth`, {
    method: Method.GET,
    params: query,
  })
}

/* prettier-ignore-end */
