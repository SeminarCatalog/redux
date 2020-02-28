/*
 * SeminarCatalog Redux
 * Redux bridge for SeminarCatalog API Javascript SDK
 *
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the file manually.
 */

import {createAsyncAction} from './createAsyncAction';

export const LIST = 'resource/list';
export const GET = 'resource/get';
export const CREATE = 'resource/create';
export const UPDATE = 'resource/update';
export const DELETE = 'resource/delete';

const getApiOperationName = (resource, type) => `${resource}${type.charAt(0).toUpperCase() + type.slice(1)}`;

export const createResourceActions = (resource, apiEndpoint) => ({
    LIST: createAsyncAction(`${LIST}/${resource}`, (payload) => ({
        payload: () => apiEndpoint[getApiOperationName(resource, 'list')]()
    })),
    GET: createAsyncAction(`${GET}/${resource}`, (id) => ({
        payload: () => apiEndpoint[getApiOperationName(resource, 'get')](id)
    })),
    CREATE: createAsyncAction(`${CREATE}/${resource}`, (payload) => ({
        payload: () => apiEndpoint[getApiOperationName(resource, 'create')](payload)
    })),
    UPDATE: createAsyncAction(`${UPDATE}/${resource}`, (payload) => ({
        payload: () => apiEndpoint[getApiOperationName(resource, 'update')](payload.id, payload)
    })),
    DELETE: createAsyncAction(`${DELETE}/${resource}`, (id) => ({
        payload: () => apiEndpoint[getApiOperationName(resource, 'delete')](id).then(response => id)
    })),
});
