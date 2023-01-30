import { APIResponse } from '@global/api/types';
import {
	AnyAction,
	CombinedState,
	Dispatch,
	MiddlewareArray,
	ThunkDispatch,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { RouteObject } from 'react-router-dom';

export interface AdminObject {
	id: number;
	name: string;
}

export interface UserObject {
	id: number;
	name: string;
}

export type AuthState = APIResponse<UserObject>;

export type UsersState = APIResponse<UserObject[]>;

export type AdminsState = APIResponse<AdminObject[]>;

export type PreloadFn = (store: Store) => Promise<any>;

export type PreloadedRouteObject = RouteObject & {
	preload?: PreloadFn;
};

export type RootState = CombinedState<{
	users: UsersState;
	auth: AuthState;
	admins: AdminsState;
}>;

export type Store = ToolkitStore<
	RootState,
	AnyAction,
	MiddlewareArray<[ThunkMiddleware<RootState, AnyAction, AxiosInstance>]>
>;

export type StoreDispatch = ThunkDispatch<
	RootState,
	AxiosInstance,
	AnyAction
> &
	Dispatch<AnyAction>;

declare global {
	interface Window {
		__PRELOADED_STATE__: object;
	}
}
