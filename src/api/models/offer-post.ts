/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Bundesland } from './bundesland';

/**
 * 
 * @export
 * @interface OfferPost
 */
export interface OfferPost {
    /**
     * 
     * @type {string}
     * @memberof OfferPost
     */
    'owner_pk': string;
    /**
     * 
     * @type {number}
     * @memberof OfferPost
     */
    'age': number;
    /**
     * 
     * @type {number}
     * @memberof OfferPost
     */
    'amount': number;
    /**
     * 
     * @type {number}
     * @memberof OfferPost
     */
    'price': number;
    /**
     * 
     * @type {Bundesland}
     * @memberof OfferPost
     */
    'region': Bundesland;
    /**
     * 
     * @type {number}
     * @memberof OfferPost
     */
    'size': number;
    /**
     * 
     * @type {number}
     * @memberof OfferPost
     */
    'power': number;
}



